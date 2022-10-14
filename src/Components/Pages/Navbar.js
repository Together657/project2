import { AppBar, Box, Toolbar, Typography, Button, Grid} from '@material-ui/core'
// import { AccountCircle } from '@material-ui/icons';
// import { Image } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
// import ProfileView from './Components/Pages/auth/Profile';
import ProfileView from './auth/Profileview';


const Navbar = () => {


  return <>
    <Box sx={{ FlexGrow: 1 }}>

      <AppBar position="static" color="Secondary">
        <Toolbar>
          <Typography variant='h5' component="div" >
            <img src='./logo1.png' />
          </Typography>
          <Grid container direction="row" justifyContent="flex-end">
            <Grid item>
              <Button component={NavLink} to='/home' activeStyle><b>Home</b></Button>
              <Button component={NavLink} to='/about' activeStyle>
                <b>About</b>
              </Button>
            </Grid>
            <Grid item>
              <ProfileView />
            </Grid>
          </Grid>

        </Toolbar>
      </AppBar>
    </Box>

  </>;

};

export default Navbar;
