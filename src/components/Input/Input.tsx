import { InputBase, InputBaseProps } from '@mui/material';
import { styled } from '@mui/material/styles';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(1),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
    border: '1px solid #E7E7EA',
    fontSize: 16,
    padding: '8px 12px',
    transition: theme.transitions.create(['border-color', 'background-color', 'box-shadow']),
    '&::placeholder': {
      fontWeight: 600,
      fontSize: 13,
      lineHeight: 13,
      color: '#CFD0D5',
    },
    '&:valid': {
      borderWidth: 1,
    },
    '&:invalid': {
      borderColor: '#EB5757',
      borderWidth: 2,
      color: '#EB5757',
    },
    '&:focus:invalid': {},
  },
}));

// interface InputProps extends InputBaseProps {}

export default function Input({ ...restProps }: InputBaseProps) {
  return <BootstrapInput {...restProps} />;
}
