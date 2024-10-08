import { Request } from 'express';
export type RoleName = 'ADMIN' | 'USER';

export interface User {
  id: number;
  email: string;
  password: string;
  role: RoleName;
}

export interface CustomRequest extends Request {
  user?: User;
}

export interface TourCustomResponse {
  title: string;
  description: string;
  agentId: number;
  priceAdult: number;
  priceChild: number;
  contactNo: string;
  from: string;
  to: string;
  nights: number;
  Inclusion: string[];
  paymentPolicy: string[];
  meals: boolean;
  accommodation: boolean;
  transnfer: boolean;
  admin: {
    id: number;
    email: string;
  };
}
