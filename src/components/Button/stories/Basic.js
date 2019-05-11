import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import { Button } from 'vaals';

const BasicButtons = props => {
  return (
    <Button
      content={text('Label', 'Primary', 'Basic')}
      color={select(
        'Type',
        ['primary', 'primary-gray', 'secondary', 'warning', 'positive', 'alert', 'gray'],
        'primary',
        'Basic'
      )}
      lightness={select(
        'Lightness',
        ['default', '100', '200', '300', '400', '500', '600', '700', '900'],
        'default',
        'Basic'
      )}
      iconLeft={boolean('Icon Left', false, 'Basic')}
      iconRight={boolean('Icon Right', false, 'Basic')}
    />
  );
};

const stories = storiesOf('Components|Form/Button', module);

stories.addDecorator(withKnobs).add('Basic', props => <BasicButtons {...props} />, {
  notes: 'Basic button, containing only text.'
});
