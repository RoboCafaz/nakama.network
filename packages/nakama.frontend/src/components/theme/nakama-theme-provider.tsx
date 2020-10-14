import React from 'react';
import { Grommet } from 'grommet';
import { nakamaTheme } from './nakama-theme';

export interface NakamaThemeProps extends React.PropsWithChildren<{}> {
  dark?: boolean;
}

export const NakamaThemeProvider = ({ dark, children }: NakamaThemeProps) => {
  const themeMode = dark ? 'dark' : 'light';
  return (
    <React.Fragment>
      <link
        href="http://fonts.googleapis.com/css?family=Lato&subset=latin,latin-ext"
        rel="stylesheet"
        type="text/css"
      ></link>
      <Grommet theme={nakamaTheme} themeMode={themeMode}>
        {children}
      </Grommet>
    </React.Fragment>
  );
};
