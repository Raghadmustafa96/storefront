import React, { useEffect } from 'react';
import { Typography, Grid, Card, CardHeader, CardContent, CardActions, IconButton, Button, CardMedia, Paper, Tabs, Tab } from '@material-ui/core';
import { connect } from 'react-redux';
import { inactive, active } from '../store/categories';
import { getProducts } from '../store/products';
import { If, Else, Then } from 'react-if';
import { addToCart } from '../store/cart.js';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { loadProducts } from '../store/products.js';

//....................................................................
const AntTabs = withStyles({
  root: {
    borderBottom: '1px solid #e8e8e8',
  },
  indicator: {
    backgroundColor: '#1890ff',
  },
})(Tabs);

const AntTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(4),
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      color: '#40a9ff',
      opacity: 1,
    },
    '&$selected': {
      color: '#1890ff',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&:focus': {
      color: '#40a9ff',
    },
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  padding: {
    padding: theme.spacing(3),
  },
  demo1: {
    backgroundColor: theme.palette.background.paper,
  }
}));

const ProductViewer = (props) => {

  useEffect(() => {
    props.loadProducts();
  }, []);

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

  return (
    <>
      <div className={classes.root}>
        <div className={classes.demo1}>
          <Typography variant="h6" component="h6" style={{ marginLeft: '1rem' }}>Browse our Categories</Typography>
          <AntTabs onChange={handleChange}>
            <AntTab label="electronics" onClick={() => props.active('electronics', 'In Technology whatever can be done will be done')} />
            <AntTab label="food" onClick={() => props.active('food', 'Eat whatever you want, and if someone tries to lecture you about your weight, eat them too!')} />
            <AntTab label="mobile" onClick={() => props.active('mobile', ':}')} />

          </AntTabs>
          <Typography className={classes.padding} />
        </div>
      </div>
      {console.log('props.products', props.products)}
      <h2 style={{ textAlign: "center", fontSize: '3rem' }}>{props.categories.activeCategory}</h2>
      <p style={{ textAlign: "center", marginBottom: "2rem" }}>{props.categories.activeDescription}</p>
      <Grid container justify="center" spacing={4}>
        {props.products.productList.map((product, index) => {
          if (product.category === props.categories.activeCategory) {
            if (product.inStock !== 0) {
              return (
                <Grid item key={index}>
                  <Card style={{ width: '25rem' }}>
                    <CardHeader title={product.name} />
                    <CardContent>
                      <br />
                      <br />
                      <Typography component="inStock">  {product.inStock > 0
                        ? `In stock, ${product.inStock} items` : 'Out of Stock'}</Typography>

                      <br />
                      <Typography component="price"> $ {product.price}</Typography>
                    </CardContent>
                    <CardActions>
                      <IconButton style={{ fontSize: '1.2rem', color: '#586a89' }} onClick={() => props.addToCart(product)} disabled={product.inStock > 0 ? false : true}>Add to cart</IconButton>
                      <IconButton style={{ fontSize: '1.2rem', color: '#586a89' }}>View details</IconButton>
                    </CardActions>
                  </Card>
                </Grid>
              )
            }
          } else {
            return null;
          }
        })}
      </Grid>
    </>
  );
}

const mapStateToProps = (state) => {
  return { products: state.products, categories: state.categories, cart: state.cart }
}

const mapDispatchToProps = {
  active,
  inactive,
  getProducts,
  addToCart,
  loadProducts,
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductViewer);
