import React, { useState } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

import FeatherIcon from 'feather-icons-react';
import { ThemeWrapper } from 'vaals';
import { VaalsContainerLeft, VaalsContainerRight } from './components';

export const Input = props => {
  const [inputValue, setInputValue] = useState(props.value);
  const [isFocused, setIsFocused] = useState(false);
  return (
    <ThemeWrapper>
      <VaalsInputContainer {...props}>
        <VaalsInputContainerTop {...props}>
          <VaalsInputLabel display={inputValue ? true : false}>{props.label}</VaalsInputLabel>
        </VaalsInputContainerTop>
        <VaalsInputContainerBottom
          focused={isFocused}
          display={inputValue ? true : false}
          {...props}
        >
          {props.container === 'left' && <VaalsContainerLeft {...props} />}
          <VaalsInput
            placeholder={props.placeholder ? props.placeholder : props.label}
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            onFocus={e => setIsFocused(true)}
            onBlur={e => setIsFocused(false)}
            container={props.container}
          />
          {props.container === 'right' && <VaalsContainerRight {...props} />}
        </VaalsInputContainerBottom>
      </VaalsInputContainer>
    </ThemeWrapper>
  );
};

Input.propTypes = {
  placeholder: propTypes.string,
  label: propTypes.string,
  container: propTypes.string,
  containerType: propTypes.string,
  containerContent: propTypes.string
};

Input.defaultProps = {
  placeholder: '',
  label: '',
  container: 'none',
  containerType: 'icon',
  containerContent: ''
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
  flex-direction: row;
  align-items: stretch;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ focused, theme }) => (focused ? theme['gray']['300'] : theme['gray']['200'])}
  border-radius: ${({ theme }) => theme.borderRadius};

  transform: translateY(${({ display }) => (display ? '0' : '-7.5px')});

  overflow: hidden;

  transition: all ${({ theme }) => theme.durationFast} ${({ theme }) => theme.transitionDefault};
`;

const VaalsInputLabel = styled.label`
  opacity: ${({ display }) => (display ? '1' : '0')}
  padding-left: ${({ theme }) => theme.spaceXs};
  padding-bottom: ${({ theme }) => theme.space2xs};
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSizeXs};
  font-weight: ${({ theme }) => theme.fontWeightMedium};
  color: ${({ theme }) => theme['gray']['500']};
  text-transform: uppercase;
`;

const VaalsInput = styled.input`
  padding: ${({ container, theme }) =>
    container === 'none' ? theme.spaceXs : '${theme.spaceXs} 0'};
  padding: ${({ theme }) => theme.spaceXs};

  border: 0;

  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSizeSm};
  font-weight: ${({ theme }) => theme.fontWeightRegular};
  color: ${({ theme }) => theme['gray']['700']};

  transition: all ${({ theme }) => theme.durationFast} ${({ theme }) => theme.transitionDefault};

  &:focus {
    outline: none;
  }
`;

const VaalsInputContainerRight = styled.div`
  min-width: ${({ theme }) => theme.borderRadius};
  padding: ${({ theme }) => theme.spaceXs} ${({ theme }) => theme.spaceXs};

  background: #fff;
`;
