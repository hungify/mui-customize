import { ButtonClasses, CardClasses, InputLabelClasses, TypographyClasses } from '@mui/material';
import { ComponentNameToClassKey, OverridesStyleRules } from '@mui/material/styles/overrides';
import { Theme } from '@mui/system';

type StyleOverridesButton<ComponentName extends keyof ComponentNameToClassKey> = Partial<
  OverridesStyleRules<keyof ButtonClasses, ComponentName, Omit<Theme, 'components'>>
>;

export const buttonStyleOverrides: StyleOverridesButton<'MuiButton'> = {
  root: {
    fontWeight: 'bold',
    fontSize: '14px',
    lineHeight: '22px',
    textTransform: 'none',
  },
  sizeLarge: {
    padding: '13px 22px',
  },
  sizeMedium: {
    padding: '9px 20px',
  },
  sizeSmall: {
    padding: '4px 16px',
  },
};

type StyleOverridesCard<ComponentName extends keyof ComponentNameToClassKey> = Partial<
  OverridesStyleRules<keyof CardClasses, ComponentName, Omit<Theme, 'components'>>
>;

export const cardStyleOverrides: StyleOverridesCard<'MuiCard'> = {
  root: {
    boxShadow: '0px 4px 8px rgba(175, 175, 175, 0.06)',
    borderRadius: '10px',
    border: '1px solid #F5E9FE',
  },
};

type StyleOverridesTypography<ComponentName extends keyof ComponentNameToClassKey> = Partial<
  OverridesStyleRules<keyof TypographyClasses, ComponentName, Omit<Theme, 'components'>>
>;

export const typographyStyleOverrides: StyleOverridesTypography<'MuiTypography'> = {
  subtitle1: {
    color: '#A0A1AB',
    fontSize: '13px',
    lineHeight: '13px',
    fontWeight: 600,
  },
  subtitle2: {
    color: '#B2B3BD',
  },
};

type StyleOverridesInputLabel<ComponentName extends keyof ComponentNameToClassKey> = Partial<
  OverridesStyleRules<keyof InputLabelClasses, ComponentName, Omit<Theme, 'components'>>
>;

export const inputLabelStyleOverrides: StyleOverridesInputLabel<'MuiInputLabel'> = {
  root: {
    color: '#414357',
    fontSize: '13px',
    lineHeight: '13px',
    fontWeight: 600,
  },
};
