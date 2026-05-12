import React from "react";

const ComplianceGauge = ({ percent }) => {
  const r = 36;
  const cx = 50;
  const cy = 44;
  const circumference = Math.PI * r;
  const filled = (percent / 100) * circumference;

  return (
    <svg
      width="100"
      height="52"
      viewBox="0 0 100 52"
      style={{ overflow: "visible" }}
    >
      <path
        d={`M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`}
        fill="none"
        stroke="#e5e7eb"
        strokeWidth="7"
        strokeLinecap="round"
      />
      <path
        d={`M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`}
        fill="none"
        stroke="#16a34a"
        strokeWidth="7"
        strokeLinecap="round"
        strokeDasharray={`${filled} ${circumference}`}
        strokeDashoffset="0"
      />
      <text
        x={cx}
        y={cy - 6}
        textAnchor="middle"
        fontSize="13"
        fontWeight="700"
        fill="#111"
      >
        {percent}%
      </text>
    </svg>
  );
};

export default ComplianceGauge;