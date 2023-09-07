import { StyleOverridesComponent } from '.';

const styleOverrides: StyleOverridesComponent<'MuiButton'> = {
  root: ({ ownerState }) => ({
    fontWeight: 'bold',
    fontSize: '14px',
    lineHeight: '22px',
    textTransform: 'none',
    ...(ownerState.variant === 'contained' &&
      ownerState.color === 'primary' && {
        backgroundColor: '#202020',
        color: '#fff',
      }),
  }),
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

export const buttonComponent = {
  styleOverrides,
};
