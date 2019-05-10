import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { Button } from 'vaals';

const BasicButtons = props => {
  return (
    <Button
      buttonValue={text('Label', 'Primary', 'Basic')}
      color={select(
        'Type',
        ['primary', 'primary-gray', 'secondary', 'warning', 'positive', 'alert', 'gray'],
        'primary',
        'Basic'
      )}
      onClick={() => {}}
      {...props}
    />
  );
};

const stories = storiesOf('Components|Form/Button', module);

stories.addDecorator(withKnobs).add('Basic', () => <BasicButtons />, {
  notes: 'Basic button, containing only text.'
});
