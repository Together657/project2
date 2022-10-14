import * as React from "react";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';

import axios from "axios";





const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 768,
    margin: "auto",
    marginTop: "100px",
    border: "auto",
    borderRadius: "20px",
    backgroundImage: "radial-gradient(#e66465, #9198e5)",
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    // margin: theme.spacing(0),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '150%', 
    marginTop: theme.spacing(1),
    borderRadius: "10px ",

  },
  box: {
    boxShadow: "2px 3px",
  },
  box1: {
    boxShadow: "2px 3px",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: 'black',
  },
}));

export function SignIn() {
  //  const [status , setStatus] = React.useState(true)
  const [emailid, setEmail] = React.useState("")
  const [passwordi, setPassword] = React.useState("")
  const classes = useStyles();
  

  const formsubmit = async() => {
  const x =  await axios.post('https://dev-api.insightmonk.com/v1/auth/login', {
      email: emailid,
      password:passwordi   
    })
    
    if(x.data.status){
      localStorage.setItem("access_token", x.data.access_token)
      window.location.reload()
    }else{
      localStorage.removeItem("access_token")
    }
  }
  

 
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  const handlePassword = (e) => {
    setPassword(e.target.value)
  }
  return (
   
    (
    <>
      <Card className={classes.root}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              <h2>Sign in</h2>
            </Typography>
            <form className={classes.form} >
              <div>
                <TextField

                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={handleEmail}
                  value={emailid}
                  autoFocus
                  className={classes.box}
                />

                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={handlePassword}
                  value={passwordi}
                  autoFocus
                  className={classes.box1}
                />


                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  onClick={formsubmit}
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Login
                </Button>

              </div>
              <Grid container style={{ marginBottom: "10px" }}>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
               
              </Grid>
              <Button color="primary" onClick={this.onLoginClick}>SignUp</Button>
            <p className="mt-2">
              Don't have account? <Link to="/SignUp">Signup</Link>
            </p>
            </form>
          </div>

        </Container>
      </Card></>
  )
  
  
  )
        
}

export default SignIn;

