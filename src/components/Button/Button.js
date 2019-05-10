import React from 'react';
import propTypes from 'prop-types';

export const Button = ({ text }) => {
  return <button>{text}</button>;
};

Button.propTypes = {
  text: propTypes.string
};

Button.defaultProps = {
  text: 'Default Prop Text'
};
