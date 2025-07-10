import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { User, Phone, Calendar } from 'lucide-react';

const DoctorDemographics = () => {
  return (
    <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
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
            />
          </div>

          {/* Specialization */}
          <div>
            <Label htmlFor="doctorSpecialization" className="text-blue-600 font-medium">
              Specialization
            </Label>
            <Select>
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
            <Select>
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
            />
          </div>

          {/* Qualifications */}
          <div className="md:col-span-2">
            <Label htmlFor="doctorQualifications" className="text-blue-600 font-medium">
              Qualifications
            </Label>
            <Select>
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

export default DoctorDemographics;
