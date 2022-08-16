import { TypographyPropsVariantOverrides } from '@mui/material';

interface TypographyVariants {
  props: TypographyPropsVariantOverrides;
  style: React.CSSProperties;
}
const primaryTypography = {
  props: {
    variant: 'primary',
  },
  style: {
    color: '#9F28F3',
  },
};

export const typographyVariants = [primaryTypography];
