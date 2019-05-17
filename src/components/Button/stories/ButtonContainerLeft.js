import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import { Button } from 'vaals';

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

const button = storiesOf('Form|Button', module);
ButtonContainerLeft.defaultProps = Button.defaultProps;
ButtonContainerLeft.propTypes = Button.propTypes;

button.addDecorator(withKnobs).add('Container Left', props => <ButtonContainerLeft {...props} />, {
  notes: 'Button with left container, container can contain both an icon or text.'
});
