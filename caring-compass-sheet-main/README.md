# Lakshmi Pain and Palliative Care Sheet

A comprehensive patient care documentation system built with React, TypeScript, and Supabase. This application allows healthcare providers to document patient assessments including demographics, symptoms, emotional state, financial concerns, spiritual needs, and trauma history.

## Features

- **Patient Demographics**: Capture basic patient information
- **Symptoms Tracking**: Multi-select symptom checklist
- **Comprehensive Assessments**: 
  - Emotional & Psychological Assessment
  - Financial & Social Assessment
  - Spiritual & Cultural Assessment
  - Past Trauma & Significant History
- **Database Storage**: All data is securely stored in Supabase
- **Real-time Validation**: Form validation with user feedback
- **Responsive Design**: Works on desktop and mobile devices

## Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS
- **Backend**: Supabase (PostgreSQL database)
- **Build Tool**: Vite
- **Package Manager**: Bun
- **UI Components**: shadcn/ui components

## Setup Instructions

### Prerequisites

- Node.js (v18 or higher)
- Bun package manager
- A Supabase account and project

### 1. Clone the Repository

```bash
git clone <repository-url>
cd case-sheet-report/caring-compass-sheet-main
```

### 2. Install Dependencies

```bash
bun install
```

### 3. Set Up Supabase

1. Create a new project at [supabase.com](https://supabase.com)
2. Go to your project dashboard
3. Navigate to Settings > API
4. Copy your Project URL and anon public key

### 4. Configure Environment Variables

Create a `.env.local` file in the root directory:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 5. Set Up Database Schema

1. Go to your Supabase project dashboard
2. Navigate to the SQL Editor
3. Run the SQL script from `supabase-setup.sql`:

```sql
-- Create the patients table
CREATE TABLE IF NOT EXISTS patients (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  age TEXT NOT NULL,
  contact TEXT NOT NULL,
  gender TEXT NOT NULL,
  symptoms TEXT[] DEFAULT '{}',
  emotional TEXT DEFAULT '',
  financial TEXT DEFAULT '',
  spiritual TEXT DEFAULT '',
  trauma TEXT DEFAULT '',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create an index on created_at for better query performance
CREATE INDEX IF NOT EXISTS patients_created_at_idx ON patients(created_at DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE patients ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows all operations for now
CREATE POLICY "Allow all operations on patients" ON patients
  FOR ALL USING (true);

-- Create a function to automatically update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = TIMEZONE('utc'::text, NOW());
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create a trigger to automatically update the updated_at column
CREATE TRIGGER update_patients_updated_at
  BEFORE UPDATE ON patients
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
```

### 6. Start the Development Server

```bash
bun run dev
```

The application will be available at `http://localhost:5173`

## Project Structure

```
src/
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── AssessmentSection.tsx
│   ├── PalliativeCareSheet.tsx
│   ├── PatientDemographics.tsx
│   └── SymptomsSection.tsx
├── lib/
│   └── supabase.ts         # Supabase client configuration
├── services/
│   └── patientService.ts   # Database operations
├── types/
│   └── patient.ts          # TypeScript type definitions
└── pages/
    └── Index.tsx           # Main page component
```

## Database Schema

The application uses a single `patients` table with the following structure:

- `id`: UUID primary key
- `name`: Patient name (required)
- `age`: Patient age (required)
- `contact`: Contact information (required)
- `gender`: Patient gender (required)
- `symptoms`: Array of selected symptoms
- `emotional`: Emotional assessment notes
- `financial`: Financial assessment notes
- `spiritual`: Spiritual assessment notes
- `trauma`: Trauma history notes
- `created_at`: Record creation timestamp
- `updated_at`: Record last update timestamp

## Available Operations

The patient service provides the following operations:

- `createPatient(patientData)`: Create a new patient record
- `getAllPatients()`: Retrieve all patient records
- `getPatientById(id)`: Get a specific patient record
- `updatePatient(id, patientData)`: Update a patient record
- `deletePatient(id)`: Delete a patient record
- `searchPatients(query)`: Search patients by name

## Security Considerations

- Row Level Security (RLS) is enabled on the patients table
- Currently configured with a permissive policy for development
- For production, implement proper authentication and authorization
- Consider implementing user roles and permissions

## Development

### Running Tests

```bash
bun test
```

### Building for Production

```bash
bun run build
```

### Linting

```bash
bun run lint
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support or questions, please contact the development team or create an issue in the repository.
