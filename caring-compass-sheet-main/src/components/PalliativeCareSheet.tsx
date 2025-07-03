
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Brain, DollarSign, Cross, Clock } from 'lucide-react';
import { PatientData } from '@/types/patient';
import PatientDemographics from './PatientDemographics';
import SymptomsSection from './SymptomsSection';
import AssessmentSection from './AssessmentSection';

// Custom SVG component for the care symbol
const CareSymbol = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 100 100"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Heart part */}
    <path
      d="M25 35c0-10 8-18 18-18s18 8 18 18c0 15-18 30-18 30S25 50 25 35z"
      fill="currentColor"
      opacity="0.9"
    />
    {/* Figure/person part */}
    <circle cx="70" cy="25" r="8" fill="currentColor" opacity="0.8" />
    <path
      d="M70 35 L65 50 L60 65 M70 35 L75 50 L80 65 M70 35 L70 50 M65 45 L75 45"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity="0.8"
    />
  </svg>
);

const PalliativeCareSheet = () => {
  const [patientData, setPatientData] = useState<PatientData>({
    name: '',
    age: '',
    contact: '',
    gender: '',
    symptoms: [],
    emotional: '',
    financial: '',
    spiritual: '',
    trauma: ''
  });

  const handleSymptomChange = (symptom: string, checked: boolean) => {
    setPatientData(prev => ({
      ...prev,
      symptoms: checked 
        ? [...prev.symptoms, symptom]
        : prev.symptoms.filter(s => s !== symptom)
    }));
  };

  const handleInputChange = (field: keyof PatientData, value: string) => {
    setPatientData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Patient Data:', patientData);
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-healing-50 via-comfort-50 to-care-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in-up">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-healing-500 to-care-500 rounded-full mb-4 animate-float">
            <CareSymbol className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-healing-600 to-care-600 bg-clip-text text-transparent mb-2">
            Lakshmi Pain and Palliative Care
          </h1>
          <p className="text-gray-600 text-lg mb-2">Compassion . Hope . Knowledge</p>
          <p className="text-gray-500">Comprehensive patient care documentation</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Patient Demographics */}
          <PatientDemographics 
            patientData={patientData}
            onInputChange={handleInputChange}
          />

          {/* Symptoms Section */}
          <SymptomsSection 
            selectedSymptoms={patientData.symptoms}
            onSymptomChange={handleSymptomChange}
          />

          {/* Assessment Sections */}
          <AssessmentSection
            title="Emotional & Psychological Assessment"
            icon={Brain}
            label="Emotional state, coping mechanisms, and psychological needs"
            placeholder="Describe the patient's emotional state, anxiety levels, coping strategies, and any psychological support needs..."
            value={patientData.emotional}
            onChange={(value) => handleInputChange('emotional', value)}
            colorClass="from-care-500 to-care-600"
            animationDelay="0.3s"
          />

          <AssessmentSection
            title="Financial & Social Assessment"
            icon={DollarSign}
            label="Financial concerns, insurance status, and social support systems"
            placeholder="Document financial hardships, insurance coverage, family support, community resources, and social needs..."
            value={patientData.financial}
            onChange={(value) => handleInputChange('financial', value)}
            colorClass="from-green-500 to-green-600"
            animationDelay="0.4s"
          />

          <AssessmentSection
            title="Spiritual & Cultural Assessment"
            icon={Cross}
            label="Spiritual beliefs, religious practices, and cultural considerations"
            placeholder="Record spiritual beliefs, religious affiliations, cultural background, and any specific spiritual care needs..."
            value={patientData.spiritual}
            onChange={(value) => handleInputChange('spiritual', value)}
            colorClass="from-purple-500 to-purple-600"
            animationDelay="0.5s"
          />

          <AssessmentSection
            title="Past Trauma & Significant History"
            icon={Clock}
            label="Previous traumatic experiences, significant life events, and relevant history"
            placeholder="Document any past trauma, significant life events, previous losses, or experiences that may affect current care..."
            value={patientData.trauma}
            onChange={(value) => handleInputChange('trauma', value)}
            colorClass="from-amber-500 to-amber-600"
            animationDelay="0.6s"
          />

          {/* Submit Button */}
          <div className="flex justify-center pt-6 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
            <Button
              type="submit"
              className="px-8 py-3 bg-gradient-to-r from-healing-500 to-care-500 hover:from-healing-600 hover:to-care-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Save Patient Assessment
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PalliativeCareSheet;
