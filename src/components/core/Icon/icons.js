import React from 'react';

export default [
  {
    name: 'members',
    svg: props => (
      <svg
        viewBox="0 0 48 48"
        width={props.size}
        height={props.size}
        fill={props.color}
      >
        <path
          className="icon-background"
          d="M32,42a1,1,0,0,1-1-1V32a3,3,0,0,0-2.68-3,1,1,0,0,1-.63-1.67,5,5,0,1,0-7.38,0A1,1,0,0,1,19.68,29,3,3,0,0,0,17,32v9a1,1,0,0,1-2,0V32a5,5,0,0,1,2.92-4.53,7,7,0,1,1,12.16,0A5,5,0,0,1,33,32v9A1,1,0,0,1,32,42Z"
        />
        <path d="M10,16a5,5,0,0,1,10,0c0,1.25-1.46,3.57-1.5,3.68a7,7,0,0,1,3.36-2.34A7.52,7.52,0,0,0,22,16,7,7,0,1,0,8.92,19.47,5,5,0,0,0,6,24v9a1,1,0,0,0,2,0V24a3,3,0,0,1,2.68-3,1,1,0,0,0,.63-1.67A5,5,0,0,1,10,16Z" />
        <path d="M39.08,19.47A7,7,0,1,0,26,16a7.52,7.52,0,0,0,.14,1.34,7,7,0,0,1,3.36,2.34c0-.11-1.5-2.43-1.5-3.68a5,5,0,1,1,8.69,3.37A1,1,0,0,0,37.32,21,3,3,0,0,1,40,24v9a1,1,0,0,0,2,0V24A5,5,0,0,0,39.08,19.47Z" />
      </svg>
    )
  },
  {
    name: 'report',
    svg: props => (
      <svg
        viewBox="0 0 48 48"
        width={props.size}
        height={props.size}
        fill={props.color}
      >
        <path d="M36,7H12a3,3,0,0,0-3,3V38a3,3,0,0,0,3,3H36a3,3,0,0,0,3-3V10A3,3,0,0,0,36,7ZM29,9v2H19V9Zm8,29a1,1,0,0,1-1,1H12a1,1,0,0,1-1-1V10a1,1,0,0,1,1-1h5v3a1,1,0,0,0,1,1H30a1,1,0,0,0,1-1V9h5a1,1,0,0,1,1,1Z" />
        <g className="icon-background">
          <path d="M15,18h6a1,1,0,0,0,0-2H15a1,1,0,0,0,0,2Z" />
          <path d="M15,24h6a1,1,0,0,0,0-2H15a1,1,0,0,0,0,2Z" />
          <path d="M33,28H15a1,1,0,0,0,0,2H33a1,1,0,0,0,0-2Z" />
          <path d="M33,34H15a1,1,0,0,0,0,2H33a1,1,0,0,0,0-2Z" />
        </g>
      </svg>
    )
  },
  {
    name: 'checkmark',
    svg: props => (
      <svg
        viewBox="0 0 48 48"
        width={props.size}
        height={props.size}
        fill={props.color}
      >
        <polygon points="20.01 38 5 24.59 10.47 18.77 19.77 27.07 37.27 10 43 15.58 20.01 38" />
      </svg>
    )
  },
  {
    name: 'download',
    svg: props => (
      <svg
        viewBox="0 0 48 48"
        width={props.size}
        height={props.size}
        fill={props.color}
      >
        <path
          className="icon-background"
          d="M28.8,33.15a1,1,0,0,0-1.4-.2L25,34.75V25a1,1,0,0,0-2,0v9.75L20.6,33a1,1,0,1,0-1.2,1.6L24,38l4.6-3.45A1,1,0,0,0,28.8,33.15Z"
        />
        <path d="M30,30a1,1,0,0,1,0-2,5,5,0,0,0,0-10H29V17a5,5,0,0,0-10,0v1H18a5,5,0,0,0,0,10,1,1,0,0,1,0,2,7,7,0,0,1-.94-13.94,7,7,0,0,1,13.88,0A7,7,0,0,1,30,30Z" />
      </svg>
    )
  },
  {
    name: 'dashboard',
    svg: props => (
      <svg
        viewBox="0 0 48 48"
        width={props.size}
        height={props.size}
        fill={props.color}
      >
        <path d="M20,22H10a2,2,0,0,1-2-2V10a2,2,0,0,1,2-2H20a2,2,0,0,1,2,2V20A2,2,0,0,1,20,22ZM10,10V20H20V10Z" />
        <path
          className="icon-background"
          d="M38,40H28a2,2,0,0,1-2-2V10a2,2,0,0,1,2-2H38a2,2,0,0,1,2,2V38A2,2,0,0,1,38,40ZM28,10V38H38V10Z"
        />
      </svg>
    )
  },
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
    name: 'help',
    svg: props => (
      <svg
        viewBox="0 0 48 48"
        width={props.size}
        height={props.size}
        fill={props.color}
      >
        <path d="M24,41A17,17,0,1,1,41,24,17,17,0,0,1,24,41ZM24,9A15,15,0,1,0,39,24,15,15,0,0,0,24,9Zm0,24a9,9,0,1,1,9-9A9,9,0,0,1,24,33Zm0-16a7,7,0,1,0,7,7A7,7,0,0,0,24,17Z" />
        <g className="icon-background">
          <path d="M18.81,29H7.75l-.19-.75a16.41,16.41,0,0,1,0-8.5L7.75,19H18.81l-.87,1.5a7,7,0,0,0,0,7ZM9.32,27h6.2a8.91,8.91,0,0,1,0-6H9.32a14.22,14.22,0,0,0,0,6Z" />
          <path d="M40.25,29H29.19l.87-1.5a7,7,0,0,0,0-7L29.19,19H40.25l.19.75a16.41,16.41,0,0,1,0,8.5Zm-7.77-2h6.2a14.22,14.22,0,0,0,0-6h-6.2a8.91,8.91,0,0,1,0,6Z" />
          <path d="M24,41a17,17,0,0,1-4.25-.56L19,40.25V29.19l1.5.87a7.1,7.1,0,0,0,7,0l1.5-.87V40.25l-.75.19A17,17,0,0,1,24,41Zm-3-2.32a14.44,14.44,0,0,0,6,0v-6.2a9.08,9.08,0,0,1-6,0Z" />
          <path d="M29,18.81l-1.5-.87a7.1,7.1,0,0,0-7,0l-1.5.87V7.75l.75-.19a16.55,16.55,0,0,1,8.5,0l.75.19ZM24,15a9,9,0,0,1,3,.52V9.32a14.44,14.44,0,0,0-6,0v6.2A9,9,0,0,1,24,15Z" />
        </g>
      </svg>
    )
  },
  {
    name: 'logout',
    svg: props => (
      <svg
        viewBox="0 0 48 48"
        width={props.size}
        height={props.size}
        fill={props.color}
      >
        <path
          className="icon-background"
          d="M12.85,28.8a1,1,0,0,0,.2-1.4L11.25,25H23a1,1,0,0,0,0-2H11.25l1.8-2.4a1,1,0,0,0-1.6-1.2L8,24l3.45,4.6A1,1,0,0,0,12.85,28.8Z"
        />
        <path d="M26.58,35.73a12,12,0,0,1-11.1-3.28A1,1,0,0,1,15.55,31h0a1,1,0,0,1,1.32,0A10,10,0,1,0,24,14a9.94,9.94,0,0,0-7.12,3,1,1,0,0,1-1.33.05h0a1,1,0,0,1-.06-1.49A12,12,0,1,1,26.58,35.73Z" />
      </svg>
    )
  },
  {
    name: 'prescription',
    svg: props => (
      <svg
        viewBox="0 0 48 48"
        width={props.size}
        height={props.size}
        fill={props.color}
      >
        <path d="M18.2,39a9.2,9.2,0,0,1-6.5-15.71l6.5-6.5,13,13-6.5,6.51A9.18,9.18,0,0,1,18.2,39Zm0-19.38-5.09,5.09A7.2,7.2,0,1,0,23.29,34.89l5.09-5.09Z" />
        <path
          className="icon-background"
          d="M29.8,31.21l-13-13,6.5-6.51a9.21,9.21,0,0,1,13,0h0a9.2,9.2,0,0,1,0,13Zm-10.18-13L29.8,28.38l5.09-5.09a7.19,7.19,0,0,0,0-10.18h0a7.19,7.19,0,0,0-10.18,0Z"
        />
      </svg>
    )
  },
  {
    name: 'history',
    svg: props => (
      <svg
        viewBox="0 0 48 48"
        width={props.size}
        height={props.size}
        fill={props.color}
      >
        <path d="M38,39H35.85l-1.53-9.16a5,5,0,0,0-2.7-3.65l-3.94-2a.25.25,0,0,1,0-.45l3.95-2a5,5,0,0,0,2.69-3.65L35.85,9H38a1,1,0,0,0,0-2H10a1,1,0,0,0,0,2h2.15l1.53,9.16a5,5,0,0,0,2.69,3.65l3.95,2a.25.25,0,0,1,0,.44l-3.95,2a5,5,0,0,0-2.69,3.65L12.15,39H10a1,1,0,0,0,0,2H38a1,1,0,0,0,0-2ZM14.18,39l1.47-8.83A3,3,0,0,1,17.27,28l4.39-2.19a2,2,0,0,0,0-3.58L17.27,20a3,3,0,0,1-1.62-2.19L14.18,9H33.82l-1.47,8.83A3,3,0,0,1,30.73,20l-4.39,2.19a2,2,0,0,0,0,3.58L30.73,28a3,3,0,0,1,1.62,2.19L33.82,39Z" />
        <path
          className="icon-background"
          d="M16.55,39l6.7-7.66a1,1,0,0,1,1.5,0L31.45,39H28.8l-4.61-5.27a.26.26,0,0,0-.38,0L19.2,39Z"
        />
      </svg>
    )
  },
  {
    name: 'bottle',
    svg: props => (
      <svg
        viewBox="0 0 48 48"
        width={props.size}
        height={props.size}
        fill={props.color}
      >
        <path
          className="icon-background"
          d="M36,11H35V8a1,1,0,0,0-1-1H14a1,1,0,0,0-1,1v3H12a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1H36a1,1,0,0,0,1-1V12A1,1,0,0,0,36,11ZM15,9H33v2H15Zm20,8H13V13H35Z"
        />
        <path d="M13,19V40a1,1,0,0,0,1,1H34a1,1,0,0,0,1-1V19H33v3H18a1,1,0,0,0-1,1V33a1,1,0,0,0,1,1H33v5H15V19M33,32H19V24H33Z" />
      </svg>
    )
  },
  {
    name: 'book',
    svg: props => (
      <svg
        viewBox="0 0 48 48"
        width={props.size}
        height={props.size}
        fill={props.color}
      >
        <path d="M35,15.18V9h1a1,1,0,0,0,0-2H16a5,5,0,0,0-5,5V38a3,3,0,0,0,3,3H34a3,3,0,0,0,3-3V18A3,3,0,0,0,35,15.18ZM16,9H33v6H16a3,3,0,0,1,0-6ZM35,38a1,1,0,0,1-1,1H14a1,1,0,0,1-1-1V16a5,5,0,0,0,3,1H34a1,1,0,0,1,1,1Z" />
        <g className="icon-background">
          <path d="M30,23H18a1,1,0,0,1,0-2H30a1,1,0,0,1,0,2Z" />
          <path d="M30,29H18a1,1,0,0,1,0-2H30a1,1,0,0,1,0,2Z" />
        </g>
      </svg>
    )
  },
  {
    name: 'list',
    svg: props => (
      <svg
        viewBox="0 0 48 48"
        width={props.size}
        height={props.size}
        fill={props.color}
      >
        <path d="M15,32h6a1,1,0,0,1,0,2H15a1,1,0,0,1,0-2Z" />
        <path d="M15,26H25a1,1,0,0,1,0,2H15a1,1,0,0,1,0-2Z" />
        <g className="icon-background">
          <path d="M33,22H15a1,1,0,0,1,0-2H33a1,1,0,0,1,0,2Z" />
          <path d="M33,16H15a1,1,0,0,1,0-2H33a1,1,0,0,1,0,2Z" />
        </g>
      </svg>
    )
  },
  {
    name: 'form',
    svg: props => (
      <svg
        viewBox="0 0 48 48"
        width={props.size}
        height={props.size}
        fill={props.color}
      >
        <g className="icon-background">
          <path d="M34,22H14a1,1,0,0,1-1-1V17a1,1,0,0,1,1-1H34a1,1,0,0,1,1,1v4A1,1,0,0,1,34,22ZM15,20H33V18H15Z" />
          <path d="M26,14H14a1,1,0,0,1,0-2H26a1,1,0,0,1,0,2Z" />
        </g>
        <path d="M34,36H14a1,1,0,0,1-1-1V31a1,1,0,0,1,1-1H34a1,1,0,0,1,1,1v4A1,1,0,0,1,34,36ZM15,34H33V32H15Z" />
        <path d="M26,28H14a1,1,0,0,1,0-2H26a1,1,0,0,1,0,2Z" />
      </svg>
    )
  },
  {
    name: 'member',
    svg: props => (
      <svg
        viewBox="0 0 48 48"
        width={props.size}
        height={props.size}
        fill={props.color}
      >
        <path
          className="icon-background"
          d="M35,41a1,1,0,0,1-1-1V27.25a4.48,4.48,0,0,0-4-4.45,1,1,0,0,1-.63-1.67,7.25,7.25,0,1,0-10.7,0A1,1,0,0,1,18,22.8a4.48,4.48,0,0,0-4,4.45V40a1,1,0,0,1-2,0V27.25a6.46,6.46,0,0,1,4.19-6.05A9.25,9.25,0,0,1,25.07,7.06,9.25,9.25,0,0,1,31.81,21.2,6.46,6.46,0,0,1,36,27.25V40A1,1,0,0,1,35,41Z"
        />
      </svg>
    )
  },
  {
    name: 'view',
    svg: props => (
      <svg
        viewBox="0 0 48 48"
        width={props.size}
        height={props.size}
        fill={props.color}
      >
        <path d="M39,25a1,1,0,0,1-.77-.36C38.17,24.57,31.71,17,24,17S9.83,24.57,9.77,24.64a1,1,0,1,1-1.54-1.28C8.52,23,15.35,15,24,15s15.48,8,15.77,8.36A1,1,0,0,1,39,25Z" />
        <path
          className="icon-background"
          d="M24,29a5,5,0,1,1,5-5A5,5,0,0,1,24,29Zm0-8a3,3,0,1,0,3,3A3,3,0,0,0,24,21Z"
        />
      </svg>
    )
  },
  {
    name: 'bulb',
    svg: props => (
      <svg
        viewBox="0 0 48 48"
        width={props.size}
        height={props.size}
        fill={props.color}
      >
        <path d="M33,9.62A12.92,12.92,0,0,0,23.46,6,13.16,13.16,0,0,0,11,18.76a12.9,12.9,0,0,0,5.11,10.56,5.09,5.09,0,0,1,1.89,4V39a3,3,0,0,0,3,3h6a3,3,0,0,0,3-3V33.23a4.86,4.86,0,0,1,1.85-3.88A13,13,0,0,0,33,9.62ZM28,39a1,1,0,0,1-1,1H21a1,1,0,0,1-1-1V38h8Zm-8-5h8v2H20Zm10.64-6.24A6.7,6.7,0,0,0,28.12,32H19.86a6.87,6.87,0,0,0-2.54-4.27A10.9,10.9,0,0,1,13,18.8,11.13,11.13,0,0,1,23.54,8a11,11,0,0,1,7.1,19.75Z" />
        <path
          className="icon-background"
          d="M31,20a4,4,0,0,0-8,0v2H21a2,2,0,0,1,0-4,1,1,0,0,0,0-2,4,4,0,0,0,0,8h2v8h2V24h2A4,4,0,0,0,31,20Zm-4,2H25V20a2,2,0,1,1,2,2Z"
        />
      </svg>
    )
  },
  {
    name: 'back',
    svg: props => (
      <svg
        viewBox="0 0 48 48"
        width={props.size}
        height={props.size}
        fill={props.color}
      >
        <path
          className="icon-background"
          d="M20.85,28.8a1,1,0,0,0,.2-1.4L19.25,25H31a1,1,0,0,0,0-2H19.25l1.8-2.4a1,1,0,0,0-1.6-1.2L16,24l3.45,4.6A1,1,0,0,0,20.85,28.8Z"
        />
      </svg>
    )
  },
  {
    name: 'edit',
    svg: props => (
      <svg
        viewBox="0 0 48 48"
        width={props.size}
        height={props.size}
        fill={props.color}
      >
        <path d="M29.73,34H18.27A4.28,4.28,0,0,1,14,29.73V18.27A4.28,4.28,0,0,1,18.27,14H27a1,1,0,0,1,0,2H18.27A2.27,2.27,0,0,0,16,18.27V29.73A2.27,2.27,0,0,0,18.27,32H29.73A2.27,2.27,0,0,0,32,29.73V21a1,1,0,0,1,2,0v8.73A4.28,4.28,0,0,1,29.73,34Z" />
        <path
          className="icon-background"
          d="M19.29,28.71V27.29l13-13a1,1,0,0,1,1.42,1.42l-13,13Z"
        />
      </svg>
    )
  },
  {
    name: 'cancel',
    svg: props => (
      <svg
        viewBox="0 0 48 48"
        width={props.size}
        height={props.size}
        fill={props.color}
      >
        <path
          className="icon-background"
          d="M24,12A12,12,0,1,0,36,24,12,12,0,0,0,24,12Zm0,2a9.94,9.94,0,0,1,6.32,2.26L16.26,30.32A10,10,0,0,1,24,14Zm0,20a9.94,9.94,0,0,1-6.32-2.26L31.74,17.68A10,10,0,0,1,24,34Z"
        />
      </svg>
    )
  },
  {
    name: 'confirm',
    svg: props => (
      <svg
        viewBox="0 0 48 48"
        width={props.size}
        height={props.size}
        fill={props.color}
      >
        <path d="M24,14A10,10,0,1,1,14,24,10,10,0,0,1,24,14m0-2A12,12,0,1,0,36,24,12,12,0,0,0,24,12Z" />
        <path
          className="icon-background"
          d="M22,29a1,1,0,0,1-.71-.29l-4-4a1,1,0,0,1,1.42-1.42L22,26.59l7.29-7.3a1,1,0,0,1,1.42,1.42l-8,8A1,1,0,0,1,22,29Z"
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
  },
  {
    name: 'gear',
    svg: props => (
      <svg
        viewBox="0 0 48 48"
        width={props.size}
        height={props.size}
        fill={props.color}
      >
        <path d="M26,40H22a3,3,0,0,1-3-3V35.52a1,1,0,0,0-.53-.88,10.45,10.45,0,0,1-.92-.53,1,1,0,0,0-1,0l-1.29.74a3,3,0,0,1-4.1-1.1l-2-3.46a3,3,0,0,1,1.1-4.1l1.28-.74a1,1,0,0,0,.5-.87c0-.18,0-.37,0-.56s0-.38,0-.56a1,1,0,0,0-.5-.87l-1.28-.74a3,3,0,0,1-1.1-4.1l2-3.46a3,3,0,0,1,4.1-1.1l1.29.74a1,1,0,0,0,1,0,10.45,10.45,0,0,1,.92-.53,1,1,0,0,0,.53-.88V11a3,3,0,0,1,3-3h4a3,3,0,0,1,3,3v1.48a1,1,0,0,0,.53.88,10.45,10.45,0,0,1,.92.53,1,1,0,0,0,1,0l1.29-.74a3,3,0,0,1,4.1,1.1l2,3.46a3,3,0,0,1-1.1,4.1l-1.28.74a1,1,0,0,0-.5.87c0,.18,0,.37,0,.56s0,.38,0,.56a1,1,0,0,0,.5.87l1.28.74a3,3,0,0,1,1.1,4.1l-2,3.46a3,3,0,0,1-4.1,1.1l-1.29-.74a1,1,0,0,0-1,0,10.45,10.45,0,0,1-.92.53,1,1,0,0,0-.53.88V37A3,3,0,0,1,26,40Zm-9-8a3,3,0,0,1,1.6.47c.25.16.51.31.77.45A3,3,0,0,1,21,35.52V37a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1V35.52a3,3,0,0,1,1.61-2.65c.26-.14.52-.29.77-.45a3,3,0,0,1,3.09-.06l1.29.74a1,1,0,0,0,1.36-.37l2-3.46a1,1,0,0,0-.36-1.37l-1.28-.73A3,3,0,0,1,34,24.45c0-.15,0-.3,0-.45s0-.3,0-.45a3,3,0,0,1,1.49-2.72l1.28-.73a1,1,0,0,0,.36-1.37l-2-3.46a1,1,0,0,0-1.36-.37l-1.29.74a3,3,0,0,1-3.09-.06c-.25-.16-.51-.31-.77-.45A3,3,0,0,1,27,12.48V11a1,1,0,0,0-1-1H22a1,1,0,0,0-1,1v1.48a3,3,0,0,1-1.61,2.65c-.26.14-.52.29-.77.45a3,3,0,0,1-3.09.06l-1.29-.74a1,1,0,0,0-1.36.37l-2,3.46a1,1,0,0,0,.36,1.37l1.28.73A3,3,0,0,1,14,23.55c0,.15,0,.3,0,.45s0,.3,0,.45a3,3,0,0,1-1.49,2.72l-1.28.73a1,1,0,0,0-.36,1.37l2,3.46a1,1,0,0,0,1.36.37l1.29-.74A3,3,0,0,1,17,32Z" />
        <path
          className="icon-background"
          d="M24,31a7,7,0,1,1,7-7A7,7,0,0,1,24,31Zm0-12a5,5,0,1,0,5,5A5,5,0,0,0,24,19Z"
        />
      </svg>
    )
  },
  {
    name: 'calendar',
    svg: props => (
      <svg
        viewBox="0 0 48 48"
        width={props.size}
        height={props.size}
        fill={props.color}
      >
        <path d="M34,40H14a3,3,0,0,1-3-3V17a3,3,0,0,1,3-3H34a3,3,0,0,1,3,3V37A3,3,0,0,1,34,40ZM14,16a1,1,0,0,0-1,1V37a1,1,0,0,0,1,1H34a1,1,0,0,0,1-1V17a1,1,0,0,0-1-1Z" />
        <g className="icon-background">
          <path d="M18,18a1,1,0,0,1-1-1V13a1,1,0,0,1,2,0v4A1,1,0,0,1,18,18Z" />
          <path d="M30,18a1,1,0,0,1-1-1V13a1,1,0,0,1,2,0v4A1,1,0,0,1,30,18Z" />
        </g>
      </svg>
    )
  },
  {
    name: 'close',
    svg: props => (
      <svg
        viewBox="0 0 48 48"
        width={props.size}
        height={props.size}
        stroke={props.color}
        fill={props.color}
      >
        <path
          className="icon-background"
          d="M25.41,24l7.3-7.29a1,1,0,0,0-1.42-1.42L24,22.59l-7.29-7.3a1,1,0,0,0-1.42,1.42L22.59,24l-7.3,7.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L24,25.41l7.29,7.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"
        />
      </svg>
    )
  },
  {
    name: 'app',
    svg: props => (
      <svg
        viewBox="0 0 48 48"
        width={props.size}
        height={props.size}
        fill={props.color}
      >
        <path
          className="icon-background"
          d="M37,8H11a3,3,0,0,0-3,3V37a3,3,0,0,0,3,3H37a3,3,0,0,0,3-3V11A3,3,0,0,0,37,8ZM11,10H37a1,1,0,0,1,1,1v5H10V11A1,1,0,0,1,11,10ZM37,38H11a1,1,0,0,1-1-1V18H38V37A1,1,0,0,1,37,38Z"
        />
        <circle cx="13" cy="13" r="1" />
        <circle cx="17" cy="13" r="1" />
      </svg>
    )
  },
  {
    name: 'umbrella',
    svg: props => (
      <svg
        viewBox="0 0 48 48"
        width={props.size}
        height={props.size}
        fill={props.color}
      >
        <path
          className="icon-background"
          d="M38.49,30.83a1,1,0,0,1-.9-.56,4,4,0,0,0-7.14-.07,1,1,0,0,1-.93.55,1,1,0,0,1-.89-.63,5,5,0,0,0-9.26,0,1,1,0,0,1-1.82.08,4,4,0,0,0-7.14.07,1,1,0,0,1-1.86-.18A15.77,15.77,0,0,1,8,26a16,16,0,0,1,32,0,15.77,15.77,0,0,1-.55,4.09,1,1,0,0,1-.87.74ZM24,25a7,7,0,0,1,5.66,2.88,6,6,0,0,1,8.26-.42A14.44,14.44,0,0,0,38,26a14,14,0,0,0-28,0,14.44,14.44,0,0,0,.08,1.46,6,6,0,0,1,8.26.42A7,7,0,0,1,24,25Z"
        />
        <path d="M27,41a4,4,0,0,1-4-4V27a1,1,0,0,1,2,0V37a2,2,0,0,0,4,0V36a1,1,0,0,1,2,0v1A4,4,0,0,1,27,41Z" />
        <path d="M24,11a1,1,0,0,1-1-1V8a1,1,0,0,1,2,0v2A1,1,0,0,1,24,11Z" />
      </svg>
    )
  },
  {
    name: 'filter',
    svg: props => (
      <svg
        viewBox="0 0 48 48"
        width={props.size}
        height={props.size}
        fill={props.color}
      >
        <g className="icon-background">
          <path d="M33,16H15a1,1,0,0,1,0-2H33a1,1,0,0,1,0,2Z" />
          <path d="M23,32h2a1,1,0,0,1,0,2H23a1,1,0,0,1,0-2Z" />
        </g>
        <path d="M19,20H29a1,1,0,0,1,0,2H19a1,1,0,0,1,0-2Z" />
        <path d="M21,26h6a1,1,0,0,1,0,2H21a1,1,0,0,1,0-2Z" />
      </svg>
    )
  },
  {
    name: 'checklist',
    svg: props => (
      <svg
        viewBox="0 0 48 48"
        width={props.size}
        height={props.size}
        fill={props.color}
      >
        <g className="icon-background">
          <path d="M33,16H25a1,1,0,0,1,0-2h8a1,1,0,0,1,0,2Z" />
          <path d="M17,18a1,1,0,0,1-.71-.29l-2-2a1,1,0,0,1,1.42-1.42L17,15.59l3.29-3.3a1,1,0,0,1,1.42,1.42l-4,4A1,1,0,0,1,17,18Z" />
        </g>
        <path d="M33,22H15a1,1,0,0,1,0-2H33a1,1,0,0,1,0,2Z" />
        <path d="M15,32h6a1,1,0,0,1,0,2H15a1,1,0,0,1,0-2Z" />
        <path d="M15,26H25a1,1,0,0,1,0,2H15a1,1,0,0,1,0-2Z" />
      </svg>
    )
  },
  {
    name: 'retry',
    svg: props => (
      <svg
        viewBox="0 0 48 48"
        width={props.size}
        height={props.size}
        fill={props.color}
      >
        <g className="icon-background">
          <path d="M27,36a1,1,0,0,1,0-2A10,10,0,1,0,17,24a1,1,0,0,1-2,0A12,12,0,1,1,27,36Z" />
          <path d="M11.94,20a1,1,0,0,1,1.4.17l1.86,2.36,1.93.52,2.78-1.12a1,1,0,0,1,.75,1.86l-5.34,2.14-3.55-4.52A1,1,0,0,1,11.94,20Z" />
        </g>
      </svg>
    )
  },
  {
    name: 'circle-arrow-right',
    svg: props => (
      <svg
        viewBox="0 0 48 48"
        width={props.size}
        height={props.size}
        fill={props.color}
      >
        <path
          className="icon-background"
          d="M33.15,19.2a1,1,0,0,0-.2,1.4l1.8,2.4H23a1,1,0,0,0,0,2H34.75L33,27.4a1,1,0,1,0,1.6,1.2L38,24l-3.45-4.6A1,1,0,0,0,33.15,19.2Z"
        />
        <path d="M19.42,12.27a12,12,0,0,1,11.1,3.28A1,1,0,0,1,30.45,17h0a1,1,0,0,1-1.32,0A10,10,0,1,0,22,34a9.94,9.94,0,0,0,7.12-3A1,1,0,0,1,30.45,31h0a1,1,0,0,1,.06,1.49A12,12,0,1,1,19.42,12.27Z" />
      </svg>
    )
  },
  {
    name: 'fail',
    svg: props => (
      <svg
        viewBox="0 0 48 48"
        width={props.size}
        height={props.size}
        fill={props.color}
      >
        <path
          className="icon-background"
          d="M25.41,24l3.3-3.29a1,1,0,0,0-1.42-1.42L24,22.59l-3.29-3.3a1,1,0,0,0-1.42,1.42L22.59,24l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L24,25.41l3.29,3.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"
        />
        <path d="M24,14A10,10,0,1,1,14,24,10,10,0,0,1,24,14m0-2A12,12,0,1,0,36,24,12,12,0,0,0,24,12Z" />
      </svg>
    )
  },
  {
    name: 'add',
    svg: props => (
      <svg
        viewBox="0 0 48 48"
        width={props.size}
        height={props.size}
        fill={props.color}
      >
        <path
          className="icon-background"
          d="M25,23V18.34a1,1,0,0,0-2,0V23H18.34a1,1,0,0,0,0,2H23v4.66a1,1,0,0,0,1.71.7,1,1,0,0,0,.29-.7V25h4.66a1,1,0,0,0,.7-.29,1,1,0,0,0-.7-1.71Z"
        />
        <path d="M24,14A10,10,0,1,1,14,24,10,10,0,0,1,24,14m0-2A12,12,0,1,0,36,24,12,12,0,0,0,24,12Z" />
      </svg>
    )
  },
  {
    name: 'copy',
    svg: props => (
      <svg
        viewBox="0 0 48 48"
        width={props.size}
        height={props.size}
        fill={props.color}
      >
        <path
          className="icon-background"
          d="M27,38H13a3,3,0,0,1-3-3V21a3,3,0,0,1,3-3H27a3,3,0,0,1,3,3V35A3,3,0,0,1,27,38ZM13,20a1,1,0,0,0-1,1V35a1,1,0,0,0,1,1H27a1,1,0,0,0,1-1V21a1,1,0,0,0-1-1Z"
        />
        <path d="M35,30H30V28h5a1,1,0,0,0,1-1V13a1,1,0,0,0-1-1H21a1,1,0,0,0-1,1v5H18V13a3,3,0,0,1,3-3H35a3,3,0,0,1,3,3V27A3,3,0,0,1,35,30Z" />
      </svg>
    )
  },
  {
    name: 'file',
    svg: props => (
      <svg
        viewBox="0 0 48 48"
        width={props.size}
        height={props.size}
        fill={props.color}
      >
        <path d="M37,8H11a3,3,0,0,0-3,3V37a3,3,0,0,0,3,3H37a3,3,0,0,0,3-3V11A3,3,0,0,0,37,8ZM10,11a1,1,0,0,1,1-1H37a1,1,0,0,1,1,1V37a1,1,0,0,1-1,1H11a1,1,0,0,1-1-1Z" />
        <g className="icon-background">
          <rect x="10" y="23" width="1" height="2" />
          <path d="M35,25H33V23h2Zm-4,0H29V23h2Zm-4,0H25V23h2Zm-4,0H21V23h2Zm-4,0H17V23h2Zm-4,0H13V23h2Z" />
          <rect x="37" y="23" width="1" height="2" />
        </g>
      </svg>
    )
  },
  {
    name: 'job',
    svg: props => (
      <svg
        viewBox="0 0 48 48"
        width={props.size}
        height={props.size}
        fill={props.color}
      >
        <path
          className="icon-background"
          d="M37,8H11a3,3,0,0,0-3,3v2a3,3,0,0,0,3,3H37a3,3,0,0,0,3-3V11A3,3,0,0,0,37,8ZM10,11a1,1,0,0,1,1-1H37a1,1,0,0,1,1,1v2a1,1,0,0,1-1,1H11a1,1,0,0,1-1-1Z"
        />
        <path d="M37,20H11a3,3,0,0,0-3,3v2a3,3,0,0,0,3,3H37a3,3,0,0,0,3-3V23A3,3,0,0,0,37,20ZM10,23a1,1,0,0,1,1-1H37a1,1,0,0,1,1,1v2a1,1,0,0,1-1,1H11a1,1,0,0,1-1-1Z" />
        <path d="M37,32H11a3,3,0,0,0-3,3v2a3,3,0,0,0,3,3H37a3,3,0,0,0,3-3V35A3,3,0,0,0,37,32ZM10,35a1,1,0,0,1,1-1H37a1,1,0,0,1,1,1v2a1,1,0,0,1-1,1H11a1,1,0,0,1-1-1Z" />
      </svg>
    )
  },
  {
    name: 'grid',
    svg: props => (
      <svg
        viewBox="0 0 48 48"
        width={props.size}
        height={props.size}
        fill={props.color}
      >
        <path
          className="icon-background"
          d="M20,22H10a2,2,0,0,1-2-2V10a2,2,0,0,1,2-2H20a2,2,0,0,1,2,2V20A2,2,0,0,1,20,22ZM10,10V20H20V10Z"
        />
        <path d="M20,40H10a2,2,0,0,1-2-2V28a2,2,0,0,1,2-2H20a2,2,0,0,1,2,2V38A2,2,0,0,1,20,40ZM10,28V38H20V28Z" />
        <path d="M38,22H28a2,2,0,0,1-2-2V10a2,2,0,0,1,2-2H38a2,2,0,0,1,2,2V20A2,2,0,0,1,38,22ZM28,10V20H38V10Z" />
        <path d="M38,40H28a2,2,0,0,1-2-2V28a2,2,0,0,1,2-2H38a2,2,0,0,1,2,2V38A2,2,0,0,1,38,40ZM28,28V38H38V28Z" />
      </svg>
    )
  },
  {
    name: 'exclamation',
    svg: props => (
      <svg
        viewBox="0 0 48 48"
        width={props.size}
        height={props.size}
        fill={props.color}
      >
        <path d="M24,40A16,16,0,1,1,40,24,16,16,0,0,1,24,40Zm0-30A14,14,0,1,0,38,24,14,14,0,0,0,24,10Z" />
        <g className="icon-background">
          <polygon points="25 27 23 27 22 15 26 15 25 27" />
          <rect x="22" y="29" width="4" height="4" rx="2" ry="2" />
        </g>
      </svg>
    )
  },
  {
    name: 'print',
    svg: props => (
      <svg
        viewBox="0 0 48 48"
        width={props.size}
        height={props.size}
        fill={props.color}
      >
        <g className="icon-background">
          <path d="M36,28H12V11a3,3,0,0,1,3-3H27.41L36,16.59ZM15,10a1,1,0,0,0-1,1V26H34V17.41L26.59,10Z" />
          <path d="M17,16h8a1,1,0,0,0,0-2H17a1,1,0,0,0,0,2Z" />
        </g>
        <path d="M17,22h8a1,1,0,0,0,0-2H17a1,1,0,0,0,0,2Z" />
        <path d="M37,26H11a3,3,0,0,0-3,3v8a3,3,0,0,0,3,3H37a3,3,0,0,0,3-3V29A3,3,0,0,0,37,26ZM10,29a1,1,0,0,1,1-1H37a1,1,0,0,1,1,1v8a1,1,0,0,1-1,1H11a1,1,0,0,1-1-1Z" />
        <path d="M13,36H35a1,1,0,0,0,0-2H13a1,1,0,0,0,0,2Z" />
        <rect x="34" y="30" width="2" height="2" rx="1" ry="1" />
        <rect x="30" y="30" width="2" height="2" rx="1" ry="1" />
      </svg>
    )
  },
  {
    name: 'empty-circle',
    svg: props => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        width={props.size}
        height={props.size}
        fill={props.color}
      >
        <title>icons-48</title>
        <path d="M24,4A20,20,0,1,1,4,24,20,20,0,0,1,24,4m0-4A24,24,0,1,0,48,24,24,24,0,0,0,24,0Z" />
      </svg>
    )
  },
  {
    name: 'dash-circle',
    svg: props => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        width={props.size}
        height={props.size}
        fill={props.color}
      >
        <title>icons-48</title>
        <path d="M24,0A24,24,0,1,0,48,24,24,24,0,0,0,24,0ZM36,28H12V20H36Z" />
      </svg>
    )
  },
  {
    name: 'checkmark-circle',
    svg: props => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        width={props.size}
        height={props.size}
        fill={props.color}
      >
        <title>icons-48</title>
        <path d="M24,0A24,24,0,1,0,48,24,24,24,0,0,0,24,0ZM20.85,35,9,24.46l4.32-4.57,7.34,6.52L34.48,13,39,17.38Z" />
      </svg>
    )
  }
];
