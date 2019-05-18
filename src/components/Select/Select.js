import React, { useState } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import SelectItem from 'react-select';

import { ThemeWrapper } from 'vaals';

export const Select = props => {
  return (
    <ThemeWrapper>
      <SelectContainer>
        <SelectItem
          className="vaals-select-container"
          classNamePrefix="vaals-select"
          options={[
            { value: 'chocolate', label: 'Chocolate' },
            { value: 'strawberry', label: 'Strawberry' },
            { value: 'vanilla', label: 'Vanilla' }
          ]}
          {...props}
        />
      </SelectContainer>
    </ThemeWrapper>
  );
};

const SelectContainer = styled.div`
  .vaals-select-container {
    width: 100%;
    min-width: 166px;

    .vaals-select__control {
      min-height: auto;
      width: 100%;
      padding: 0;

      background: #fff;
      border-width: 2px;
      border-style: solid;
      border-color: ${({ theme }) => theme['gray']['200']}
      border-radius: ${({ theme }) => theme.borderRadius};
    
      font-family: ${({ theme }) => theme.fontFamily};
      font-size: ${({ theme }) => theme.fontSizeSm};
      font-weight: ${({ theme }) => theme.fontWeightRegular};
      color: ${({ theme }) => theme['gray']['700']};
    
      transition: all ${({ theme }) => theme.durationFast} ${({ theme }) =>
  theme.transitionDefault};
      box-shadow: none;

      &--is-focused {
        border-color: ${({ theme }) => theme['gray']['300']}
      }

      &--menu-is-open {}
    }

    .vaals-select__value-container {
      padding: 0 6px;
    }

    .vaals-select__indicator-separator {
      display: none;
    }

    .vaals-select__indicator {
      svg {
        width: 16px;
        height: 16px;
      }
    }

    .vaals-select__placeholder,
    .vaals-select__single-value {
      font-family: ${({ theme }) => theme.fontFamily};
      font-size: ${({ theme }) => theme.fontSizeSm};
      font-weight: ${({ theme }) => theme.fontWeightRegular};
    }

    .vaals-select__single-value {
      color: ${({ theme }) => theme['gray']['700']};
    }
    .vaals-select__placeholder {
      color: ${({ theme }) => theme['gray']['400']};
    }
  }
`;
