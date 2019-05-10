import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

export const Button = ({ buttonValue, backgroundColor, backgroundColorLightness }) => {
  return (
    <div>
      <ABOSSButton
        backgroundColor={backgroundColor}
        backgroundColorLightness={backgroundColorLightness}
      >
        {buttonValue}
      </ABOSSButton>
    </div>
  );
};

Button.propTypes = {
  buttonValue: propTypes.string
};

Button.defaultProps = {
  buttonValue: 'Default Prop Text'
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
    case 'warning':
      return '#FF0236';
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
  background: ${props =>
    returnBackgroundColor(props.backgroundColor, props.backgroundColorLightness)};
  border: 0;
  font-family: 'SF UI Display';
  font-size: 15px;
  font-weight: 600;
  color: ${props =>
    props.backgroundColorLightness && props.backgroundColorLightness < 400 ? '#000719' : '#fff'};
  -webkit-font-smoothing: antialiased;
`;
