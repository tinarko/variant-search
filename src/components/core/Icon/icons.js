import React from 'react';

export default [
  {
    name: 'search',
    svg: props => (
      <svg
        viewBox="0 0 48 48"
        width={props.size}
        height={props.size}
        fill={props.color}
      >
        <path d="M38.71,37.29l-9.55-9.55a11.9,11.9,0,0,1-1.42,1.42l9.55,9.55a1,1,0,0,0,1.42,0A1,1,0,0,0,38.71,37.29Z" />
        <path
          className="icon-background"
          d="M20,10A10,10,0,1,1,10,20,10,10,0,0,1,20,10m0-2A12,12,0,1,0,32,20,12,12,0,0,0,20,8Z"
        />
      </svg>
    )
  },
  {
    name: 'arrow',
    svg: props => (
      <svg
        viewBox="0 0 48 48"
        width={props.size}
        height={props.size}
        fill={props.color}
      >
        <path
          className="icon-background"
          d="M32,29a1,1,0,0,1-.71-.29L24,21.41l-7.29,7.3a1,1,0,0,1-1.42-1.42L24,18.59l8.71,8.7a1,1,0,0,1,0,1.42A1,1,0,0,1,32,29Z"
        />
      </svg>
    )
  }
];
