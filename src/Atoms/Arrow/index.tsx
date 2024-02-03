interface ArrowProps {
  color?: string;
}

const Arrow: React.FC<ArrowProps> = ({ color = "white" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <g clip-path="url(#clip0_170_38)">
        <path
          d="M5 12H19"
          stroke={color}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M13 18L19 12"
          stroke={color}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M13 6L19 12"
          stroke={color}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_170_38">
          <rect width="24" height="24" fill={color} />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Arrow;
