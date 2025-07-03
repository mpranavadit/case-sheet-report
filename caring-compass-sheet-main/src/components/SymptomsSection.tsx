
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Stethoscope } from 'lucide-react';
import { SYMPTOMS_LIST } from '@/types/patient';

interface SymptomsSectionProps {
  selectedSymptoms: string[];
  onSymptomChange: (symptom: string, checked: boolean) => void;
}

const SymptomsSection = ({ selectedSymptoms, onSymptomChange }: SymptomsSectionProps) => {
  return (
    <Card className="animate-fade-in-up shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm" style={{ animationDelay: '0.2s' }}>
      <CardHeader className="bg-gradient-to-r from-comfort-500 to-comfort-600 text-white rounded-t-lg">
        <CardTitle className="flex items-center gap-2">
          <Stethoscope className="w-5 h-5" />
          Current Symptoms
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {SYMPTOMS_LIST.map((symptom, index) => (
            <div
              key={symptom}
              className="flex items-center space-x-2 p-3 rounded-lg bg-comfort-50 hover:bg-comfort-100 transition-colors animate-fade-in-left"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <Checkbox
                id={symptom}
                checked={selectedSymptoms.includes(symptom)}
                onCheckedChange={(checked) => onSymptomChange(symptom, checked as boolean)}
                className="border-comfort-400 data-[state=checked]:bg-comfort-500"
              />
              <Label
                htmlFor={symptom}
                className="text-sm font-medium text-comfort-800 cursor-pointer"
              >
                {symptom}
              </Label>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SymptomsSection;
