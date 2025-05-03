// Rename this file to Instagram.tsx and update the component to TypeScript
import React from 'react';

interface InstagramProps {
  // Define props here if any
}

const Instagram: React.FC<InstagramProps> = (props) => (
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
    <title>{"Instagram"}</title>
    <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1={17.5} y1={6.5} x2={17.5} y2={6.5} />
  </svg>
);

export default Instagram;
