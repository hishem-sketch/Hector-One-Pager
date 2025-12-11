import { Clock, TrendingDown, Target, Clapperboard, BarChart2, BookOpen, Layers } from 'lucide-react';
import { Problem, Solution, Stat, Testimonial, ResultMetric } from './types';

export const PROBLEMS: Problem[] = [
  {
    id: 1,
    icon: Clock,
    title: "New Starters Taking Months to Bill",
    text: "Slow ramp-up times are draining momentum and slowing your growth. Every month without revenue is money left on the table."
  },
  {
    id: 2,
    icon: TrendingDown,
    title: "BD is Your Team's Biggest Weakness",
    text: "Business development skills are holding your team back. They know how to recruit, but struggle to build pipeline."
  },
  {
    id: 3,
    icon: Target,
    title: "Relying on a Few Top Billers",
    text: "You know your team could do more, but the rest are coasting while your top performers carry the load."
  }
];

export const SOLUTIONS: Solution[] = [
  {
    id: 1,
    icon: Clapperboard,
    title: "Real-World Training",
    text: "Learn from today's top billers who are actively working desks, not outdated theory from 10 years ago."
  },
  {
    id: 2,
    icon: Layers,
    title: "Skills Assessment",
    text: "Identify exactly where each team member needs to develop with our comprehensive skills framework."
  },
  {
    id: 3,
    icon: BookOpen,
    title: "Bite-Size Courses",
    text: "150+ practical courses your team can complete in under 30 minutes and apply immediately."
  },
  {
    id: 4,
    icon: BarChart2,
    title: "Progress Tracking",
    text: "See exactly how your team is engaging and measure the impact on your key performance metrics."
  }
];

export const STATS: Stat[] = [
  { id: 1, value: "200+", label: "Hours of Training Content" },
  { id: 2, value: "3,000+", label: "Training Hours Completed" },
  { id: 3, value: "150+", label: "Practical Courses" },
  { id: 4, value: "1:1", label: "Implementation Support" },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    stars: 5,
    headline: "Two years in recruitment — this was the best training I've ever had.",
    text: "I walked away with clear, practical actions I could apply straight away. No fluff — just real strategies that work.",
    author: "Stephanie Kennewell",
    role: "Associate Consultant",
    initials: "SK"
  },
  {
    id: 2,
    stars: 5,
    headline: "The wake-up call I needed — and my best billing months ever.",
    text: "I didn't need new theory — I needed to refocus. Hector helped me get back to basics, rebuild my consistency, and reignite my motivation.",
    author: "Melica Moshiri",
    role: "Founder",
    initials: "MM"
  },
  {
    id: 3,
    stars: 5,
    headline: "One simple tip from Hector — and my reply rate skyrocketed.",
    text: "I had no idea you could use LinkedIn voice notes until I took the outreach course. Since trying them, I've had way more positive responses.",
    author: "Rebecca Perumal",
    role: "Senior Recruiter",
    initials: "RP"
  },
  {
    id: 4,
    stars: 5,
    headline: "I stopped doing the same old thing — and started smashing my goals.",
    text: "The videos gave me fresh approaches I'd never tried before. I was stuck in a loop, doing the same things every day. Now I'm testing new tactics.",
    author: "Ellie Buxton",
    role: "Senior Recruitment Consultant",
    initials: "EB"
  },
  {
    id: 5,
    stars: 5,
    headline: "More confidence. Better conversations. Real career growth.",
    text: "Hector's training has sharpened the way I ask questions and handle calls — with both candidates and clients. Every course delivers something useful.",
    author: "Rory Douglas",
    role: "Contract Recruitment Consultant",
    initials: "RD"
  },
  {
    id: 6,
    stars: 5,
    headline: "New BD strategy. Fresh ideas. Stronger team results.",
    text: "We've built a new BD attack plan based on several Hector courses — and we're already seeing better responses. It's been a real mindset shift.",
    author: "Ammaar Wahab",
    role: "Senior Recruitment Consultant",
    initials: "AW"
  }
];

export const METRICS: ResultMetric[] = [
  { id: 1, company: "CORECOM CONSULTING", value: "+80%", metric: "Increase in Client Meetings" },
  { id: 2, company: "CORECOM CONSULTING", value: "+106%", metric: "Increase in Jobs Added" },
  { id: 3, company: "CORECOM CONSULTING", value: "2x", metric: "BD Confidence Score" },
];