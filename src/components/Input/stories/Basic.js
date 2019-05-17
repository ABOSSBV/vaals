import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { Input } from 'vaals';

const input = storiesOf('Form|Input', module);

input
  .addDecorator(withKnobs)
  .add(
    'String',
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
  )
  .add(
    'Phonenumber',
    props => {
      return (
        <Input
          type={text('Type', 'phonenumber')}
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
  )
  .add(
    'Input Container Left',
    props => {
      return (
        <Input
          label={text('Label', 'Email Address')}
          placeholder={text('Placeholder', 'your@email.com')}
          container={select('Container', ['none', 'left', 'right'], 'left')}
          containerType={select('Container Type', ['icon', 'text'], 'icon')}
          containerContent={text('Container Content', 'mail')}
          {...props}
        />
      );
    },
    {
      notes: ''
    }
  )
  .add(
    'Input Container Right',
    props => {
      return (
        <Input
          label={text('Label', 'Fee')}
          placeholder={text('Placeholder', '0,00')}
          container={select('Container', ['none', 'left', 'right'], 'right')}
          containerType={select('Container Type', ['icon', 'text'], 'text')}
          containerContent={text('Container Content', 'USD')}
          {...props}
        />
      );
    },
    {
      notes: ''
    }
  );
