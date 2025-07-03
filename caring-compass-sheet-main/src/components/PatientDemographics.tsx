
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { User, Phone, Calendar } from 'lucide-react';
import { PatientData } from '@/types/patient';

interface PatientDemographicsProps {
  patientData: PatientData;
  onInputChange: (field: keyof PatientData, value: string) => void;
}

const PatientDemographics = ({ patientData, onInputChange }: PatientDemographicsProps) => {
  return (
    <Card className="animate-fade-in-up shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
      <CardHeader className="bg-gradient-to-r from-healing-500 to-healing-600 text-white rounded-t-lg">
        <CardTitle className="flex items-center gap-2">
          <User className="w-5 h-5" />
          Patient Demographics
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2 animate-fade-in-left">
            <Label htmlFor="name" className="text-healing-700 font-medium">Full Name</Label>
            <Input
              id="name"
              value={patientData.name}
              onChange={(e) => onInputChange('name', e.target.value)}
              className="border-healing-200 focus:border-healing-400 transition-colors"
              placeholder="Enter patient's full name"
            />
          </div>
          
          <div className="space-y-2 animate-fade-in-left" style={{ animationDelay: '0.1s' }}>
            <Label htmlFor="age" className="text-healing-700 font-medium flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              Age
            </Label>
            <Input
              id="age"
              type="number"
              value={patientData.age}
              onChange={(e) => onInputChange('age', e.target.value)}
              className="border-healing-200 focus:border-healing-400 transition-colors"
              placeholder="Patient's age"
            />
          </div>

          <div className="space-y-2 animate-fade-in-left" style={{ animationDelay: '0.2s' }}>
            <Label htmlFor="contact" className="text-healing-700 font-medium flex items-center gap-1">
              <Phone className="w-4 h-4" />
              Contact Number
            </Label>
            <Input
              id="contact"
              type="tel"
              value={patientData.contact}
              onChange={(e) => onInputChange('contact', e.target.value)}
              className="border-healing-200 focus:border-healing-400 transition-colors"
              placeholder="Phone number"
            />
          </div>

          <div className="space-y-2 animate-fade-in-left" style={{ animationDelay: '0.3s' }}>
            <Label htmlFor="gender" className="text-healing-700 font-medium">Gender</Label>
            <Select onValueChange={(value) => onInputChange('gender', value)}>
              <SelectTrigger className="border-healing-200 focus:border-healing-400">
                <SelectValue placeholder="Select gender" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="other">Other</SelectItem>
                <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PatientDemographics;
