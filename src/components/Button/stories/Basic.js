import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { Button } from 'vaals';

const ButtonBasic = props => {
  return (
    <Button
      content={text('Label', 'Primary', 'Basic')}
      color={select(
        'Type',
        ['primary', 'primarygray', 'secondary', 'warning', 'positive', 'alert', 'gray'],
        'primary',
        'Basic'
      )}
      lightness={select(
        'Lightness',
        ['default', '100', '200', '300', '400', '500', '600', '700', '900'],
        'default',
        'Basic'
      )}
    />
  );
};

const button = storiesOf('Form|Button', module);

button.addDecorator(withKnobs).add('Basic', props => <ButtonBasic {...props} />, {
  notes: 'Basic button, containing only text.'
});
