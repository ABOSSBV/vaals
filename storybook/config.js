import { addDecorator, configure } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';
import centered from '@storybook/addon-centered/react';
import ABOSSTheme from './theme.js';

const req = require.context('../src', true, /\.stories\.js$|\/stories\/.*\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(centered);

addDecorator(
  withOptions({
    theme: ABOSSTheme
  })
);

configure(loadStories, module);
