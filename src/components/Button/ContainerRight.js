import React from 'react';
import styled from 'styled-components';
import FeatherIcon from 'feather-icons-react';

import { Loading } from '../Loading';

export const ContainerRight = props => {
  return (
    <ButtonContainerRight
      color={props.color}
      lightness={props.lightness}
      containerRightType={props.containerRightType}
    >
      {props.loading && props.containerRightVisible && (
        <ButtonLoadingContainer
          color={props.color}
          lightness={props.lightness}
          container={props.containerLeftVisible || props.containerRightVisible}
        >
          <ButtonLoading color={props.color} lightness={props.lightness}>
            <Loading />
          </ButtonLoading>
        </ButtonLoadingContainer>
      )}
      {props.containerRightType === 'icon' && (
        <FeatherIcon
          icon={props.containerRightContent}
          color={
            (props.lightness && props.lightness < 400) || props.color === 'secondary'
              ? '#000719'
              : '#fff'
          }
          size="18"
        />
      )}
      {props.containerRightType === 'text' && <div>{props.containerRightContent}</div>}
    </ButtonContainerRight>
  );
};

const ButtonContainerRight = styled.div`
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

const ButtonLoadingContainer = styled.div`
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

const ButtonLoading = styled.div`
  height: 29px;
  width: 29px;
`;
