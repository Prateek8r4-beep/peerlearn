export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          email: string
          phone: string | null
          full_name: string
          avatar_url: string | null
          bio: string | null
          college: string | null
          university: string | null
          course: string | null
          year_of_study: number | null
          subjects: string[] | null
          interests: string[] | null
          is_verified: boolean
          rating: number
          total_reviews: number
          study_streak: number
          last_active: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          phone?: string | null
          full_name: string
          avatar_url?: string | null
          bio?: string | null
          college?: string | null
          university?: string | null
          course?: string | null
          year_of_study?: number | null
          subjects?: string[] | null
          interests?: string[] | null
          is_verified?: boolean
          rating?: number
          total_reviews?: number
          study_streak?: number
          last_active?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          phone?: string | null
          full_name?: string
          avatar_url?: string | null
          bio?: string | null
          college?: string | null
          university?: string | null
          course?: string | null
          year_of_study?: number | null
          subjects?: string[] | null
          interests?: string[] | null
          is_verified?: boolean
          rating?: number
          total_reviews?: number
          study_streak?: number
          last_active?: string
          created_at?: string
          updated_at?: string
        }
      }
      study_rooms: {
        Row: {
          id: string
          host_id: string
          title: string
          description: string | null
          subject: string
          scheduled_at: string
          duration_minutes: number
          max_participants: number
          is_public: boolean
          room_type: 'video' | 'audio' | 'chat'
          status: 'scheduled' | 'active' | 'completed' | 'cancelled'
          recording_enabled: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          host_id: string
          title: string
          description?: string | null
          subject: string
          scheduled_at: string
          duration_minutes: number
          max_participants?: number
          is_public?: boolean
          room_type?: 'video' | 'audio' | 'chat'
          status?: 'scheduled' | 'active' | 'completed' | 'cancelled'
          recording_enabled?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          host_id?: string
          title?: string
          description?: string | null
          subject?: string
          scheduled_at?: string
          duration_minutes?: number
          max_participants?: number
          is_public?: boolean
          room_type?: 'video' | 'audio' | 'chat'
          status?: 'scheduled' | 'active' | 'completed' | 'cancelled'
          recording_enabled?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      notes: {
        Row: {
          id: string
          user_id: string
          title: string
          content: string
          subject: string | null
          tags: string[] | null
          is_public: boolean
          is_paid: boolean
          price: number | null
          file_url: string | null
          file_type: string | null
          downloads: number
          rating: number
          total_reviews: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          title: string
          content: string
          subject?: string | null
          tags?: string[] | null
          is_public?: boolean
          is_paid?: boolean
          price?: number | null
          file_url?: string | null
          file_type?: string | null
          downloads?: number
          rating?: number
          total_reviews?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          title?: string
          content?: string
          subject?: string | null
          tags?: string[] | null
          is_public?: boolean
          is_paid?: boolean
          price?: number | null
          file_url?: string | null
          file_type?: string | null
          downloads?: number
          rating?: number
          total_reviews?: number
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
}