import React, { Fragment } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

import FeatherIcon from 'feather-icons-react';
import { ThemeWrapper } from 'vaals';

export const Input = props => {
  return (
    <ThemeWrapper>
      <VaalsInputContainer {...props}>
        <VaalsInputContainerTop {...props}>
          <VaalsInputLabel>{props.label}</VaalsInputLabel>
        </VaalsInputContainerTop>
        <VaalsInputContainerBottom {...props}>
          <VaalsInput placeholder={props.placeholder} />
        </VaalsInputContainerBottom>
      </VaalsInputContainer>
    </ThemeWrapper>
  );
};

Input.propTypes = {
  placeholder: propTypes.string,
  label: propTypes.string
};

Input.defaultProps = {
  placeholder: '',
  label: ''
};

const VaalsInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const VaalsInputContainerTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const VaalsInputContainerBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const VaalsInputLabel = styled.label`
  padding-left: ${({ theme }) => theme.spaceSm};
  padding-bottom: ${({ theme }) => theme.space2xs};
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSizeSm};
  font-weight: ${({ theme }) => theme.fontWeightSemiBold};
  color: ${({ theme }) => theme['primarygray']['600']};
`;

const VaalsInput = styled.input`
  padding: ${({ theme }) => theme.spaceXs} ${({ theme }) => theme.spaceS};

  border: 2px solid ${({ theme }) => theme['primarygray']['200']};
  border-radius: ${({ theme }) => theme.borderRadius};

  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSizeMd};
  font-weight: ${({ theme }) => theme.fontWeightRegular};
  color: ${({ theme }) => theme['gray']['700']};

  transition: all ${({ theme }) => theme.durationFast} ${({ theme }) => theme.transitionDefault};

  &:focus {
    border: 2px solid ${({ theme }) => theme['primarygray']['300']};
    outline: none;
  }
`;
