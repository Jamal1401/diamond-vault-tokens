import { cn } from "@/lib/utils";

interface BillitonLogoProps {
  className?: string;
  size?: number;
}

export const BillitonLogo = ({ className, size = 32 }: BillitonLogoProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("transition-transform", className)}
    >
      {/* Outer diamond shape - pentagon with angled top edges */}
      <path
        d="M50 6
           L78 18
           L88 50
           L50 94
           L12 50
           L22 18
           Z"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
        strokeLinejoin="round"
      />
      
      {/* Second layer - middle diamond */}
      <path
        d="M50 22
           L70 44
           L50 78
           L30 44
           Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinejoin="round"
      />
      
      {/* Third layer - inner smallest diamond */}
      <path
        d="M50 36
           L58 46
           L50 62
           L42 46
           Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinejoin="round"
      />
      
      {/* Left circuit path - vertical then diagonal into center */}
      <path
        d="M30 20
           L30 34
           L42 46"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="30"
        cy="20"
        r="4"
        fill="currentColor"
      />
      
      {/* Right circuit path - vertical then horizontal extension */}
      <path
        d="M70 20
           L70 30
           L78 30"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="70"
        cy="20"
        r="4"
        fill="currentColor"
      />
      
      {/* Center bottom circuit - line down with node */}
      <path
        d="M50 46
           L50 56"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle
        cx="50"
        cy="56"
        r="4"
        fill="currentColor"
      />
    </svg>
  );
};
