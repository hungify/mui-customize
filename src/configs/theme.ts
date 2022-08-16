import { createTheme } from '@mui/material';
import {
  buttonStyleOverrides,
  cardStyleOverrides,
  inputLabelStyleOverrides,
  typographyStyleOverrides,
} from './styleOverrides';

export const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: buttonStyleOverrides,
    },
    MuiCard: {
      styleOverrides: cardStyleOverrides,
    },
    MuiTypography: {
      styleOverrides: typographyStyleOverrides,
      variants: [
        {
          props: {
            variant: 'primary',
          },
          style: {
            color: '#9F28F3',
          },
        },
        {
          props: {
            variant: 'secondary',
          },
          style: {
            color: '#F2C52C',
          },
        },
      ],
    },
    MuiInputLabel: {
      styleOverrides: inputLabelStyleOverrides,
    },
  },
  palette: {
    primary: {
      main: '#9F28F3',
      contrastText: '#fff',
    },
    primaryLight: {
      main: '#B253F5',
      contrastText: '#fff',
    },
    primaryWhite: {
      main: '#F5E9FE',
      contrastText: '#9F28F3',
    },
    secondary: {
      main: '#F2C52C',
      contrastText: '#fff',
    },
    secondaryLight: {
      main: '#FEF9EA',
      contrastText: '#F2C52C',
    },
    secondaryBlack: {
      main: '#272B30',
      contrastText: '#F2C52C',
    },
    white: {
      main: '#fff',
      contrastText: '#000',
    },
    black: {
      main: '#000',
      contrastText: '#fff',
    },
  },
});

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    dashed: true;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    primary: true;
    secondary: true;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    primaryLight: true;
    primaryWhite: true;
    secondaryLight: true;
    secondaryBlack: true;
    white: true;
    black: true;
  }
}

declare module '@mui/material/styles' {
  interface Palette {
    primaryLight: Palette['primary'];
    primaryWhite: Palette['primary'];
    secondaryLight: Palette['primary'];
    secondaryBlack: Palette['primary'];
    black: Palette['primary'];
    white: Palette['primary'];
  }

  interface PaletteOptions {
    primaryLight?: PaletteOptions['primary'];
    primaryWhite?: PaletteOptions['primary'];
    secondaryLight?: PaletteOptions['primary'];
    secondaryBlack?: PaletteOptions['primary'];
    black?: PaletteOptions['primary'];
    white?: PaletteOptions['primary'];
  }
}
