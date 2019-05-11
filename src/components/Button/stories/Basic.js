import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import { Button, Loading } from 'vaals';

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

const ButtonContainerLeft = props => {
  return (
    <Button
      content={text('Label', 'Primary', 'Left Icon')}
      color={select(
        'Type',
        ['primary', 'primarygray', 'secondary', 'warning', 'positive', 'alert', 'gray'],
        'primary',
        'Left Icon'
      )}
      lightness={select(
        'Lightness',
        ['default', '100', '200', '300', '400', '500', '600', '700', '900'],
        'default',
        'Left Icon'
      )}
      containerLeftVisible={boolean('Container Visible?', true, 'Left Icon')}
      containerLeftType={select('Container Type', ['icon', 'text'], 'icon', 'Left Icon')}
      containerLeftContent={text('Container Value', 'chevron-left', 'Left Icon')}
    />
  );
};

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

const ButtonLoading = props => {
  return <Loading />;
};

const button = storiesOf('Components|Form/Button', module);

button
  .addDecorator(withKnobs)
  .add('Basic Button', props => <ButtonBasic {...props} />, {
    notes: 'Basic button, containing only text.'
  })
  .add('Left Container', props => <ButtonContainerLeft {...props} />, {
    notes: 'Basic button, containing only text.'
  })
  .add('Right Container', props => <ButtonContainerRight {...props} />, {
    notes: 'Basic button, containing only text.'
  })
  .add('Loading', props => <ButtonLoading {...props} />, {
    notes: ''
  });
