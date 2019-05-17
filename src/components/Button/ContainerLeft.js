import React from 'react';
import styled from 'styled-components';
import FeatherIcon from 'feather-icons-react';

import { ThemeWrapper } from 'vaals';
import { Loading } from '../Loading';

export const ContainerLeft = props => {
  return (
    <VaalsButtonContainerLeft
      color={props.color}
      lightness={props.lightness}
      containerLeftType={props.containerLeftType}
    >
      {props.loading && props.containerLeftVisible && (
        <VaalsButtonLoading
          color={props.color}
          lightness={props.lightness}
          container={props.containerLeftVisible || props.containerRightVisible}
        >
          <VaalsLoading color={props.color} lightness={props.lightness}>
            <Loading />
          </VaalsLoading>
        </VaalsButtonLoading>
      )}
      {props.containerLeftType === 'icon' && (
        <FeatherIcon
          icon={props.containerLeftContent}
          color={
            (props.lightness && props.lightness < 400) || props.color === 'secondary'
              ? '#000719'
              : '#fff'
          }
          size="18"
        />
      )}
      {props.containerLeftType === 'text' && <div>{props.containerLeftContent}</div>}
    </VaalsButtonContainerLeft>
  );
};

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
