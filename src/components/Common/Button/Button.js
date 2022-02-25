import React from 'react';
import PropTypes from 'prop-types';
import { ButtonStyles } from './button.styles';

export default function Button({ onClick, value, disabled }) {
  return (
    <ButtonStyles
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`button-${disabled && 'disabled'}`}
    >
      {value}
    </ButtonStyles>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  value: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};
