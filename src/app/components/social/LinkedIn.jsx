const LinkedInIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <title>{"Linkedin"}</title>
    <g
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <circle cx={4} cy={4} r={2} />
      <path d="M2 9h4v13H2zM10 22h4v-7a2 2 0 1 1 4 0v7h4v-7a6 6 0 0 0-12 0z" />
    </g>
  </svg>
);

export default LinkedInIcon;
