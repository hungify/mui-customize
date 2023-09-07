import { StyleOverridesComponent, VariantsComponent } from '.';

const styleOverrides: StyleOverridesComponent<'MuiTypography'> = {
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

export const variants: VariantsComponent<'MuiTypography'> = [
  {
    props: { variant: 'primary' },
    style: { color: '#9F28F3' },
  },
  {
    props: { variant: 'secondary' },
    style: { color: '#F2C52C' },
  },
];

export const typographyComponent = {
  styleOverrides,
  variants,
};
