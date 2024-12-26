import React from 'react';

const AwardIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      className="text-current"
    >
      <path
        className="fill-current"
        d="M12 15a7 7 0 1 0 0-14 7 7 0 0 0 0 14"
      ></path>
      <path
        className="stroke-current"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.21 13.89 7 23l5-3 5 3-1.21-9.12"
      ></path>
    </svg>
  );
};

export default React.memo(AwardIcon);
