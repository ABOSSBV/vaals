import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { Block } from '../';
import { Input } from 'vaals';

const block = storiesOf('Form|Block', module);

block
  .addDecorator(withKnobs)
  .add(
    'Block w/ input',
    props => {
      return (
        <Block>
          <Input
            label={text('Label', 'Label')}
            placeholder={text('Placeholder', 'Placeholder')}
            {...props}
          />
        </Block>
      );
    },
    {
      notes: ''
    }
  )
  .add(
    'Block w/ text',
    props => {
      return <Block>Yo bro, whaddup</Block>;
    },
    {
      notes: ''
    }
  );
