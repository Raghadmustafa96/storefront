import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar,Toolbar,Typography} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  appBar: {
    top: 'auto',
    bottom: 0,
    height:'40px',
    background: "#eeeeee",

  },
  title: {
    flexGrow: 1,
    color: 'black',
    fontSize: "1em",
    textAlign:"center"
  },
  
}));

function Footer() {
  const classes = useStyles();
  return (
    <AppBar position="fixed" color="primary" className={classes.appBar}>
      <Toolbar>
      <Typography variant="h6" className={classes.title}>
      ©  Code Fellows 2021
    <br/>
    </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Footer;