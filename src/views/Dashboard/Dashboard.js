import React, { useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { mainListItems } from '../listItems/listItems';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PersonIcon from '@material-ui/icons/Person';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import { Hidden, SwipeableDrawer } from '@material-ui/core';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed

  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,

  },
  menuButtonHidden: {
    display: 'none',

  },
  title: {
    fontFamily: "Mulish",
    fontWeight: "600",
    // marginRight: "35px",
    marginTop: "7px",
  },
  drawerPaper: {
    position: 'relative',
    background: "#242438",

    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    background: "#242438",

    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 100,
  },
  fixedHeight2: {
    height: 150,
  },
  badge: {
    backgroundColor: "#f4b700",
    color: "black",
  },
  title_bar: {
    flexGrow: 1,
  }
}));

export default function Dashboard() {

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const fixedHeightPaper2 = clsx(classes.paper, classes.fixedHeight2);

  console.log(window.innerWidth)


  const handleResize = (e) => {
    // this.setState({ windowWidth: window.innerWidth });
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize)
  })



  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar elevation={0} style={{ background: "#242438" }} position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <Grid container className={classes.title_bar}>
          <img width="60px" src="https://img.icons8.com/plasticine/100/000000/stethoscope.png"/>
            <Hidden mdDown>
              <Grid item xs={10} md={4} lg={4}>
                <Typography
                  variant="h6"
                  color="inherit"
                  noWrap
                  className={classes.title}>
                  BRONTOPLUS
              </Typography>
              </Grid>
            </Hidden>
            <Grid item xs={2} md={4} lg={4}>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
              >
                <MenuIcon />
              </IconButton>
            </Grid>
          </Grid>

          <Grid container justify="flex-end" >
            <Hidden mdDown>
              <Grid item container xs={1} md={2} lg={2}>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={'English'}
                  style={{ background: "white", borderRadius: "5px", padding: "3px" }}
                >
                  <MenuItem value="English">
                    English
                  </MenuItem>
                  <MenuItem >
                    Hindi
                  </MenuItem>
                </Select>
              </Grid>
            </Hidden>
            <Grid item container xs={4} md={1} lg={1}>
              <IconButton color="inherit" >
                <Badge badgeContent={4} classes={{
                  badge: classes.badge
                }} >
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            </Grid>
            <Grid item container xs={3} md={1} lg={1}
              justify="center"
              alignItems="center"
              style={{
                backgroundColor: "grey",
                borderRadius: "70px",
              }}>
              <PersonOutlineIcon />
            </Grid>

          </Grid>

        </Toolbar>
      </AppBar>
      {windowWidth > 600 ? <Drawer
        anchor="top"
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        style={{ background: "#242438" }}
        open={open}
      >
        <div style={{ background: "#242438" }} className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <List style={{ background: "#222738", color: "white" }}>{mainListItems}</List>
      </Drawer> :
        <SwipeableDrawer
          anchor="top"
          open={open}
          onClose={() => setOpen(false)}
        >
          <div style={{ background: "#242438" }} className={classes.toolbarIcon}>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <List style={{ background: "#222738", color: "white" }}>{mainListItems}</List>
        </SwipeableDrawer>}
      <main style={{ background: "#eeeeee" }} className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={2}>
            <Grid container item xs={12} md={8} lg={8} spacing={2}>
              <Grid item xs={12} md={4} lg={4} >
                <Paper className={fixedHeightPaper}>
                  <Grid direction={'column'}>
                    <Grid item style={{ marginBottom: "10px" }} container justify="center">
                      <PersonIcon color="primary" />
                    </Grid>
                    <Grid item container justify="center" style={{ overflow: "hidden" }}>
                      <Typography
                        style={{
                          fontWeight: "300",
                          fontFamily: "Poppins",
                          overflow: "hidden",
                        }}>Ask a question</Typography>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
              <Grid item xs={12} md={4} lg={4}>
                <Paper className={fixedHeightPaper}>
                  <Grid direction={'column'}>
                    <Grid item style={{ marginBottom: "10px" }} container justify="center">
                      <PersonAddIcon color="primary" />
                    </Grid>
                    <Grid item container justify="center" style={{ overflow: "hidden" }}>
                      <Typography
                        style={{
                          overflow: "hidden",
                          fontSize: "14px",
                          fontWeight: "300",
                          fontFamily: "Poppins"
                        }}>Connect with chatbot</Typography>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
              <Paper className={fixedHeightPaper2} style={{ paddingLeft: "30px", paddingTop: "30px" }}>
                <Grid direction="column" container spacing={2}>
                  <Grid container spacing={1}>
                    <Grid container item xs={2} md={2} lg={2} style={{ marginBottom: "10px" }}>
                      <PersonAddIcon />
                    </Grid>
                    <Grid container item xs={8} md={8} lg={8} >
                      <Typography style={{ fontFamily: "Poppins" }}>Query Asked</Typography>
                    </Grid>
                  </Grid>
                  <Grid container spacing={1} style={{ marginBottom: "10px" }}>
                    <Grid container item xs={2} md={2} lg={2}>
                      <PersonAddIcon />
                    </Grid>
                    <Grid container item xs={8} md={8} lg={8} >
                      <Typography style={{ fontFamily: "Poppins" }}>Medi Calls</Typography>
                    </Grid>
                  </Grid>
                  <Grid container spacing={1}>
                    <Grid container item xs={2} md={2} lg={2}>
                      <PersonAddIcon />
                    </Grid>
                    <Grid container item xs={8} md={8} lg={8} >
                      <Typography style={{ fontFamily: "Poppins" }}>Disease Diagnosis</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
}