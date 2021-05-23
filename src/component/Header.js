import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import {Toolbar,Typography, Button } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  button:
  {
    color: 'black',
    fontSize: "1em",
  },

  title: {
    flexGrow: 1,
    color: 'black',
    fontSize: "2em",
  },

  navBar:
  {
    background: '#586a89',
  },
})
);

function Header() {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.navBar}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
        Our Store
    </Typography>
        <Button  className={classes.button} color="inherit" >Cart (0)</Button>
      </Toolbar>
    </AppBar>
  )
}

export default Header;
