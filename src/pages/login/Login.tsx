import styled from '@emotion/styled';
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  Typography,
  TypographyProps,
} from '@mui/material';
import GoogleIcon from '~/components/Icons/GoogleIcon';
import Input from '~/components/Input';

const DescriptionSign = styled(Typography)<TypographyProps>`
  position: relative;
  &::before {
    content: '';
    display: block;
    width: 35%;
    height: 1px;
    background-color: #cfd0d5;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
  }
  &::after {
    content: '';
    display: block;
    width: 35%;
    height: 1px;
    background-color: #cfd0d5;
    position: absolute;
    top: 50%;
    right: 0%;
    transform: translateY(-50%);
  }
`;

export default function Login() {
  return (
    <Box
      sx={{
        backgroundColor: '#E7E7EA',
        maxWidth: '440px',
        padding: '40px',
      }}
    >
      <Box
        sx={{
          textAlign: 'left',
        }}
      >
        <Typography
          variant='h5'
          gutterBottom
          component='h5'
          sx={{
            fontWeight: '800',
          }}
        >
          Welcome Back 👏
        </Typography>
        <Typography
          variant='subtitle1'
          gutterBottom
          component='p'
          sx={{
            fontWeight: '600',
          }}
        >
          Have we meet before?
        </Typography>
      </Box>
      <Button
        startIcon={<GoogleIcon />}
        variant='outlined'
        fullWidth
        sx={{
          mt: '30px',
        }}
      >
        Sign in with Google
      </Button>
      <DescriptionSign
        variant='subtitle2'
        sx={{
          mt: '30px',
        }}
      >
        Or continue with
      </DescriptionSign>

      <FormControl
        sx={{
          mt: '20px',
        }}
        fullWidth
      >
        <InputLabel shrink htmlFor='bootstrap-input'>
          Email *
        </InputLabel>
        <Input type='email' />
      </FormControl>

      <FormControl
        sx={{
          mt: '20px',
        }}
        fullWidth
      >
        <InputLabel shrink htmlFor='bootstrap-input'>
          Password *
        </InputLabel>
        <Input type='password' />
      </FormControl>

      <FormControl
        sx={{
          mt: '20px',
        }}
        fullWidth
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <FormControlLabel
            control={
              <Checkbox
                defaultChecked
                sx={{
                  p: {
                    xs: 0,
                    md: '5px',
                  },
                  ml: {
                    xs: 0,
                  },
                }}
              />
            }
            label='Remember me'
            sx={{
              mr: {
                xs: 0,
                md: '5px',
              },
            }}
          />
          <Typography variant='secondary'>Forgot your password?</Typography>
        </Box>
      </FormControl>

      <FormControl
        sx={{
          mt: '20px',
        }}
        fullWidth
      >
        <Button variant='contained' color='primary'>
          Log in
        </Button>
      </FormControl>

      <FormControl
        sx={{
          mt: '20px',
        }}
        fullWidth
      >
        <Typography
          sx={{
            display: 'flex',
            justifyContent: 'center',
            color: '#B2B3BD',
          }}
        >
          Don&apos;t have an account?
          <Typography
            variant='primary'
            sx={{
              marginLeft: '5px',
            }}
          >
            Sign up
          </Typography>
        </Typography>
      </FormControl>
    </Box>
  );
}
