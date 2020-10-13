import React from 'react';
import { NakamaThemeProvider } from '../src/components/theme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' }
};

export const decorators = [(story) => <NakamaThemeProvider>{story()}</NakamaThemeProvider>];
