import { StyleOverridesComponent } from '.';

export const styleOverrides: StyleOverridesComponent<'MuiInputLabel'> = {
  root: {
    color: '#414357',
    fontSize: '13px',
    lineHeight: '13px',
    fontWeight: 600,
  },
};

export const inputLabelComponent = {
  styleOverrides,
};
