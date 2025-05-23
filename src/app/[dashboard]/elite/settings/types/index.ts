/* eslint-disable @typescript-eslint/no-explicit-any */
export type Currency = "GBP £" | "USD $" | "EUR €";
export type TimeUnit = "Monthly" | "Yearly" | "Weekly" | "Daily";

export interface BaseEditProps {
  isOpen: boolean;
  onClose: () => void;
  onUpdate: (data: any) => void;
  initialData?: any;
}

export interface RegionData {
  name: string;
  countries: string[];
}

export interface RoleData {
  name: string;
  tier: string;
  salaryRange: {
    currency: Currency;
    min: number;
    max: number;
    period: TimeUnit;
  };
  region: string;
  countries: string[];
}

export interface PlatformFeeData {
  name: string;
  benefits: string[];
  shortlistLimit: number;
  price: {
    currency: Currency;
    amount: number;
    period: TimeUnit;
  };
  region: string;
  countries: string[];
}

export interface PerkBenefitData {
  name: string;
  perks: string[];
  regions: string[];
  price: {
    currency: Currency;
    amount: number;
    period: TimeUnit;
  };
  salesPrice?: {
    currency: Currency;
    amount: number;
    period: TimeUnit;
  };
  validityPeriod?: string;
}

export interface VerificationPlanData {
  name: string;
  createdFor: string;
  checks: string[];
  price: {
    currency: Currency;
    amount: number;
    period: TimeUnit;
  };
  salesPrice?: {
    currency: Currency;
    amount: number;
    period: TimeUnit;
  };
  validityPeriod: string;
} 