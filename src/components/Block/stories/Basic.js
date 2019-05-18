import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { Block } from '../';
import { Input, Select } from 'vaals';

const block = storiesOf('Form|Block', module);

block
  .addDecorator(withKnobs)
  .add(
    'Block w/ text',
    props => {
      return <Block>Yo bro, whaddup</Block>;
    },
    {
      notes: ''
    }
  )
  .add(
    'Block w/ input',
    props => {
      return (
        <Block>
          <Input
            label={text('Label', 'Label')}
            placeholder={text('Placeholder', 'Placeholder')}
            loadingVisible={boolean('info', true)}
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
    'Block w/ select',
    props => {
      return (
        <Block>
          <Select {...props} />
        </Block>
      );
    },
    {
      notes: ''
    }
  );
