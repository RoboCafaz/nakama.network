import { Box } from 'grommet';
import React from 'react';
import { nakamaTheme } from '../nakama-theme';

export default {
  title: 'Theme'
};

export const Theme = () => {
  const boxes = Object.entries(nakamaTheme.global.colors)
    .filter(([, value]) => typeof value === 'string')
    .map(([key, value], i) => {
      return (
        <Box background={value} key={i}>
          {key} - {value}
        </Box>
      );
    });
  return (
    <Box pad="50px">
      <Box>default</Box>
      {boxes}
    </Box>
  );
};
