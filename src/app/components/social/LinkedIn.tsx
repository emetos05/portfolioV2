import React from 'react';

interface LinkedInProps {
  // Define props here if any
}

const LinkedIn: React.FC<LinkedInProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="w-6 h-6"
    {...props}
  >
    <title>{"LinkedIn"}</title>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x={2} y={9} width={4} height={12} />
    <circle cx={4} cy={4} r={2} />
  </svg>
);

export default LinkedIn;
