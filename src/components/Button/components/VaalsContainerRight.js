import React from 'react';
import styled from 'styled-components';
import FeatherIcon from 'feather-icons-react';

import { ThemeWrapper } from 'vaals';
import { Loading } from '../../Loading';

export const VaalsContainerRight = props => {
  return (
    <ThemeWrapper>
      <VaalsButtonContainerRight
        color={props.color}
        lightness={props.lightness}
        containerRightType={props.containerRightType}
      >
        {props.loading && props.containerRightVisible && (
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
      </VaalsButtonContainerRight>
    </ThemeWrapper>
  );
};

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
