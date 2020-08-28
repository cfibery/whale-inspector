import React from 'react';

export default function LoadingSvg() {
  return (
    <svg
      width="200px"
      height="100px"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <g transform="rotate(180 50 50)">
        <rect x="15" y="15" width="10" height="40" fill="#abbd81">
          <animate
            attributeName="height"
            values="50;70;30;50"
            keyTimes="0;0.33;0.66;1"
            dur="1s"
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1"
            begin="-0.4s"
          ></animate>
        </rect>
        <rect x="35" y="15" width="10" height="40" fill="#f8b26a">
          <animate
            attributeName="height"
            values="50;70;30;50"
            keyTimes="0;0.33;0.66;1"
            dur="1s"
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1"
            begin="-0.2s"
          ></animate>
        </rect>
        <rect x="55" y="15" width="10" height="40" fill="#f47e60">
          <animate
            attributeName="height"
            values="50;70;30;50"
            keyTimes="0;0.33;0.66;1"
            dur="1s"
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1"
            begin="-0.6s"
          ></animate>
        </rect>
        <rect x="75" y="15" width="10" height="40" fill="#e15b64">
          <animate
            attributeName="height"
            values="50;70;30;50"
            keyTimes="0;0.33;0.66;1"
            dur="1s"
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1"
            begin="-1s"
          ></animate>
        </rect>
      </g>
    </svg>
  );
}
