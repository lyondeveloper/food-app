/* eslint-disable prefer-destructuring */
import { theme } from '@chakra-ui/core';

const primaryColor = '#48BB78';
const secondaryColor = '#4299E1';

const breakpoints = ['280px', '768px', '1024px', '1440px'];
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

const customTheme = {
  ...theme,
  breakpoints,
  colors: {
    ...theme.colors,
    green: {
      main: primaryColor,
    },
    blue: {
      main: secondaryColor,
    },
  },
};

export default customTheme;
