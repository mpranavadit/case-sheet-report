import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Brain, DollarSign, Cross, Clock, User, Phone, Calendar } from 'lucide-react';

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

// Doctor Demographics Component
const DoctorDemographics = ({ doctorData, onInputChange }) => {
  return (
    <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm animate-fade-in-up">
      <CardHeader className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-t-lg">
        <CardTitle className="flex items-center gap-2">
          <User className="h-5 w-5" />
          Doctor Demographics
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Full Name */}
          <div>
            <Label htmlFor="doctorFullName" className="text-blue-600 font-medium">
              Full Name
            </Label>
            <Input 
              id="doctorFullName" 
              placeholder="Enter doctor's full name" 
              className="mt-2 border-gray-300 focus:border-blue-500"
              value={doctorData.fullName}
              onChange={(e) => onInputChange('fullName', e.target.value)}
            />
          </div>

          {/* Age */}
          <div>
            <Label htmlFor="doctorAge" className="text-blue-600 font-medium flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Age
            </Label>
            <Input 
              id="doctorAge" 
              type="number"
              placeholder="Doctor's age" 
              className="mt-2 border-gray-300 focus:border-blue-500"
              value={doctorData.age}
              onChange={(e) => onInputChange('age', e.target.value)}
            />
          </div>

          {/* Contact Number */}
          <div>
            <Label htmlFor="doctorContact" className="text-blue-600 font-medium flex items-center gap-2">
              <Phone className="h-4 w-4" />
              Contact Number
            </Label>
            <Input 
              id="doctorContact" 
              placeholder="Phone number" 
              className="mt-2 border-gray-300 focus:border-blue-500"
              value={doctorData.contact}
              onChange={(e) => onInputChange('contact', e.target.value)}
            />
          </div>

          {/* Specialization */}
          <div>
            <Label htmlFor="doctorSpecialization" className="text-blue-600 font-medium">
              Specialization
            </Label>
            <Select value={doctorData.specialization} onValueChange={(value) => onInputChange('specialization', value)}>
              <SelectTrigger className="mt-2 border-gray-300 focus:border-blue-500">
                <SelectValue placeholder="Select specialization" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pain-management">Pain Management</SelectItem>
                <SelectItem value="palliative-care">Palliative Care</SelectItem>
                <SelectItem value="anesthesiology">Anesthesiology</SelectItem>
                <SelectItem value="oncology">Oncology</SelectItem>
                <SelectItem value="neurology">Neurology</SelectItem>
                <SelectItem value="orthopedics">Orthopedics</SelectItem>
                <SelectItem value="general-medicine">General Medicine</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Gender */}
          <div>
            <Label htmlFor="doctorGender" className="text-blue-600 font-medium">
              Gender
            </Label>
            <Select value={doctorData.gender} onValueChange={(value) => onInputChange('gender', value)}>
              <SelectTrigger className="mt-2 border-gray-300 focus:border-blue-500">
                <SelectValue placeholder="Select gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Emergency Contact */}
          <div>
            <Label htmlFor="doctorEmergencyContact" className="text-blue-600 font-medium">
              Emergency Contact
            </Label>
            <Input 
              id="doctorEmergencyContact" 
              placeholder="Phone number" 
              className="mt-2 border-gray-300 focus:border-blue-500"
              value={doctorData.emergencyContact}
              onChange={(e) => onInputChange('emergencyContact', e.target.value)}
            />
          </div>

          {/* Qualifications */}
          <div className="md:col-span-2">
            <Label htmlFor="doctorQualifications" className="text-blue-600 font-medium">
              Qualifications
            </Label>
            <Select value={doctorData.qualifications} onValueChange={(value) => onInputChange('qualifications', value)}>
              <SelectTrigger className="mt-2 border-gray-300 focus:border-blue-500">
                <SelectValue placeholder="Select primary qualification" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="mbbs">MBBS</SelectItem>
                <SelectItem value="md">MD</SelectItem>
                <SelectItem value="ms">MS</SelectItem>
                <SelectItem value="dnb">DNB</SelectItem>
                <SelectItem value="diploma">Diploma</SelectItem>
                <SelectItem value="fellowship">Fellowship</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

// Patient Demographics Component (simplified version)
const PatientDemographics = ({ patientData, onInputChange }) => {
  return (
    <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm animate-fade-in-up">
      <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg">
        <CardTitle className="flex items-center gap-2">
          <User className="h-5 w-5" />
          Patient Demographics
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="patientName" className="text-blue-600 font-medium">
              Full Name *
            </Label>
            <Input 
              id="patientName" 
              placeholder="Enter patient's full name" 
              className="mt-2 border-gray-300 focus:border-blue-500"
              value={patientData.name}
              onChange={(e) => onInputChange('name', e.target.value)}
            />
          </div>
          
          <div>
            <Label htmlFor="patientAge" className="text-blue-600 font-medium">
              Age *
            </Label>
            <Input 
              id="patientAge" 
              type="number"
              placeholder="Patient's age" 
              className="mt-2 border-gray-300 focus:border-blue-500"
              value={patientData.age}
              onChange={(e) => onInputChange('age', e.target.value)}
            />
          </div>
          
          <div>
            <Label htmlFor="patientContact" className="text-blue-600 font-medium">
              Contact Number *
            </Label>
            <Input 
              id="patientContact" 
              placeholder="Phone number" 
              className="mt-2 border-gray-300 focus:border-blue-500"
              value={patientData.contact}
              onChange={(e) => onInputChange('contact', e.target.value)}
            />
          </div>
          
          <div>
            <Label htmlFor="patientGender" className="text-blue-600 font-medium">
              Gender *
            </Label>
            <Select value={patientData.gender} onValueChange={(value) => onInputChange('gender', value)}>
              <SelectTrigger className="mt-2 border-gray-300 focus:border-blue-500">
                <SelectValue placeholder="Select gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

// Simplified components for demonstration
const SymptomsSection = ({ selectedSymptoms, onSymptomChange }) => {
  const symptoms = [
    'Pain', 'Nausea', 'Fatigue', 'Shortness of breath', 'Loss of appetite',
    'Difficulty sleeping', 'Anxiety', 'Depression', 'Confusion', 'Constipation'
  ];

  return (
    <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm animate-fade-in-up">
      <CardHeader className="bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-t-lg">
        <CardTitle>Symptoms Assessment</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {symptoms.map((symptom) => (
            <div key={symptom} className="flex items-center space-x-2">
              <input
                type="checkbox"
                id={symptom}
                checked={selectedSymptoms.includes(symptom)}
                onChange={(e) => onSymptomChange(symptom, e.target.checked)}
                className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
              />
              <label htmlFor={symptom} className="text-sm font-medium text-gray-700">
                {symptom}
              </label>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const AssessmentSection = ({ 
  title, 
  icon: Icon, 
  label, 
  placeholder, 
  value, 
  onChange, 
  colorClass, 
  animationDelay 
}) => {
  return (
    <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm animate-fade-in-up">
      <CardHeader className={`bg-gradient-to-r ${colorClass} text-white rounded-t-lg`}>
        <CardTitle className="flex items-center gap-2">
          <Icon className="h-5 w-5" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <Label className="text-gray-700 font-medium mb-3 block">{label}</Label>
        <textarea
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full h-32 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
        />
      </CardContent>
    </Card>
  );
};

const PalliativeCareSheet = () => {
  const [patientData, setPatientData] = useState({
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

  const [doctorData, setDoctorData] = useState({
    fullName: '',
    age: '',
    contact: '',
    specialization: '',
    gender: '',
    emergencyContact: '',
    qualifications: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(null);

  const handlePatientChange = (field, value) => {
    setPatientData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleDoctorChange = (field, value) => {
    setDoctorData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSymptomChange = (symptom, checked) => {
    setPatientData(prev => ({
      ...prev,
      symptoms: checked 
        ? [...prev.symptoms, symptom]
        : prev.symptoms.filter(s => s !== symptom)
    }));
  };

  const handleSubmit = async () => {
    // Validate required fields
    if (!patientData.name || !patientData.age || !patientData.contact || !patientData.gender) {
      setSubmitMessage({ type: 'error', message: 'Please fill in all required patient fields (Name, Age, Contact, Gender)' });
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitMessage({ type: 'success', message: 'Patient assessment and doctor information saved successfully!' });
      
      // Reset forms after successful submission
      setPatientData({
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
      
      setDoctorData({
        fullName: '',
        age: '',
        contact: '',
        specialization: '',
        gender: '',
        emergencyContact: '',
        qualifications: ''
      });
      
    } catch (error) {
      setSubmitMessage({ type: 'error', message: 'An unexpected error occurred while saving the data' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mb-4">
            <CareSymbol className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
            Lakshmi Pain and Palliative Care
          </h1>
          <p className="text-gray-600 text-lg mb-2">Compassion . Hope . Knowledge</p>
          <p className="text-gray-500">Comprehensive patient care documentation</p>
        </div>

        <div className="space-y-6">
          {/* Patient Demographics */}
          <PatientDemographics 
            patientData={patientData}
            onInputChange={handlePatientChange}
          />

          {/* Doctor Demographics */}
          <DoctorDemographics 
            doctorData={doctorData}
            onInputChange={handleDoctorChange}
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
            onChange={(value) => handlePatientChange('emotional', value)}
            colorClass="from-purple-500 to-purple-600"
            animationDelay="0.3s"
          />

          <AssessmentSection
            title="Financial & Social Assessment"
            icon={DollarSign}
            label="Financial concerns, insurance status, and social support systems"
            placeholder="Document financial hardships, insurance coverage, family support, community resources, and social needs..."
            value={patientData.financial}
            onChange={(value) => handlePatientChange('financial', value)}
            colorClass="from-green-500 to-green-600"
            animationDelay="0.4s"
          />

          <AssessmentSection
            title="Spiritual & Cultural Assessment"
            icon={Cross}
            label="Spiritual beliefs, religious practices, and cultural considerations"
            placeholder="Record spiritual beliefs, religious affiliations, cultural background, and any specific spiritual care needs..."
            value={patientData.spiritual}
            onChange={(value) => handlePatientChange('spiritual', value)}
            colorClass="from-purple-500 to-purple-600"
            animationDelay="0.5s"
          />

          <AssessmentSection
            title="Medical History"
            icon={Clock}
            label="Previous traumatic experiences, significant life events, and relevant history"
            placeholder="Document previous surgeries and illnesses that may cause current symptoms....."
            value={patientData.trauma}
            onChange={(value) => handlePatientChange('trauma', value)}
            colorClass="from-amber-500 to-amber-600"
            animationDelay="0.6s"
          />

          {/* Submit Message */}
          {submitMessage && (
            <div className={`text-center p-4 rounded-lg ${
              submitMessage.type === 'success' 
                ? 'bg-green-100 text-green-800 border border-green-200' 
                : 'bg-red-100 text-red-800 border border-red-200'
            }`}>
              {submitMessage.message}
            </div>
          )}

          {/* Submit Button */}
          <div className="flex justify-center pt-6">
            <Button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isSubmitting ? 'Saving...' : 'Save Assessment & Doctor Info'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PalliativeCareSheet
