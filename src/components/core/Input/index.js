import React from 'react';
import Icon from '../Icon/index';

import COLORS from '../../../constants/colors';
import './index.css';

function Input({
  name = 'generic_input',
  onChange = () => {},
  onFocus = () => {},
  onBlur = () => {},
  label = '',
  type = 'text',
  hideError,
  errorText = '',
  placeholder = '',
  maxLength,
  value,
  autoComplete,
  autoFocus,
  disabled
}) {
  return (
    <div style={styles.wrapper} className="Input__component">
      {label && <label style={styles.label}>{label}</label>}

      <div className="input__wrapper" style={styles.inputWrapper}>
        <input
          style={{
            ...styles.input,
            ...(type === 'search' ? styles.searchInput : {})
          }}
          type={type}
          name={name}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          autoFocus={autoFocus}
          disabled={disabled}
          maxLength={maxLength}
          autoComplete={autoComplete}
          placeholder={placeholder}
          value={value}
        />
        {type === 'search' && <SearchIcon />}
      </div>
      {!hideError &&
        errorText && <span style={styles.errorText}>{errorText}</span>}
    </div>
  );
}

const SearchIcon = () => (
  <div style={styles.searchIcon}>
    <Icon name="search" size={32} />
  </div>
);

const styles = {
  wrapper: {
    position: 'relative'
  },
  inputWrapper: {
    position: 'relative'
  },
  searchIcon: {
    position: 'absolute',
    top: 4,
    left: 4
  },
  label: {
    display: 'block',
    fontWeight: 600,
    marginBottom: '0.5rem'
  },
  input: {
    boxSizing: 'border-box',
    borderRadius: 3,
    fontSize: '1rem',
    lineHeight: '2.625rem',
    padding: '0 1rem',
    transition: 'all 0.2s ease-out',
    width: '100%'
  },
  searchInput: {
    padding: '0 1rem 0 36px'
  },
  errorText: {
    color: COLORS.CHERRY
  }
};

export default Input;
