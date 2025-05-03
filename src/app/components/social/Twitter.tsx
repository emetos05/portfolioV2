import React from 'react';

interface TwitterProps {
  // Define props here if any
}

const Twitter: React.FC<TwitterProps> = (props) => (
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
    <title>{"Twitter"}</title>
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.43.36a9 9 0 0 1-2.83 1.08A4.48 4.48 0 0 0 16.11 0a4.48 4.48 0 0 0-4.39 5.5A12.94 12.94 0 0 1 1.64.88 4.48 4.48 0 0 0 2.88 6.13a4.48 4.48 0 0 1-2-.55v.06a4.48 4.48 0 0 0 3.6 4.4 4.48 4.48 0 0 1-2 .08 4.48 4.48 0 0 0 4.18 3.11A9 9 0 0 1 0 19.54a12.94 12.94 0 0 0 7 2.05c8.4 0 13-7 13-13v-.59A9.2 9.2 0 0 0 23 3z" />
  </svg>
);

export default Twitter;
