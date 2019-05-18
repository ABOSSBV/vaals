import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { Select } from '../';

const SelectBasic = props => {
  return <Select label={text('Label', 'Label')} placeholder={text('Placeholder', 'Placeholder')} />;
};

const selectBasic = storiesOf('Form|Select', module);
SelectBasic.defaultProps = Select.defaultProps;
SelectBasic.propTypes = Select.propTypes;

selectBasic.addDecorator(withKnobs).add('Basic', props => <SelectBasic {...props} />, {
  notes: 'Basic select, containing only text.'
});
