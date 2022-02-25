import React from 'react';
import PropTypes from 'prop-types';
import { MessageStyles } from './message.styles';

export default function Message({ value }) {
  return <MessageStyles type={value}>{value}</MessageStyles>;
}

Message.propTypes = {
  value: PropTypes.string.isRequired,
};
