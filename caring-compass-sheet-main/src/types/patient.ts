
export interface PatientData {
  name: string;
  age: string;
  contact: string;
  gender: string;
  symptoms: string[];
  emotional: string;
  financial: string;
  spiritual: string;
  trauma: string;
}

export const SYMPTOMS_LIST = [
  'Pain', 'Nausea/Vomiting', 'Fatigue', 'Shortness of Breath',
  'Loss of Appetite', 'Sleep Disturbances', 'Anxiety', 'Depression',
  'Constipation', 'Difficulty Swallowing', 'Confusion', 'Weakness'
];
