export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      customer_profiles: {
        Row: {
          address: string | null
          id: string
          location_lat: number | null
          location_long: number | null
          postal_code: string | null
          user_profile_id: string
        }
        Insert: {
          address?: string | null
          id?: string
          location_lat?: number | null
          location_long?: number | null
          postal_code?: string | null
          user_profile_id: string
        }
        Update: {
          address?: string | null
          id?: string
          location_lat?: number | null
          location_long?: number | null
          postal_code?: string | null
          user_profile_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "customer_profiles_user_profile_id_fkey"
            columns: ["user_profile_id"]
            isOneToOne: true
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      delivery_routes: {
        Row: {
          active: boolean | null
          created_at: string | null
          date: string
          id: number
          notes: string | null
          staff_id: string | null
          status: string | null
        }
        Insert: {
          active?: boolean | null
          created_at?: string | null
          date: string
          id?: number
          notes?: string | null
          staff_id?: string | null
          status?: string | null
        }
        Update: {
          active?: boolean | null
          created_at?: string | null
          date?: string
          id?: number
          notes?: string | null
          staff_id?: string | null
          status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "delivery_routes_staff_id_fkey"
            columns: ["staff_id"]
            isOneToOne: false
            referencedRelation: "staff_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      order_items: {
        Row: {
          created_at: string | null
          id: number
          order_id: number | null
          product_variation_id: number | null
          quantity: number
          unit_price: number
        }
        Insert: {
          created_at?: string | null
          id?: number
          order_id?: number | null
          product_variation_id?: number | null
          quantity: number
          unit_price: number
        }
        Update: {
          created_at?: string | null
          id?: number
          order_id?: number | null
          product_variation_id?: number | null
          quantity?: number
          unit_price?: number
        }
        Relationships: [
          {
            foreignKeyName: "order_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "order_items_product_variation_id_fkey"
            columns: ["product_variation_id"]
            isOneToOne: false
            referencedRelation: "product_variations"
            referencedColumns: ["id"]
          },
        ]
      }
      orders: {
        Row: {
          active: boolean | null
          created_at: string | null
          customer_id: number | null
          id: number
          notes: string | null
          status: string | null
          total_amount: number | null
        }
        Insert: {
          active?: boolean | null
          created_at?: string | null
          customer_id?: number | null
          id?: number
          notes?: string | null
          status?: string | null
          total_amount?: number | null
        }
        Update: {
          active?: boolean | null
          created_at?: string | null
          customer_id?: number | null
          id?: number
          notes?: string | null
          status?: string | null
          total_amount?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "orders_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "usuarios"
            referencedColumns: ["id"]
          },
        ]
      }
      product_categories: {
        Row: {
          created_at: string | null
          description: string | null
          id: string
          name: string
          slug: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: string
          name: string
          slug: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: string
          name?: string
          slug?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      product_variations: {
        Row: {
          active: boolean | null
          created_at: string | null
          description: string | null
          id: number
          name: string
          price: number
          product_id: number | null
          stock: number | null
          stock_quantity: number
          updated_at: string | null
        }
        Insert: {
          active?: boolean | null
          created_at?: string | null
          description?: string | null
          id?: number
          name: string
          price?: number
          product_id?: number | null
          stock?: number | null
          stock_quantity?: number
          updated_at?: string | null
        }
        Update: {
          active?: boolean | null
          created_at?: string | null
          description?: string | null
          id?: number
          name?: string
          price?: number
          product_id?: number | null
          stock?: number | null
          stock_quantity?: number
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "product_variations_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      products: {
        Row: {
          active: boolean | null
          category: string | null
          category_id: string | null
          created_at: string | null
          description: string | null
          featured: boolean | null
          id: number
          image_url: string | null
          is_approved: boolean | null
          is_template: boolean | null
          name: string
          planting_date: string | null
          production_stage: string | null
          propagation_type: string | null
          subcategory: string | null
          sun_exposure: string | null
          supplier_id: string | null
          template_product_id: number | null
          updated_at: string | null
          vendor_id: string | null
        }
        Insert: {
          active?: boolean | null
          category?: string | null
          category_id?: string | null
          created_at?: string | null
          description?: string | null
          featured?: boolean | null
          id?: number
          image_url?: string | null
          is_approved?: boolean | null
          is_template?: boolean | null
          name: string
          planting_date?: string | null
          production_stage?: string | null
          propagation_type?: string | null
          subcategory?: string | null
          sun_exposure?: string | null
          supplier_id?: string | null
          template_product_id?: number | null
          updated_at?: string | null
          vendor_id?: string | null
        }
        Update: {
          active?: boolean | null
          category?: string | null
          category_id?: string | null
          created_at?: string | null
          description?: string | null
          featured?: boolean | null
          id?: number
          image_url?: string | null
          is_approved?: boolean | null
          is_template?: boolean | null
          name?: string
          planting_date?: string | null
          production_stage?: string | null
          propagation_type?: string | null
          subcategory?: string | null
          sun_exposure?: string | null
          supplier_id?: string | null
          template_product_id?: number | null
          updated_at?: string | null
          vendor_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "products_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "product_categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "products_supplier_id_fkey"
            columns: ["supplier_id"]
            isOneToOne: false
            referencedRelation: "staff_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "products_template_product_id_fkey"
            columns: ["template_product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "products_vendor_id_fkey"
            columns: ["vendor_id"]
            isOneToOne: false
            referencedRelation: "vendor_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      route_orders: {
        Row: {
          created_at: string | null
          id: number
          order_id: number | null
          route_id: number | null
          sequence_number: number | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          order_id?: number | null
          route_id?: number | null
          sequence_number?: number | null
        }
        Update: {
          created_at?: string | null
          id?: number
          order_id?: number | null
          route_id?: number | null
          sequence_number?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "route_orders_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "route_orders_route_id_fkey"
            columns: ["route_id"]
            isOneToOne: false
            referencedRelation: "delivery_routes"
            referencedColumns: ["id"]
          },
        ]
      }
      staff_profiles: {
        Row: {
          active: boolean | null
          created_at: string | null
          full_name: string | null
          id: string
          role: Database["public"]["Enums"]["staff_role"]
          user_id: string
        }
        Insert: {
          active?: boolean | null
          created_at?: string | null
          full_name?: string | null
          id?: string
          role?: Database["public"]["Enums"]["staff_role"]
          user_id: string
        }
        Update: {
          active?: boolean | null
          created_at?: string | null
          full_name?: string | null
          id?: string
          role?: Database["public"]["Enums"]["staff_role"]
          user_id?: string
        }
        Relationships: []
      }
      supplier_products: {
        Row: {
          active: boolean | null
          created_at: string | null
          id: number
          product_variation_id: number | null
          purchase_price: number
          supplier_id: number | null
        }
        Insert: {
          active?: boolean | null
          created_at?: string | null
          id?: number
          product_variation_id?: number | null
          purchase_price: number
          supplier_id?: number | null
        }
        Update: {
          active?: boolean | null
          created_at?: string | null
          id?: number
          product_variation_id?: number | null
          purchase_price?: number
          supplier_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "supplier_products_product_variation_id_fkey"
            columns: ["product_variation_id"]
            isOneToOne: false
            referencedRelation: "product_variations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "supplier_products_supplier_id_fkey"
            columns: ["supplier_id"]
            isOneToOne: false
            referencedRelation: "suppliers"
            referencedColumns: ["id"]
          },
        ]
      }
      suppliers: {
        Row: {
          active: boolean | null
          address: string | null
          contact: string | null
          created_at: string | null
          email: string | null
          id: number
          name: string
          phone: string | null
        }
        Insert: {
          active?: boolean | null
          address?: string | null
          contact?: string | null
          created_at?: string | null
          email?: string | null
          id?: number
          name: string
          phone?: string | null
        }
        Update: {
          active?: boolean | null
          address?: string | null
          contact?: string | null
          created_at?: string | null
          email?: string | null
          id?: number
          name?: string
          phone?: string | null
        }
        Relationships: []
      }
      "TABELA-OFICIAL-EDITAVEL": {
        Row: {
          created_at: string
          id: number
        }
        Insert: {
          created_at?: string
          id?: number
        }
        Update: {
          created_at?: string
          id?: number
        }
        Relationships: []
      }
      user_profiles: {
        Row: {
          created_at: string | null
          email: string | null
          full_name: string | null
          id: string
          phone: string | null
          photo_url: string | null
          updated_at: string | null
          user_id: string
          user_type: Database["public"]["Enums"]["user_type"]
        }
        Insert: {
          created_at?: string | null
          email?: string | null
          full_name?: string | null
          id?: string
          phone?: string | null
          photo_url?: string | null
          updated_at?: string | null
          user_id: string
          user_type: Database["public"]["Enums"]["user_type"]
        }
        Update: {
          created_at?: string | null
          email?: string | null
          full_name?: string | null
          id?: string
          phone?: string | null
          photo_url?: string | null
          updated_at?: string | null
          user_id?: string
          user_type?: Database["public"]["Enums"]["user_type"]
        }
        Relationships: []
      }
      usuarios: {
        Row: {
          cpf: string | null
          created_at: string
          id: number
          nome: string | null
          thread_id: string | null
          whatsapp: string | null
        }
        Insert: {
          cpf?: string | null
          created_at?: string
          id?: number
          nome?: string | null
          thread_id?: string | null
          whatsapp?: string | null
        }
        Update: {
          cpf?: string | null
          created_at?: string
          id?: number
          nome?: string | null
          thread_id?: string | null
          whatsapp?: string | null
        }
        Relationships: []
      }
      vendor_inventory: {
        Row: {
          cost_price: number | null
          created_at: string | null
          id: string
          online_stock: number | null
          physical_stock: number | null
          product_id: number
          sale_price: number | null
          updated_at: string | null
          vendor_id: string
        }
        Insert: {
          cost_price?: number | null
          created_at?: string | null
          id?: string
          online_stock?: number | null
          physical_stock?: number | null
          product_id: number
          sale_price?: number | null
          updated_at?: string | null
          vendor_id: string
        }
        Update: {
          cost_price?: number | null
          created_at?: string | null
          id?: string
          online_stock?: number | null
          physical_stock?: number | null
          product_id?: number
          sale_price?: number | null
          updated_at?: string | null
          vendor_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "vendor_inventory_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "vendor_inventory_vendor_id_fkey"
            columns: ["vendor_id"]
            isOneToOne: false
            referencedRelation: "vendor_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      vendor_profiles: {
        Row: {
          business_document: string | null
          id: string
          is_approved: boolean | null
          nursery_address: string | null
          nursery_location_lat: number | null
          nursery_location_long: number | null
          nursery_name: string | null
          user_profile_id: string
        }
        Insert: {
          business_document?: string | null
          id?: string
          is_approved?: boolean | null
          nursery_address?: string | null
          nursery_location_lat?: number | null
          nursery_location_long?: number | null
          nursery_name?: string | null
          user_profile_id: string
        }
        Update: {
          business_document?: string | null
          id?: string
          is_approved?: boolean | null
          nursery_address?: string | null
          nursery_location_lat?: number | null
          nursery_location_long?: number | null
          nursery_name?: string | null
          user_profile_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "vendor_profiles_user_profile_id_fkey"
            columns: ["user_profile_id"]
            isOneToOne: true
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_staff_role: {
        Args: {
          user_id: string
        }
        Returns: Database["public"]["Enums"]["staff_role"]
      }
    }
    Enums: {
      staff_role: "admin" | "manager" | "delivery" | "support" | "supplier"
      user_type: "customer" | "vendor"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
