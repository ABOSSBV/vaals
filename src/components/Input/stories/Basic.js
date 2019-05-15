import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { Input } from 'vaals';

const input = storiesOf('Form|Input', module);

input.addDecorator(withKnobs).add(
  'Input',
  props => {
    return (
      <Input
        label={text('Label', 'Label')}
        placeholder={text('Placeholder', 'Placeholder')}
        container={select('Container', ['none', 'left', 'right'], 'none')}
        containerType={select('Container Type', ['icon', 'text'], 'icon')}
        containerContent={text('Container Content', 'info')}
        {...props}
      />
    );
  },
  {
    notes: ''
  }
);
