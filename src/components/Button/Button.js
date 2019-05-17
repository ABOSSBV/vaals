import React, { Fragment } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

import FeatherIcon from 'feather-icons-react';
import { ThemeWrapper } from 'vaals';
import { Loading } from '../Loading';
import { VaalsContainerLeft, VaalsContainerRight } from './components';

export const Button = props => {
  return (
    <ThemeWrapper>
      <VaalsButton {...props}>
        {props.containerLeftVisible && <VaalsContainerLeft {...props} />}
        <VaalsButtonContent {...props}>
          {props.loading && (!props.containerRightVisible && !props.containerLeftVisible) && (
            <VaalsButtonLoading {...props}>
              <VaalsLoading {...props}>
                <Loading />
              </VaalsLoading>
            </VaalsButtonLoading>
          )}
          {props.content}
        </VaalsButtonContent>
        {props.containerRightVisible && <VaalsContainerRight {...props} />}
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
    outline: none;
  }
`;

const VaalsButtonContent = styled.div`
  position: relative;
  padding: 15px 25px;
  padding: ${({ theme }) => theme.spaceXs};
  padding-top: ${({ theme }) => theme.spaceMd};
  padding-left: ${props =>
    props.containerLeftVisible ? props.theme.spaceMd : props.theme.spaceLg};
  padding-bottom: ${({ theme }) => theme.spaceMd};
  padding-right: ${props =>
    props.containerRightVisible ? props.theme.spaceMd : props.theme.spaceLg};
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
