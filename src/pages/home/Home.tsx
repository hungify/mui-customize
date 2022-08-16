import { Button, Box, Checkbox, Card, CardContent, Typography, Avatar } from '@mui/material';
import GoogleIcon from '~/components/Icons/GoogleIcon';
import Select from '~/components/Select';
import Input from '~/components/Input';

export default function Home() {
  return (
    <>
      Button
      <Box>
        <Button variant='contained' size='large' color='primary'>
          Upgrade Plan
        </Button>
        <Button variant='contained' size='large' color='primaryLight'>
          Upgrade Plan
        </Button>
        <Button variant='contained' size='large' color='primaryWhite'>
          Upgrade Plan
        </Button>
        <span></span>
        <Button variant='contained' size='large' color='secondary'>
          Upgrade Plan
        </Button>
        <Button variant='contained' size='large' color='secondaryLight'>
          Upgrade Plan
        </Button>
        <Button variant='contained' size='large' color='secondaryBlack'>
          Upgrade Plan
        </Button>
        <span></span>
        <Button variant='contained' size='large' color='white' startIcon={<GoogleIcon />}>
          Upgrade Plan
        </Button>
        <span></span>
        <Button variant='contained' size='large' color='white' startIcon={<GoogleIcon />}>
          Upgrade Plan
        </Button>
        <span></span>
        <Button variant='contained' size='medium' color='white' startIcon={<GoogleIcon />}>
          Upgrade Plan
        </Button>
        <span></span>
        <Button variant='contained' size='small' color='white' startIcon={<GoogleIcon />}>
          Upgrade Plan
        </Button>
      </Box>
      <Input type='text' placeholder=' Enter your password' />
      <Select />
      <Checkbox />
      <Card sx={{ maxWidth: 375 }}>
        <CardContent
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Avatar
            alt='Remy Sharp'
            src='https://i.pravatar.cc/150?img=3'
            sx={{
              marginRight: '15px',
            }}
          />
          <Box
            sx={{
              textAlign: 'left',
            }}
          >
            <Typography variant='h5' component='h2'>
              Facebook Ads
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Facebook ad copies that make your ads.
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </>
  );
}
