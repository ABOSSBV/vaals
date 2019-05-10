import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from 'vaals';
const BasicButtons = props => {
  return (
    <div>
      <Button />
      <Button label="Default" buttonValue="Continue" onClick={() => {}} {...props} />
      <Button
        label="Default"
        buttonValue="Continue"
        backgroundColor="primary"
        onClick={() => {}}
        {...props}
      />
      <Button
        label="Default"
        buttonValue="Continue"
        backgroundColor="primary"
        backgroundColorLightness="300"
        onClick={() => {}}
        {...props}
      />
      <Button
        label="Default"
        buttonValue="Continue"
        backgroundColor="warning"
        onClick={() => {}}
        {...props}
      />
      <Button
        label="Default"
        buttonValue="Continue"
        backgroundColor="alert"
        onClick={() => {}}
        {...props}
      />
    </div>
  );
};

storiesOf('Button', module).add('Basic', () => <BasicButtons />);
