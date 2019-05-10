import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from 'vaals';
const BasicButtons = props => {
  return <Button label="Default" onClick={() => {}} {...props} />;
};

storiesOf('Button', module).add('Basic', () => <BasicButtons />);
