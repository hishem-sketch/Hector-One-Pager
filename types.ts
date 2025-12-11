import { LucideIcon } from 'lucide-react';

export interface Testimonial {
  id: number;
  text: string;
  author: string;
  role: string;
  initials: string;
  headline: string;
  stars: number;
}

export interface Problem {
  id: number;
  icon: LucideIcon;
  title: string;
  text: string;
}

export interface Solution {
  id: number;
  icon: LucideIcon;
  title: string;
  text: string;
}

export interface Stat {
  id: number;
  value: string;
  label: string;
}

export interface ResultMetric {
  id: number;
  company: string;
  value: string;
  metric: string;
}