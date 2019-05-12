import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import { Button, Input, Loading } from 'vaals';

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

const InputExample = props => {
  return (
    <Input
      label={text('Label', 'Label')}
      placeholder={text('Placeholder', 'Placeholder')}
      {...props}
    />
  );
};

const button = storiesOf('Form|Button', module);

button
  .addDecorator(withKnobs)
  .add('Basic', props => <ButtonBasic {...props} />, {
    notes: 'Basic button, containing only text.'
  })
  .add('Container Left', props => <ButtonContainerLeft {...props} />, {
    notes: 'Button with left container, container can contain both an icon or text.'
  })
  .add('Container Right', props => <ButtonContainerRight {...props} />, {
    notes: 'Button with right container, container can contain both an icon or text.'
  })
  .add('Loading State', props => <ButtonLoading {...props} />, {
    notes: ''
  });

const input = storiesOf('Form|Input', module);
input.addDecorator(withKnobs).add('Input', props => <InputExample {...props} />, {
  notes: ''
});
