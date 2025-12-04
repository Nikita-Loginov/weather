import type { HTMLAttributes } from "react";

export const BloodIcon = (props: HTMLAttributes<SVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="#000000"
    width="800px"
    height="800px"
    viewBox="0 0 24 24"
    id="blood"
    {...props}
  >
    <path
      id="primary"
      d="M18,15A6,6,0,0,1,6,15c0-4,2-5,6-12C16,10,18,11,18,15Z"
      style={{
        fill: "none",
        stroke: "#ffffff",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
      }}
    />
  </svg>
);
