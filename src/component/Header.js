import { makeStyles } from '@material-ui/core/styles';
import { Typography, AppBar, Toolbar ,Button} from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { connect } from 'react-redux';

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

function Header(props) {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.navBar}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}> Our Store </Typography>
        <Button  className={classes.button} color="inherit" ><ShoppingCartIcon/>({props.cart.cart.length})</Button>
      </Toolbar>
    </AppBar>
  )
}

const mapStateToProps = state => {
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps)(Header);
