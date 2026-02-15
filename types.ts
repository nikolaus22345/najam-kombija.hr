
export interface VehicleInfo {
  brand: string;
  model: string;
  year: number;
  enginePower: string;
  estimatedPrice: string;
}

export enum InsuranceType {
  AO = 'Obvezno auto osiguranje',
  KASKO = 'Kasko osiguranje'
}

export interface LeadFormData {
  registration: string;
  email: string;
  phone: string;
  insuranceType: InsuranceType;
}

export interface FAQItem {
  question: string;
  answer: string;
}
