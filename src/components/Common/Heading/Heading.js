import React from 'react';
import PropTypes from 'prop-types';

export default function Heading({ value }) {
  if (!value) return null;

  return <h2>{value}</h2>;
}

Heading.propTypes = {
  value: PropTypes.string.isRequired,
};
