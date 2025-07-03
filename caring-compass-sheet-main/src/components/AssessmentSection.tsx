
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { LucideIcon } from 'lucide-react';

interface AssessmentSectionProps {
  title: string;
  icon: LucideIcon;
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  colorClass: string;
  animationDelay?: string;
}

const AssessmentSection = ({
  title,
  icon: Icon,
  label,
  placeholder,
  value,
  onChange,
  colorClass,
  animationDelay = '0s'
}: AssessmentSectionProps) => {
  return (
    <Card 
      className="animate-fade-in-up shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm" 
      style={{ animationDelay }}
    >
      <CardHeader className={`bg-gradient-to-r ${colorClass} text-white rounded-t-lg`}>
        <CardTitle className="flex items-center gap-2">
          <Icon className="w-5 h-5" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-2">
          <Label htmlFor={title.toLowerCase().replace(/\s+/g, '-')} className={`${colorClass.replace('from-', 'text-').replace('to-', '').split(' ')[0]}-700 font-medium`}>
            {label}
          </Label>
          <Textarea
            id={title.toLowerCase().replace(/\s+/g, '-')}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className={`min-h-[100px] ${colorClass.replace('from-', 'border-').replace('to-', '').split(' ')[0]}-200 focus:${colorClass.replace('from-', 'border-').replace('to-', '').split(' ')[0]}-400 transition-colors`}
            placeholder={placeholder}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default AssessmentSection;
