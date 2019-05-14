import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import { Button } from 'vaals';

const ButtonLoading = props => {
  return (
    <Button
      content={text('Label', 'Primary')}
      color={select(
        'Type',
        ['primary', 'primarygray', 'secondary', 'warning', 'positive', 'alert', 'gray'],
        'primary'
      )}
      lightness={select(
        'Lightness',
        ['default', '100', '200', '300', '400', '500', '600', '700', '900'],
        'default'
      )}
      loading={boolean('Loading', true)}
      containerLeftVisible={boolean('Left Container Visible?', false)}
      containerLeftType={select('Left Container Type', ['icon', 'text'], 'icon')}
      containerLeftContent={text('Left Container Value', '')}
      containerRightVisible={boolean('Right Container Visible?', false)}
      containerRightType={select('Right Container Type', ['icon', 'text'], 'icon')}
      containerRightContent={text('Right Container Value', '')}
    />
  );
};

const button = storiesOf('Form|Button', module);

button
  .addDecorator(withKnobs)
  .add(
    'Loading State',
    props => (
      <Button
        content={text('Label', 'Primary')}
        color={select(
          'Type',
          ['primary', 'primarygray', 'secondary', 'warning', 'positive', 'alert', 'gray'],
          'primary'
        )}
        lightness={select(
          'Lightness',
          ['default', '100', '200', '300', '400', '500', '600', '700', '900'],
          'default'
        )}
        loading={boolean('Loading', true)}
        containerLeftVisible={boolean('Left Container Visible?', false)}
        containerLeftType={select('Left Container Type', ['icon', 'text'], 'icon')}
        containerLeftContent={text('Left Container Value', '')}
        containerRightVisible={boolean('Right Container Visible?', false)}
        containerRightType={select('Right Container Type', ['icon', 'text'], 'icon')}
        containerRightContent={text('Right Container Value', '')}
      />
    ),
    {
      notes: ''
    }
  );
