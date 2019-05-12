import React, { Fragment } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

import FeatherIcon from 'feather-icons-react';
import { ThemeWrapper } from 'vaals';
import { Loading } from '../Loading';

export const Button = ({
  content,
  color,
  lightness,
  containerLeftVisible,
  containerLeftType,
  containerLeftContent,
  containerRightVisible,
  containerRightType,
  containerRightContent,
  loading
}) => {
  return (
    <ThemeWrapper>
      <VaalsButton color={color} lightness={lightness}>
        {containerLeftVisible && (
          <VaalsButtonContainerLeft
            color={color}
            lightness={lightness}
            containerLeftType={containerLeftType}
          >
            {loading && containerLeftVisible && (
              <VaalsButtonLoading
                color={color}
                lightness={lightness}
                container={containerLeftVisible || containerRightVisible}
              >
                <VaalsLoading color={color} lightness={lightness}>
                  <Loading />
                </VaalsLoading>
              </VaalsButtonLoading>
            )}
            {containerLeftType === 'icon' && (
              <FeatherIcon
                icon={containerLeftContent}
                color={(lightness && lightness < 400) || color === 'secondary' ? '#000719' : '#fff'}
                size="18"
              />
            )}
            {containerLeftType === 'text' && <div>{containerLeftContent}</div>}
          </VaalsButtonContainerLeft>
        )}
        <VaalsButtonContent
          containerLeftVisible={containerLeftVisible}
          containerRightVisible={containerRightVisible}
        >
          {loading && (!containerRightVisible && !containerLeftVisible) && (
            <VaalsButtonLoading color={color} lightness={lightness}>
              <VaalsLoading color={color} lightness={lightness}>
                <Loading />
              </VaalsLoading>
            </VaalsButtonLoading>
          )}
          {content}
        </VaalsButtonContent>
        {containerRightVisible && (
          <VaalsButtonContainerRight
            color={color}
            lightness={lightness}
            containerRightType={containerRightType}
          >
            {loading && containerRightVisible && (
              <VaalsButtonLoading
                color={color}
                lightness={lightness}
                container={containerLeftVisible || containerRightVisible}
              >
                <VaalsLoading color={color} lightness={lightness}>
                  <Loading />
                </VaalsLoading>
              </VaalsButtonLoading>
            )}
            {containerRightType === 'icon' && (
              <FeatherIcon
                icon={containerRightContent}
                color={(lightness && lightness < 400) || color === 'secondary' ? '#000719' : '#fff'}
                size="18"
              />
            )}
            {containerRightType === 'text' && <div>{containerRightContent}</div>}
          </VaalsButtonContainerRight>
        )}
      </VaalsButton>
    </ThemeWrapper>
  );
};

Button.propTypes = {
  content: propTypes.string,
  color: propTypes.string,
  lightness: propTypes.string,
  containerLeftVisible: propTypes.bool,
  containerLeftType: propTypes.string,
  containerLeftContent: propTypes.string,
  containerRightVisible: propTypes.bool,
  containerRightType: propTypes.string,
  containerRightContent: propTypes.string,
  loading: propTypes.bool
};

Button.defaultProps = {
  content: 'Ok',
  color: 'primary',
  lightness: 'default',
  containerLeftVisible: false,
  containerLeftType: 'icon',
  containerRightVisible: false,
  containerRightType: 'icon',
  loading: false
};

const VaalsButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  margin: 0;
  padding: 0;
  background: ${({ theme, color, lightness }) => theme[color][lightness]};
  border: 0;
  border-radius: ${({ theme }) => theme.borderRadius};

  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSizeMd};
  font-weight: ${({ theme }) => theme.fontWeightSemiBold};
  color: ${props =>
    (props.lightness && props.lightness < 400) || props.color === 'secondary' ? '#000719' : '#fff'};
  -webkit-font-smoothing: antialiased;
  transition: transform ${({ theme }) => theme.durationFast}
    ${({ theme }) => theme.transitionDefault};

  &:active {
    transform: scale(0.9);
    opacity: ${({ theme }) => theme.opacityLarge};
  }

  &:focus {
    border: 2px solid ${({ theme }) => theme['primary']['500']};
    outline: none;
  }
`;

const VaalsButtonContent = styled.div`
  position: relative;
  padding: 15px 25px;
  padding-top: 15px;
  padding-left: ${props => (props.containerLeftVisible ? '15px' : '25px')};
  padding-bottom: 15px;
  padding-right: ${props => (props.containerRightVisible ? '15px' : '25px')};
`;

const VaalsButtonLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: ${({ theme }) => theme.borderRadius};
  right: ${({ theme }) => theme.borderRadius};
  bottom: 0;
  opacity: 0.85;
  background: ${({ theme, color, container, lightness }) =>
    container && lightness != 'default'
      ? theme[color][parseInt(lightness, 10) + 100]
      : theme[color][lightness]};
`;

const VaalsLoading = styled.div`
  height: 29px;
  width: 29px;
`;

const VaalsButtonContainerLeft = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${props => (props.containerLeftType === 'icon' ? '0' : '0 15px')};
  min-width: 38px;

  background: ${({ theme, color, lightness }) => theme[color][parseInt(lightness, 10) + 100]};
  border-top-left-radius: ${({ theme }) => theme.borderRadius};
  border-bottom-left-radius: ${({ theme }) => theme.borderRadius};
`;

const VaalsButtonContainerRight = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${props => (props.containerRightType === 'icon' ? '0' : '0 15px')};
  min-width: 38px;
  background: ${({ theme, color, lightness }) => theme[color][parseInt(lightness, 10) + 100]};
  border-top-right-radius: ${({ theme }) => theme.borderRadius};
  border-bottom-right-radius: ${({ theme }) => theme.borderRadius};
`;
