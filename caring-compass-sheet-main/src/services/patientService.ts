import { supabase } from '@/lib/supabase'
import type { PatientData } from '@/types/patient'

export interface PatientRecord {
  id: string
  name: string
  age: string
  contact: string
  gender: string
  symptoms: string[]
  emotional: string
  financial: string
  spiritual: string
  trauma: string
  created_at: string
  updated_at: string
}

// Patient service functions
export const patientService = {
  /**
   * Create a new patient record
   */
  async createPatient(patientData: PatientData): Promise<{ data: PatientRecord | null; error: string | null }> {
    try {
      const { data, error } = await supabase
        .from('patients')
        .insert([
          {
            name: patientData.name,
            age: patientData.age,
            contact: patientData.contact,
            gender: patientData.gender,
            symptoms: patientData.symptoms,
            emotional: patientData.emotional,
            financial: patientData.financial,
            spiritual: patientData.spiritual,
            trauma: patientData.trauma,
          }
        ])
        .select()
        .single()

      if (error) {
        console.error('Error creating patient:', error)
        return { data: null, error: error.message }
      }

      return { data, error: null }
    } catch (error) {
      console.error('Unexpected error creating patient:', error)
      return { data: null, error: 'An unexpected error occurred while creating the patient record' }
    }
  },

  /**
   * Get all patient records
   */
  async getAllPatients(): Promise<{ data: PatientRecord[] | null; error: string | null }> {
    try {
      const { data, error } = await supabase
        .from('patients')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) {
        console.error('Error fetching patients:', error)
        return { data: null, error: error.message }
      }

      return { data, error: null }
    } catch (error) {
      console.error('Unexpected error fetching patients:', error)
      return { data: null, error: 'An unexpected error occurred while fetching patient records' }
    }
  },

  /**
   * Get a patient record by ID
   */
  async getPatientById(id: string): Promise<{ data: PatientRecord | null; error: string | null }> {
    try {
      const { data, error } = await supabase
        .from('patients')
        .select('*')
        .eq('id', id)
        .single()

      if (error) {
        console.error('Error fetching patient:', error)
        return { data: null, error: error.message }
      }

      return { data, error: null }
    } catch (error) {
      console.error('Unexpected error fetching patient:', error)
      return { data: null, error: 'An unexpected error occurred while fetching the patient record' }
    }
  },

  /**
   * Update a patient record
   */
  async updatePatient(id: string, patientData: Partial<PatientData>): Promise<{ data: PatientRecord | null; error: string | null }> {
    try {
      const { data, error } = await supabase
        .from('patients')
        .update({
          ...(patientData.name && { name: patientData.name }),
          ...(patientData.age && { age: patientData.age }),
          ...(patientData.contact && { contact: patientData.contact }),
          ...(patientData.gender && { gender: patientData.gender }),
          ...(patientData.symptoms && { symptoms: patientData.symptoms }),
          ...(patientData.emotional !== undefined && { emotional: patientData.emotional }),
          ...(patientData.financial !== undefined && { financial: patientData.financial }),
          ...(patientData.spiritual !== undefined && { spiritual: patientData.spiritual }),
          ...(patientData.trauma !== undefined && { trauma: patientData.trauma }),
        })
        .eq('id', id)
        .select()
        .single()

      if (error) {
        console.error('Error updating patient:', error)
        return { data: null, error: error.message }
      }

      return { data, error: null }
    } catch (error) {
      console.error('Unexpected error updating patient:', error)
      return { data: null, error: 'An unexpected error occurred while updating the patient record' }
    }
  },

  /**
   * Delete a patient record
   */
  async deletePatient(id: string): Promise<{ success: boolean; error: string | null }> {
    try {
      const { error } = await supabase
        .from('patients')
        .delete()
        .eq('id', id)

      if (error) {
        console.error('Error deleting patient:', error)
        return { success: false, error: error.message }
      }

      return { success: true, error: null }
    } catch (error) {
      console.error('Unexpected error deleting patient:', error)
      return { success: false, error: 'An unexpected error occurred while deleting the patient record' }
    }
  },

  /**
   * Search patients by name
   */
  async searchPatients(query: string): Promise<{ data: PatientRecord[] | null; error: string | null }> {
    try {
      const { data, error } = await supabase
        .from('patients')
        .select('*')
        .ilike('name', `%${query}%`)
        .order('created_at', { ascending: false })

      if (error) {
        console.error('Error searching patients:', error)
        return { data: null, error: error.message }
      }

      return { data, error: null }
    } catch (error) {
      console.error('Unexpected error searching patients:', error)
      return { data: null, error: 'An unexpected error occurred while searching patient records' }
    }
  }
} 