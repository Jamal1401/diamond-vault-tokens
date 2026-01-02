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
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("transition-transform", className)}
    >
      {/* Outer diamond shape */}
      <path
        d="M32 4L58 28L32 60L6 28L32 4Z"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
        strokeLinejoin="round"
      />
      
      {/* Inner diamond shape */}
      <path
        d="M32 14L48 28L32 50L16 28L32 14Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinejoin="round"
      />
      
      {/* Circuit line left - vertical with node */}
      <path
        d="M22 20L22 36"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle
        cx="22"
        cy="20"
        r="2.5"
        fill="currentColor"
      />
      
      {/* Circuit line right - vertical with node */}
      <path
        d="M42 20L42 36"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle
        cx="42"
        cy="20"
        r="2.5"
        fill="currentColor"
      />
      
      {/* Center horizontal circuit line */}
      <path
        d="M22 28L42 28"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      
      {/* Center node */}
      <circle
        cx="32"
        cy="28"
        r="3"
        fill="currentColor"
      />
      
      {/* Lower V circuit elements */}
      <path
        d="M26 38L32 44L38 38"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
};
