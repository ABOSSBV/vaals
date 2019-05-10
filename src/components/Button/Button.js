import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

export const Button = ({ buttonValue, color, lightness }) => {
  return (
    <div>
      <ABOSSButton color={color} lightness={lightness}>
        {buttonValue}
      </ABOSSButton>
    </div>
  );
};

Button.propTypes = {
  buttonValue: propTypes.string,
  color: propTypes.string,
  lightness: propTypes.string
};

Button.defaultProps = {
  buttonValue: 'Ok',
  color: 'primary',
  lightness: '500'
};

const returnBackgroundColor = (color, lightness = 500) => {
  switch (color) {
    case 'primary':
      switch (lightness) {
        case '300':
          return '#E5EDFF';
        default:
          return '#004CFF';
      }
    case 'secondary':
      return '#FFF704';
    case 'warning':
      return '#FF0236';
    case 'positive':
      return '#00CC4B';
    case 'alert':
      return '#FF9900';
    case 'primary-gray':
      return '#5571AA';
    case 'gray':
      return '#808080';
    default:
      return '#000000';
  }
};

const ABOSSButton = styled.button`
  border-radius: 5px;
  padding: 15px 25px;
  background: ${props => returnBackgroundColor(props.color, props.lightness)};
  border: 0;
  font-family: 'SF UI Display';
  font-size: 15px;
  font-weight: 600;
  color: ${props =>
    (props.lightness && props.lightness < 400) || props.color === 'secondary' ? '#000719' : '#fff'};
  -webkit-font-smoothing: antialiased;
  transition: transform 150ms ease-in-out;

  &:active {
    transform: scale(0.95);
  }
`;
