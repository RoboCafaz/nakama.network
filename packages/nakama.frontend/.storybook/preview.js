import { Box, CheckBox } from 'grommet';
import React, { useState } from 'react';
import { NakamaThemeProvider } from '../src/components/theme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' }
};

export const decorators = [
  (story) => {
    const [darkMode, setDarkMode] = useState(false);
    return (
      <NakamaThemeProvider dark={darkMode}>
        <Box>
          <CheckBox
            type="checkbox"
            checked={darkMode}
            onChange={(event) => {
              setDarkMode(event.target.checked);
            }}
            label="Dark Mode"
          />
        </Box>
        <Box width="full">{story()}</Box>
      </NakamaThemeProvider>
    );
  }
];
