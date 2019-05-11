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
      lightness={select('Lightness', [100, 200, 300, 400, 500, 600, 700, 900], 500, 'Basic')}
    />
  );
};

const IconLeft = props => {
  return (
    <Button
      content={text('Label', 'Primary', 'Left Icon')}
      color={select(
        'Type',
        ['primary', 'primary-gray', 'secondary', 'warning', 'positive', 'alert', 'gray'],
        'primary',
        'Left Icon'
      )}
      lightness={select('Lightness', [100, 200, 300, 400, 500, 600, 700, 900], 500, 'Left Icon')}
      iconLeftVisible={boolean('Icon Visible?', true, 'Left Icon')}
      iconLeftType={select('Icon Type', ['icon', 'text'], 'icon', 'Left Icon')}
      iconLeftContent={text('Icon', 'chevron-left', 'Left Icon')}
    />
  );
};

const IconRight = props => {
  return (
    <Button
      content={text('Label', 'Primary', 'Right Icon')}
      color={select(
        'Type',
        ['primary', 'primary-gray', 'secondary', 'warning', 'positive', 'alert', 'gray'],
        'primary',
        'Right Icon'
      )}
      lightness={select('Lightness', [100, 200, 300, 400, 500, 600, 700, 900], 500, 'Right Icon')}
      iconRightVisible={boolean('Icon Visible?', true, 'Right Icon')}
      iconRightType={select('Icon Type', ['icon', 'text'], 'icon', 'Right Icon')}
      iconRightContent={text('Icon', 'chevron-right', 'Right Icon')}
    />
  );
};

const stories = storiesOf('Components|Form/Button', module);

stories
  .addDecorator(withKnobs)
  .add('Basic', props => <BasicButtons {...props} />, {
    notes: 'Basic button, containing only text.'
  })
  .add('Left Icon', props => <IconLeft {...props} />, {
    notes: 'Basic button, containing only text.'
  })
  .add('Right Icon', props => <IconRight {...props} />, {
    notes: 'Basic button, containing only text.'
  });
