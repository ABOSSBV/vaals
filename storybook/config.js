import { addDecorator, configure } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';
import ABOSSTheme from './theme.js';

const req = require.context('../src', true, /\.stories\.js$|\/stories\/.*\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(
  withOptions({
    theme: ABOSSTheme
  })
);

configure(loadStories, module);
