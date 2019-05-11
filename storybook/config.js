import { addDecorator, configure, addParameters } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import ABOSSTheme from './theme.js';
import React, { Fragment } from 'react';
import { GlobalStyles } from './global-style';
const req = require.context('../src', true, /\.stories\.js$|\/stories\/.*\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

function withGlobalStyles(storyFn) {
  return (
    <React.Fragment>
      <GlobalStyles />
      {storyFn()}
    </React.Fragment>
  );
}
addDecorator(withGlobalStyles);
addDecorator(centered);
addParameters({
  options: {
    theme: ABOSSTheme
  }
});

configure(loadStories, module);
