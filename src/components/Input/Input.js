import React, { useState } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

import PhoneInput from 'react-phone-number-input';
import { ThemeWrapper } from 'vaals';
import { VaalsContainerLeft, VaalsContainerRight } from './components';

export const Input = props => {
  const [inputValue, setInputValue] = useState(props.value);
  const [isFocused, setIsFocused] = useState(false);
  return (
    <ThemeWrapper>
      <VaalsInputContainer {...props}>
        <VaalsInputContainerTop {...props}>
          <VaalsInputLabel display={inputValue ? 'true' : 'false'}>{props.label}</VaalsInputLabel>
        </VaalsInputContainerTop>
        <VaalsInputContainerBottom
          focused={isFocused}
          display={inputValue ? true : false}
          {...props}
        >
          {props.container === 'left' && <VaalsContainerLeft {...props} />}
          {props.type === 'phonenumber' && (
            <VaalsPhoneInput>
              <PhoneInput
                placeholder={props.placeholder ? props.placeholder : props.label}
                onChange={e => setInputValue(e)}
              />
            </VaalsPhoneInput>
          )}
          {props.type === 'string' && (
            <VaalsInput
              placeholder={props.placeholder ? props.placeholder : props.label}
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
              onFocus={e => setIsFocused(true)}
              onBlur={e => setIsFocused(false)}
            />
          )}
          {props.container === 'right' && <VaalsContainerRight {...props} />}
        </VaalsInputContainerBottom>
      </VaalsInputContainer>
    </ThemeWrapper>
  );
};

Input.propTypes = {
  type: propTypes.oneOf(['string', 'currency', 'contact', 'phonenumber', 'email']),
  placeholder: propTypes.string,
  label: propTypes.string,
  container: propTypes.oneOf(['none', 'left', 'right']),
  containerType: propTypes.string,
  containerContent: propTypes.string
};

Input.defaultProps = {
  type: 'string',
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
  width: 100%;
`;

const VaalsInputContainerTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
`;

const VaalsInputContainerBottom = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  width: 100%;
  height: 100%;

  background: #fff;
  border-width: 2px;
  border-style: solid;
  border-color: ${({ focused, theme }) => (focused ? theme['gray']['300'] : theme['gray']['200'])}
  border-radius: ${({ theme }) => theme.borderRadius};

  transform: translateY(${({ display }) => (display ? '0' : '-7.5px')});

  overflow: hidden;

  transition: all ${({ theme }) => theme.durationFast} ${({ theme }) => theme.transitionDefault};
`;

const VaalsInputLabel = styled.label`
  opacity: ${({ display }) => (display === 'true' ? '1' : '0')}
  padding-left: ${({ theme }) => theme.spaceXs};
  padding-bottom: ${({ theme }) => theme.space2xs};
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSizeXs};
  font-weight: ${({ theme }) => theme.fontWeightMedium};
  color: ${({ theme }) => theme['gray']['500']};
  text-transform: uppercase;
`;

const VaalsInput = styled.input`
  width: 100%;
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

  &::placeholder {
    color: ${({ theme }) => theme['gray']['400']};
  }
`;

const VaalsPhoneInput = styled.div`
  flex: 1;

  .react-phone-number-input__row {
    display: flex;
    align-items: center;
  }

  .react-phone-number-input__phone {
    flex: 1;

    min-width: 0;
  }

  .react-phone-number-input__icon {
    margin-left: 5px;
    width: 1.24em;
    height: 0.93em;

    box-sizing: content-box;

    img,
    svg {
      border-radius: 3px;
    }
  }

  .react-phone-number-input__icon--international {
    width: calc(0.93em + 2px);
    height: calc(0.93em + 2px);

    padding-left: ${({ theme }) => theme.spaceXs};
    padding-right: 0;

    border: none;
  }

  .react-phone-number-input__error {
    margin-left: calc(1.24em + 2px + 0.3em + 0.35em + 0.5em);
    margin-top: calc(0.3rem);
  }

  .react-phone-number-input__icon-image {
    max-width: 100%;
    max-height: 100%;
  }

  .react-phone-number-input__ext-input::-webkit-inner-spin-button,
  .react-phone-number-input__ext-input::-webkit-outer-spin-button {
    margin: 0 !important;
    -webkit-appearance: none !important;
    -moz-appearance: textfield !important;
  }

  .react-phone-number-input__ext-input {
    width: 3em;
  }

  .react-phone-number-input__ext {
    white-space: nowrap;
  }

  .react-phone-number-input__ext,
  .react-phone-number-input__ext-input {
    margin-left: 0.5em;
  }

  .react-phone-number-input__country--native {
    position: relative;
    align-self: stretch;
    display: flex;
    align-items: center;
    margin-right: 0.5em;
  }

  .react-phone-number-input__country-select {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
    border: 0;
    opacity: 0;
    cursor: pointer;
  }

  .react-phone-number-input__country-select-arrow {
    display: block;
    content: '';
    width: 0;
    height: 0;
    margin-bottom: 0.1em;
    margin-top: 0.3em;
    margin-left: 0.3em;
    border-width: 0.2em 0.2em 0 0.2em;
    border-style: solid;
    border-left-color: transparent;
    border-right-color: transparent;
    color: ${({ theme }) => theme['gray']['400']};
    opacity: 0.7;
    transition: color 0.1s;
  }

  .react-phone-number-input__country-select-divider {
    font-size: 1px;
    background: black;
  }

  .react-phone-number-input__country-select:focus + .react-phone-number-input__country-select-arrow,
  .react-phone-number-input__country.rrui__select--focus .rrui__select__arrow {
    color: ${({ theme }) => theme['gray']['500']};
  }

  .react-phone-number-input__input {
    padding: ${({ theme }) => theme.spaceXs} 0;
    outline: none;
    border-radius: 0;
    appearance: none;
    border: none;
    font-size: inherit;

    font-family: ${({ theme }) => theme.fontFamily};
    font-size: ${({ theme }) => theme.fontSizeSm};
    font-weight: ${({ theme }) => theme.fontWeightRegular};
    color: ${({ theme }) => theme['gray']['700']};

    transition: all ${({ theme }) => theme.durationFast} ${({ theme }) => theme.transitionDefault};

    &:focus {
      outline: none;
    }
  }

  .react-phone-number-input__input--disabled {
    cursor: default;
  }

  .react-phone-number-input__input--invalid,
  .react-phone-number-input__input--invalid:focus {
    border-color: ${({ theme }) => theme['warning']['500']};
  }

  .react-phone-number-input__input:-webkit-autofill {
    box-shadow: 0 0 0 1000px white inset;
  }

  .react-phone-number-input__country .rrui__select__button {
    border-bottom: none;
  }
`;
