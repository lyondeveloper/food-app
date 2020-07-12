import { theme } from '@chakra-ui/core';

export const primaryColor = '#48BB78';
export const secondaryColor = '#4299E1';

const customTheme = {
  ...theme,
  colors: {
    transparent: 'transparent',
    green: primaryColor,
    blue: secondaryColor,
  },
};

export default customTheme;
