// supabaseClient.js
import { createClient } from '@supabase/supabase-js';

// Replace with your actual Supabase URL and anon key
const supabaseUrl = 'YOUR_SUPABASE_URL';
const supabaseKey = 'YOUR_SUPABASE_ANON_KEY';

export const supabase = createClient(supabaseUrl, supabaseKey);

// API functions for the palliative care system
export const palliativeCareAPI = {
  // Create or update doctor
  async upsertDoctor(doctorData) {
    try {
      const { data, error } = await supabase
        .from('doctors')
        .upsert({
          full_name: doctorData.fullName,
          age: doctorData.age ? parseInt(doctorData.age) : null,
          contact: doctorData.contact,
          specialization: doctorData.specialization,
          gender: doctorData.gender,
          emergency_contact: doctorData.emergencyContact,
          qualifications: doctorData.qualifications
        }, {
          onConflict: 'full_name,contact', // Avoid duplicates based on name and contact
          returning: 'minimal'
        });

      if (error) throw error;
      return { success: true, data };
    } catch (error) {
      console.error('Error upserting doctor:', error);
      return { success: false, error: error.message };
    }
  },

  // Create patient
  async createPatient(patientData) {
    try {
      const { data, error } = await supabase
        .from('patients')
        .insert({
          name: patientData.name,
          age: parseInt(patientData.age),
          contact: patientData.contact,
          gender: patientData.gender
        })
        .select()
        .single();

      if (error) throw error;
      return { success: true, data };
    } catch (error) {
      console.error('Error creating patient:', error);
      return { success: false, error: error.message };
    }
  },

  // Create patient assessment
  async createPatientAssessment(patientId, doctorId, assessmentData) {
    try {
      const { data, error } = await supabase
        .from('patient_assessments')
        .insert({
          patient_id: patientId,
          doctor_id: doctorId,
          symptoms: assessmentData.symptoms,
          emotional_assessment: assessmentData.emotional,
          financial_assessment: assessmentData.financial,
          spiritual_assessment: assessmentData.spiritual,
          medical_history: assessmentData.trauma
        })
        .select()
        .single();

      if (error) throw error;
      return { success: true, data };
    } catch (error) {
      console.error('Error creating patient assessment:', error);
      return { success: false, error: error.message };
    }
  },

  // Complete workflow: save doctor, patient, and assessment
  async saveCompleteAssessment(doctorData, patientData) {
    try {
      // 1. Create or update doctor
      const doctorResult = await this.upsertDoctor(doctorData);
      if (!doctorResult.success) {
        throw new Error(`Doctor creation failed: ${doctorResult.error}`);
      }

      // 2. Get or create doctor ID
      const { data: doctorRecord, error: doctorFetchError } = await supabase
        .from('doctors')
        .select('id')
        .eq('full_name', doctorData.fullName)
        .eq('contact', doctorData.contact)
        .single();

      if (doctorFetchError) throw doctorFetchError;

      // 3. Create patient
      const patientResult = await this.createPatient(patientData);
      if (!patientResult.success) {
        throw new Error(`Patient creation failed: ${patientResult.error}`);
      }

      // 4. Create patient assessment
      const assessmentResult = await this.createPatientAssessment(
        patientResult.data.id,
        doctorRecord.id,
        patientData
      );
      if (!assessmentResult.success) {
        throw new Error(`Assessment creation failed: ${assessmentResult.error}`);
      }

      return {
        success: true,
        data: {
          doctor: doctorRecord,
          patient: patientResult.data,
          assessment: assessmentResult.data
        }
      };
    } catch (error) {
      console.error('Error in complete assessment save:', error);
      return { success: false, error: error.message };
    }
  },

  // Get all patients with their latest assessments
  async getAllPatientsWithAssessments() {
    try {
      const { data, error } = await supabase
        .from('patients')
        .select(`
          *,
          patient_assessments (
            *,
            doctors (
              full_name,
              specialization
            )
          )
        `)
        .order('created_at', { ascending: false });

      if (error) throw error;
      return { success: true, data };
    } catch (error) {
      console.error('Error fetching patients with assessments:', error);
      return { success: false, error: error.message };
    }
  },

  // Get patient by ID with assessments
  async getPatientById(patientId) {
    try {
      const { data, error } = await supabase
        .from('patients')
        .select(`
          *,
          patient_assessments (
            *,
            doctors (
              full_name,
              specialization,
              contact
            )
          )
        `)
        .eq('id', patientId)
        .single();

      if (error) throw error;
      return { success: true, data };
    } catch (error) {
      console.error('Error fetching patient by ID:', error);
      return { success: false, error: error.message };
    }
  },

  // Get all doctors
  async getAllDoctors() {
    try {
      const { data, error } = await supabase
        .from('doctors')
        .select('*')
        .order('full_name', { ascending: true });

      if (error) throw error;
      return { success: true, data };
    } catch (error) {
      console.error('Error fetching doctors:', error);
      return { success: false, error: error.message };
    }
  },

  // Search patients by name or contact
  async searchPatients(searchTerm) {
    try {
      const { data, error } = await supabase
        .from('patients')
        .select(`
          *,
          patient_assessments (
            created_at,
            symptoms
          )
        `)
        .or(`name.ilike.%${searchTerm}%,contact.ilike.%${searchTerm}%`)
        .order('created_at', { ascending: false });

      if (error) throw error;
      return { success: true, data };
    } catch (error) {
      console.error('Error searching patients:', error);
      return { success: false, error: error.message };
    }
  },

  // Update patient assessment
  async updatePatientAssessment(assessmentId, updates) {
    try {
      const { data, error } = await supabase
        .from('patient_assessments')
        .update(updates)
        .eq('id', assessmentId)
        .select()
        .single();

      if (error) throw error;
      return { success: true, data };
    } catch (error) {
      console.error('Error updating patient assessment:', error);
      return { success: false, error: error.message };
    }
  },

  // Delete patient (this will cascade delete assessments)
  async deletePatient(patientId) {
    try {
      const { error } = await supabase
        .from('patients')
        .delete()
        .eq('id', patientId);

      if (error) throw error;
      return { success: true };
    } catch (error) {
      console.error('Error deleting patient:', error);
      return { success: false, error: error.message };
    }
  }
};
