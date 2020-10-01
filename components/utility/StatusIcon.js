import React from "react";

const StatusIcon = ({ status }) => {
  if (status === "tick") {
    return (
      <svg
        width="2.2rem"
        height="2.2rem"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 21C7.029 21 3 16.971 3 12C3 7.029 7.029 3 12 3C16.971 3 21 7.029 21 12C21 16.971 16.971 21 12 21Z"
          stroke="#0BCE91"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 10L11 15L8 12"
          stroke="#0BCE91"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  } else if (status === "circle") {
    return (
      <svg
        width="2.2rem"
        height="2.2rem"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 21C7.029 21 3 16.971 3 12C3 7.029 7.029 3 12 3C16.971 3 21 7.029 21 12C21 16.971 16.971 21 12 21Z"
          stroke="#FF6600"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  } else if (status === "times") {
    return (
      <svg
        width="2.2rem"
        height="2.2rem"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.8299 9.16998L9.16992 14.83"
          stroke="#DF585A"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.8299 14.83L9.16992 9.16998"
          stroke="#DF585A"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 21C7.029 21 3 16.971 3 12C3 7.029 7.029 3 12 3C16.971 3 21 7.029 21 12C21 16.971 16.971 21 12 21Z"
          stroke="#DF585A"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
};

export default StatusIcon;
