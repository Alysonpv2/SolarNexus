// Shared configuration for SolarNexus

if (!process.env.JWT_SECRET && process.env.NODE_ENV === 'production') {
  throw new Error('JWT_SECRET environment variable must be set in production');
}

export const config = {
  api: {
    baseUrl: process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3001/api',
  },
  aiService: {
    baseUrl: process.env.AI_SERVICE_URL ?? 'http://localhost:8000',
  },
  auth: {
    jwtSecret: process.env.JWT_SECRET ?? 'change-me-in-production',
    tokenExpiry: '7d',
  },
} as const;

export type Config = typeof config;
