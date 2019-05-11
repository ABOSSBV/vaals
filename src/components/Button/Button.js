import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import FeatherIcon from 'feather-icons-react';

export const Button = ({
  content,
  color,
  lightness,
  iconLeftVisible,
  iconLeftType,
  iconLeftContent,
  iconRightVisible,
  iconRightType,
  iconRightContent
}) => {
  return (
    <ABOSSButton color={color} lightness={lightness}>
      {iconLeftVisible && (
        <ABOSSButtonIconLeft color={color} lightness={lightness} iconLeftType={iconLeftType}>
          {iconLeftType === 'icon' && (
            <FeatherIcon
              icon={iconLeftContent}
              color={(lightness && lightness < 400) || color === 'secondary' ? '#000719' : '#fff'}
              size="18"
            />
          )}
          {iconLeftType === 'text' && <div>{iconLeftContent}</div>}
        </ABOSSButtonIconLeft>
      )}
      <ABOSSButtonContent iconLeftVisible={iconLeftVisible} iconRightVisible={iconRightVisible}>
        {content}
      </ABOSSButtonContent>
      {iconRightVisible && (
        <ABOSSButtonIconRight color={color} lightness={lightness} iconRightType={iconRightType}>
          {iconRightType === 'icon' && (
            <FeatherIcon
              icon={iconRightContent}
              color={(lightness && lightness < 400) || color === 'secondary' ? '#000719' : '#fff'}
              size="18"
            />
          )}
          {iconRightType === 'text' && <div>{iconRightContent}</div>}
        </ABOSSButtonIconRight>
      )}
    </ABOSSButton>
  );
};

Button.propTypes = {
  content: propTypes.string,
  color: propTypes.string,
  lightness: propTypes.string,
  iconLeftVisible: propTypes.bool,
  iconLeftType: propTypes.String,
  iconLeftContent: propTypes.String,
  iconRightVisible: propTypes.bool,
  iconRightType: propTypes.String,
  iconRightContent: propTypes.String
};

Button.defaultProps = {
  content: 'Ok',
  color: 'primary',
  lightness: '500',
  iconLeftVisible: false,
  iconLeftType: 'icon',
  iconLeftContent: 'chevron-left',
  iconRightVisible: false,
  iconRightType: 'icon',
  iconRightContent: 'chevron-right'
};

const returnBackgroundColor = (color, lightness = 500) => {
  switch (color) {
    case 'primary':
      switch (lightness) {
        case 100:
          return '#F5F8FF';
        case 200:
          return '#E5EDFF';
        case 300:
          return '#99B8FF';
        case 400:
          return '#4D82FF';
        case 500:
          return '#004CFF';
        case 600:
          return '#0136B3';
        case 700:
          return '#002066';
        case 800:
          return '#000719';
        case 900:
          return '#000719';
        case 1000:
          return '#000719';
        default:
          return '#004CFF';
      }
    case 'secondary':
      switch (lightness) {
        case 100:
          return '#FFFFF5';
        case 200:
          return '#FFFEE5';
        case 300:
          return '#FFFC99';
        case 400:
          return '#FFF94D';
        case 500:
          return '#FFF704';
        case 600:
          return '#B3AD00';
        case 700:
          return '#666300';
        case 800:
          return '#1A1900';
        case 900:
          return '#1A1900';
        case 1000:
          return '#1A1900';
        default:
          return '#FFF704';
      }
    case 'warning':
      switch (lightness) {
        case 100:
          return '#FFF5F7';
        case 200:
          return '#FFE5EB';
        case 300:
          return '#FF99AD';
        case 400:
          return '#FF4D70';
        case 500:
          return '#FF0236';
        case 600:
          return '#B30124';
        case 700:
          return '#660014';
        case 800:
          return '#1A0005';
        case 900:
          return '#1A0005';
        case 1000:
          return '#1A0005';
        default:
          return '#FF0236';
      }
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
  display: flex;
  flex-direction: row;
  align-items: stretch;
  margin: 0;
  padding: 0;
  background: ${props => returnBackgroundColor(props.color, props.lightness)};
  border: 0;
  border-radius: 5px;

  font-family: -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif;
  font-size: 15px;
  font-weight: 600;
  color: ${props =>
    (props.lightness && props.lightness < 400) || props.color === 'secondary' ? '#000719' : '#fff'};
  -webkit-font-smoothing: antialiased;
  transition: transform 150ms ease-in-out;

  &:active {
    transform: scale(0.9);
    opacity: 0.85;
  }
`;

const ABOSSButtonContent = styled.div`
  padding: 15px 25px;
  padding-top: 15px;
  padding-left: ${props => (props.iconLeftVisible ? '15px' : '25px')};
  padding-bottom: 15px;
  padding-right: ${props => (props.iconRightVisible ? '15px' : '25px')};
`;

const ABOSSButtonIconLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${props => (props.iconLeftType === 'icon' ? '0' : '0 15px')};
  min-width: 38px;
  background-color: ${props => returnBackgroundColor(props.color, props.lightness + 100)};
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  color: #fff;
`;

const ABOSSButtonIconRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${props => (props.iconRightType === 'icon' ? '0' : '0 15px')};
  min-width: 38px;
  background-color: ${props => returnBackgroundColor(props.color, props.lightness + 100)};
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`;
