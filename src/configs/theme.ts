import { createTheme } from '@mui/material';
import { components } from './components';
import { palette } from './palette';
import { typography } from './typography';

export const theme = createTheme({
  components: components,
  palette: palette,
  typography: typography,
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
