import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { ThemeWrapper } from 'vaals';
import { Loading } from '../Loading';
import { ContainerLeft } from './ContainerLeft';
import { ContainerRight } from './ContainerRight';

export const Button = props => {
  return (
    <ThemeWrapper>
      <ButtonContainer {...props}>
        {props.containerLeftVisible && <ContainerLeft {...props} />}
        <ButtonContent {...props}>
          {props.loading && (!props.containerRightVisible && !props.containerLeftVisible) && (
            <ButtonLoading {...props}>
              <LoadingContainer {...props}>
                <Loading />
              </LoadingContainer>
            </ButtonLoading>
          )}
          {props.content}
        </ButtonContent>
        {props.containerRightVisible && <ContainerRight {...props} />}
      </ButtonContainer>
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

const ButtonContainer = styled.button`
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

const ButtonContent = styled.div`
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

const ButtonLoading = styled.div`
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

const LoadingContainer = styled.div`
  height: 29px;
  width: 29px;
`;
