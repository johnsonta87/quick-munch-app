import React from 'react';
import PropTypes from 'prop-types';
import { MessageStyles } from './MessageStyles';

export default function Message({ value }) {
  return <MessageStyles type={value}>{value}</MessageStyles>;
}

Message.propTypes = {
  value: PropTypes.string.isRequired,
};
