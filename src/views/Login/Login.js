import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import { IconButton, InputAdornment, Typography } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',

  },
  paper: {
    margin: theme.spacing(17, 3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%"
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignInSide(props) {

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const classes = useStyles();

  const loginHandle = () => {
    if (email === 'alok21@gmail.com' && password === '123')
      props.history.push('Dashboard')
  }
  console.log(props)
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid justify="center" container item xs={false} sm={4} md={7}
        style={{
          background: "#242438",
          color: "white",
          paddingTop: "50px"
        }} >

        <Grid>
          <img width="100px" src="https://img.icons8.com/plasticine/100/000000/stethoscope.png" />
        </Grid>
        <Grid style={{ paddingTop: "25px" }}>
          <Typography
            variant="h4"
            style={{
              fontFamily: "Mulish",
              fontWeight: "500"
            }}
          >
            BRONTO PLUS
            </Typography>
        </Grid>
      </Grid>
      <Grid style={{ background: "#eeeeee" }} item xs={12} sm={8} md={5} component={Paper} elevation={10} square>
        <div className={classes.paper}>
          <form className={classes.form} noValidate>
            <TextField
              style={{ marginBottom: "60px" }}
              margin="normal"
              required
              fullWidth
              autoComplete="email"
              autoFocus
              onChange={e => setEmail(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment>
                    <IconButton>
                      <EmailIcon />
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
            <TextField
              margin="normal"
              required
              onChange={e => setPassword(e.target.value)}
              fullWidth
              autoComplete="current-password"
              InputProps={{
                startAdornment: (
                  <InputAdornment>
                    <IconButton>
                      <LockIcon />
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
            <Button
              type="submit"
              onClick={loginHandle}
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              style={{ color: "black", backgroundColor: "#ffbf00" }}
            >
              Login In
            </Button>
            <Grid container spacing={4}>
              <Grid justify="center" container item xs={12} md={12} lg={12}>
                <span>Forget Password? Reset Now</span>
              </Grid>
              <Grid justify="center" container item xs={12} md={12} lg={12}>
                <span>No account? Create account</span>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}