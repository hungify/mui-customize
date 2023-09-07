import { StyleOverridesComponent } from '.';

const styleOverrides: StyleOverridesComponent<'MuiCard'> = {
  root: {
    boxShadow: '0px 4px 8px rgba(175, 175, 175, 0.06)',
    borderRadius: '10px',
    border: '1px solid #F5E9FE',
  },
};

export const cardComponent = {
  styleOverrides,
};
