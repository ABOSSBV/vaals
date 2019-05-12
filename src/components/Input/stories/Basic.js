import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { Input } from 'vaals';

const input = storiesOf('Form|Input', module);

input.addDecorator(withKnobs).add(
  'Input',
  props => {
    return (
      <Input
        label={text('Label', 'Label')}
        placeholder={text('Placeholder', 'Placeholder')}
        {...props}
      />
    );
  },
  {
    notes: ''
  }
);
