import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import { Button } from 'vaals';

const ButtonContainerRight = props => {
  return (
    <Button
      content={text('Label', 'Primary', 'Right Icon')}
      color={select(
        'Type',
        ['primary', 'primarygray', 'secondary', 'warning', 'positive', 'alert', 'gray'],
        'primary',
        'Right Icon'
      )}
      lightness={select(
        'Lightness',
        ['default', '100', '200', '300', '400', '500', '600', '700', '900'],
        'default',
        'Right Icon'
      )}
      containerRightVisible={boolean('Container Visible?', true, 'Right Icon')}
      containerRightType={select('Container Type', ['icon', 'text'], 'icon', 'Right Icon')}
      containerRightContent={text('Container Value', 'chevron-right', 'Right Icon')}
    />
  );
};

const button = storiesOf('Form|Button', module);

button
  .addDecorator(withKnobs)
  .add('Container Right', props => <ButtonContainerRight {...props} />, {
    notes: 'Button with right container, container can contain both an icon or text.'
  });
