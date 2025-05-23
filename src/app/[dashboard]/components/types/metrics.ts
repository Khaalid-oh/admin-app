export interface Metric {
  title: string;
  value: number;
  percentage?: number;
  trend?: "up" | "down" | "neutral";
  trendLabel?: string;
  icon?: React.ReactNode;
  featureIcon?: React.ReactNode;
}

export type JobStatus = "Live" | "Closed" | "Disabled";

export interface Job {
  id: string;
  title: string;
  code: string;
  company: string;
  datePosted: string; // ISO or dd/mm/yyyy
  postedBy: string;
  applicants: number;
  shortlists: number;
  jobExpiresIn: string; // e.g., "15 Days"
  status: JobStatus;
  type: "Permanent" | "Contract";
}


export type CompanyStatus = "Approved" | "Pending";

export interface Company {
  id: string;
  name: string;
  code: string;
  location: string;
  industry: string;
  industryColor: string; // for badge color
  jobsPosted: number;
  hiredTalents: number;
  status: CompanyStatus;
  avatarUrl?: string; // for company logo/avatar
  createdBy?: string; // for pending tab
  email?: string;     // for pending tab
}

export interface JobPreviewDetails {
  id: string;
  title: string;
  applicants: number;
  status: JobStatus;
  company_category: string;
  location: string;
  datePosted: string;
  startDate: string;
  expiryDate: string;
  workType: string;
  companyLogo: string;
  companyName: string;
  salary: string;
  employees: string;
  positions: number;
  projectOverview: string;
  responsibilities: string[];
  skills: string[];
  technologies: string[];
  languages: string[];
  experienceLevel: string;
  companyMission: string;
  companyBenefits: string[];
}

export interface Talent {
  id: string;
  name: string;
  code: string;
  avatarUrl: string;
  location: string;
  experienceLevel: string;
  status: string;
  jobsApplication: number;
}
