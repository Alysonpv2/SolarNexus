// Shared TypeScript types for SolarNexus

export interface Plant {
  id: string;
  name: string;
  location: string;
  capacity: number; // kWp
  installedAt: Date;
  ownerId: string;
}

export interface EnergyReading {
  id: string;
  plantId: string;
  timestamp: Date;
  powerKw: number;
  energyKwh: number;
  temperature?: number;
  irradiance?: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  tenantId: string;
}

export type UserRole = 'admin' | 'manager' | 'operator' | 'viewer';

export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
}
