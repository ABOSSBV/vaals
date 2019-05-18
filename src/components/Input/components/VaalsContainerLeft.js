import React, { Fragment } from 'react';
import styled from 'styled-components';
import FeatherIcon from 'feather-icons-react';

import { ThemeWrapper } from 'vaals';

export const VaalsContainerLeft = props => {
  return (
    <VaalsInputContainerLeft {...props}>
      {props.containerType === 'icon' && <FeatherIcon icon={props.containerContent} size="16" />}
      {props.containerType === 'text' && <Fragment>{props.containerContent}</Fragment>}
    </VaalsInputContainerLeft>
  );
};

const VaalsInputContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.spaceXs} ${({ theme }) => theme.spaceXs};
  padding-right: 0;
  min-width: ${({ theme }) => theme.borderRadius};

  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSizeSm};
  font-weight: ${({ theme }) => theme.fontWeightMedium};
  color: ${({ theme }) => theme['gray']['400']};
`;
