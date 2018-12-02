import React from 'react';
import COLORS from '../../../constants/colors';
import './index.css';

export const BUTTON_TYPES = {
  STANDARD: '',
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  DANGER: 'danger',
  OUTLINE: 'outline'
};

function Button({
  className = '',
  type = BUTTON_TYPES.STANDARD,
  onClick = () => {},
  label = '',
  disabled = false,
  fullWidth = false,
  small = false,
  icon = ''
}) {
  return (
    <div
      className={`Button__component ${className} ${disabled ? 'disabled' : ''}`}
      style={{
        ...styles.wrapper,
        ...styles[type],
        ...(small ? styles.small : {}),
        ...(fullWidth ? styles.fullWidth : {}),
        ...(icon ? styles.icon : {}),
        ...(disabled ? styles.disabled : {})
      }}
      onClick={!disabled ? onClick : undefined}
    >
      {label}
    </div>
  );
}

const styles = {
  wrapper: {
    background: COLORS.GREY_LIGHT,
    border: '2px solid transparent',
    borderRadius: '4px',
    color: 'white',
    cursor: 'pointer',
    display: 'inline-block',
    fontSize: '1rem',
    fontWeight: '400',
    outline: 'none',
    padding: '0.5rem 1rem',
    position: 'relative',
    textTransform: 'uppercase',
    textAlign: 'center',
    transition: 'all 0.2s ease-out'
  },
  [BUTTON_TYPES.OUTLINE]: {
    border: `1px solid ${COLORS.GREY_LIGHT}`,
    background: 'white',
    color: COLORS.GREY,
    fill: COLORS.GREY
  },
  [BUTTON_TYPES.PRIMARY]: {
    background: COLORS.SEAFOAM
  },
  [BUTTON_TYPES.SECONDARY]: {
    background: COLORS.AQUAMARINE
  },
  [BUTTON_TYPES.DANGER]: {
    background: COLORS.CHERRY
  },
  disabled: {
    cursor: 'no-drop',
    filter: 'grayscale(80%)'
  },
  icon: {
    display: 'flex',
    alignItems: 'center'
  },
  fullWidth: {
    width: '100%'
  },
  small: {
    fontSize: '0.75rem',
    fontWeight: 400,
    padding: '0.5rem 0.5rem'
  }
};

export default Button;
