import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { ThemeWrapper } from 'vaals';

export const Button = ({ content, color, lightness, iconLeft, iconRight, theme }) => {
  return (
    <ThemeWrapper>
      <ABOSSButton color={color} lightness={lightness}>
        {iconLeft && <ABOSSButtonIconLeft color={color} lightness={lightness} />}
        <ABOSSButtonContent iconLeft={iconLeft} iconRight={iconRight}>
          {content}
        </ABOSSButtonContent>
        {iconRight && <ABOSSButtonIconRight color={color} lightness={lightness} />}
      </ABOSSButton>
    </ThemeWrapper>
  );
};

Button.propTypes = {
  content: propTypes.string,
  color: propTypes.string,
  lightness: propTypes.string,
  iconLeft: propTypes.boolean,
  iconRight: propTypes.boolean
};

Button.defaultProps = {
  content: 'Ok',
  color: 'primary',
  lightness: 'default',
  iconLeft: false,
  iconRight: false
};

const ABOSSButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  padding: 0;
  background: ${({ theme, color, lightness }) => theme[color][lightness]};
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
  padding-left: ${props => (props.iconLeft ? '15px' : '25px')};
  padding-bottom: 15px;
  padding-right: ${props => (props.iconRight ? '15px' : '25px')};
`;

const ABOSSButtonIconLeft = styled.div`
  min-width: 38px;
  background: ${({ theme, color, lightness }) => theme[color][lightness]};
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;

const ABOSSButtonIconRight = styled.div`
  min-width: 38px;
  background: ${({ theme, color, lightness }) => theme[color][lightness]};
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`;
