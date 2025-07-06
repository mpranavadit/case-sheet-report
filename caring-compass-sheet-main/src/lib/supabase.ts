import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export interface Database {
  public: {
    Tables: {
      patients: {
        Row: {
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
        Insert: {
          id?: string
          name: string
          age: string
          contact: string
          gender: string
          symptoms?: string[]
          emotional?: string
          financial?: string
          spiritual?: string
          trauma?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          age?: string
          contact?: string
          gender?: string
          symptoms?: string[]
          emotional?: string
          financial?: string
          spiritual?: string
          trauma?: string
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
} 