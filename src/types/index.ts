export type TaskStatus = 'pending' | 'in_progress' | 'completed';

export interface Material {
  name: string;
  url?: string;
  price?: number;
  quantity?: number;
  unit?: string;
  note?: string;
  supplier?: string;
}

export interface Task {
  id: string;
  title: string;
  description?: string;
  status: TaskStatus;
  materials?: Material[];
  estimatedCost?: number;
  actualCost?: number;
  estimatedMaterialCost?: number;
  actualMaterialCost?: number;
  estimatedLaborCost?: number;
  actualLaborCost?: number;
  startDate?: string;
  endDate?: string;
  images?: string[];
  videoUrl?: string;
  notes?: string[];
  subtasks?: string[];
}

export interface Project {
  id: string;
  name: string;
  address: string;
  roadAddress?: string;
  fullAddress?: string;
  size: string;
  totalBudget?: number;
  videoUrl?: string;
  tasks: Task[];
  buildingInfo?: {
    buildingType: string;
    totalUnits: number;
    buildYear: string;
    buildAge: number;
    parking: string;
    naverLink?: string;
  };
}
