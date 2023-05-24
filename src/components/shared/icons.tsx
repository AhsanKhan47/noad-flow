import React from "react";

export function Search() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.5 11.5L15 15"
        stroke="#00878A"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1 7C1 10.3137 3.68629 13 7 13C8.6597 13 10.1621 12.3261 11.2483 11.237C12.3308 10.1517 13 8.654 13 7C13 3.68629 10.3137 1 7 1C3.68629 1 1 3.68629 1 7Z"
        stroke="#00878A"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Filter() {
  return (
    <svg
      width="23"
      height="17"
      viewBox="0 0 23 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 3.23828H22.0476" stroke="#004446" strokeLinecap="round" />
      <path
        d="M22.0476 13.7617L0.999988 13.7617"
        stroke="#004446"
        strokeLinecap="round"
      />
      <circle
        cx="15.5713"
        cy="3.2381"
        r="2.7381"
        fill="#E6F3F3"
        stroke="#004446"
      />
      <circle
        cx="7.47626"
        cy="13.7619"
        r="2.7381"
        transform="rotate(180 7.47626 13.7619)"
        fill="#E6F3F3"
        stroke="#004446"
      />
    </svg>
  );
}

export function Menu() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#fff"
      viewBox="0 0 24 24"
      width="28px"
      height="28px"
      color="#fff"
    >
      <path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z" />
    </svg>
  );
}

export function MenuClose() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      fill="#fff"
      width="28px"
      height="28px"
    >
      <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z" />
    </svg>
  );
}
