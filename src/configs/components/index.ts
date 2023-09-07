import { Components, ComponentsPropsList, Interpolation, Theme } from '@mui/material';
import { ComponentNameToClassKey } from '@mui/material';
import { OverridesStyleRules } from '@mui/material/styles/overrides';
import { buttonComponent } from './button';
import { cardComponent } from './card';
import { typographyComponent } from './typography';
import { inputLabelComponent } from './input';

export type StyleOverridesComponent<ComponentName extends keyof ComponentNameToClassKey> = Partial<
  OverridesStyleRules<
    ComponentNameToClassKey[ComponentName],
    ComponentName,
    Omit<Theme, 'components'>
  >
>;

export type VariantsComponent<ComponentName extends keyof ComponentsPropsList> = {
  props: Partial<ComponentsPropsList[ComponentName]>;
  style: Interpolation<{ theme: Theme }>;
}[];

export const components: Components<Omit<Theme, 'components'>> = {
  MuiButton: {
    styleOverrides: buttonComponent.styleOverrides,
  },
  MuiCard: {
    styleOverrides: cardComponent.styleOverrides,
    variants: [],
  },
  MuiTypography: {
    styleOverrides: typographyComponent.styleOverrides,
    variants: typographyComponent.variants,
  },
  MuiInputLabel: {
    styleOverrides: inputLabelComponent.styleOverrides,
  },
};
