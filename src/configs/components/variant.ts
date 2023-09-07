import { Interpolation, Theme, TypographyProps } from '@mui/material';

type TypographyVariants = {
  props: Partial<TypographyProps>;
  style: Interpolation<{ theme: Theme }>;
}[];

export const typographyVariants: TypographyVariants = [
  {
    props: { variant: 'primary' },
    style: { color: '#9F28F3' },
  },
  {
    props: { variant: 'secondary' },
    style: { color: '#F2C52C' },
  },
];
