import React from 'react';
import { Grommet } from 'grommet';
import { nakamaTheme } from './nakama-theme';

export const NakamaThemeProvider = ({ children }: React.PropsWithChildren<{}>) => (
  <React.Fragment>
    <link
      href="http://fonts.googleapis.com/css?family=Lato&subset=latin,latin-ext"
      rel="stylesheet"
      type="text/css"
    ></link>
    <Grommet theme={nakamaTheme}>{children}</Grommet>
  </React.Fragment>
);
