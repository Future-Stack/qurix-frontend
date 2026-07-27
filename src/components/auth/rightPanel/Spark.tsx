import React from 'react';

interface SparkProps {
  className?: string;
}

export default function Spark({ className }: SparkProps) {
  return (
    <svg
      viewBox="0 0 44 44"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main 4 points */}
      <path
        d="M22 0C22 12.15 12.15 22 0 22C12.15 22 22 31.85 22 44C22 31.85 31.85 22 44 22C31.85 22 22 12.15 22 0Z"
        fill="currentColor"
      />
      {/* 4 smaller diagonal points rotated 45 degrees */}
      <path
        d="M22 6C22 14.83 14.83 22 6 22C14.83 22 22 29.17 22 38C22 29.17 29.17 22 38 22C29.17 22 22 14.83 22 6Z"
        fill="currentColor"
        opacity="0.6"
        transform="rotate(45 22 22)"
      />
    </svg>
  );
}
