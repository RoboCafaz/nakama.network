import React from 'react';
import { render } from 'react-dom';
import { Application } from './components/application';
import { NakamaThemeProvider } from './components/theme';

render(
  <NakamaThemeProvider>
    <Application />
  </NakamaThemeProvider>,
  document.getElementById('root')
);
