import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Images from '../images/message.png';


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
    margin: theme.spacing(11, 11),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    // width: '100%', // Fix IE 11 issue.
    // marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignInSide() {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={10} square>
        <div className={classes.paper}>
          <form className={classes.form} noValidate>
            <TextField
              margin="normal"
              required
              fullWidth
              autoComplete="email"
              autoFocus

            />
            <div>
            </div>
            <TextField
              margin="normal"
              required
              fullWidth
              autoComplete="current-password"
            // justifyContent="space-between"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              style={{ color: "black", backgroundColor: "#f3b605" }}
            >
              Login In
            </Button>
            <Grid style={{ marginBottom: "25px" }} justify="center" container>
              <Grid container style={{ paddingRight: "5px" }} item xs justify="flex-end">
                <span>
                  Forgot password?
                  </span>
              </Grid>
              <Grid item xs>
                <span>
                  Reset Now
                </span>
              </Grid>

            </Grid>
            <Grid container>
              <Grid container style={{ paddingRight: "5px" }} item xs justify="flex-end">
                <span>
                  {/* // style={{marginLeft:"20px"}}> */}
                  No account?
                </span>
              </Grid>
              <Grid item xs>
                <span>
                  {/* // style={{marginRight:"70px"}}> */}
                  Create an account
                </span>
              </Grid>

            </Grid>
            <Box mt={5}>

            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}