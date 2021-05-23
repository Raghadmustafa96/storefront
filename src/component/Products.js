import React from 'react';
import { Typography, Grid, Card, CardHeader, CardContent, CardActions, IconButton, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { inactive, active } from '../store/categories';
import { getProducts } from '../store/products';

const productViewer = (props) => {

  return (
    <>
      <Typography variant="h5" component="h5" style={{marginTop:'2rem' , marginLeft:'2rem'}}>Browse our Categories</Typography>
      <Button style={{ marginLeft:'2rem'}} onClick={() => props.active('Electronics', 'In Technology whatever can be done will be done')}>Electronics</Button>
      <span>|</span>
      <Button onClick={() => props.active('Food', 'Eat whatever you want, and if someone tries to lecture you about your weight, eat them too! :) ..')}> Food</Button>

      <h2 style={{ textAlign: "center" , fontSize:'3rem' }}>{props.categories.activeCategory}</h2>
      <p style={{ textAlign: "center", marginBottom: "2rem" }}>{props.categories.activeDescription}</p>
      <Grid container justify="center" spacing={4}>
        {props.products.products.map((product, index) => {
          return (
            <Grid item key={index}>
              <Card>
                <img src={product.imgUrl} style={{ width: '25rem', height: '20rem' }} />
                <CardHeader title={product.name} />
                <CardContent>
                  <Typography component="price"> $ {product.price}</Typography>
                </CardContent>
                <CardActions>
                  <IconButton style={{ fontSize:'1.2rem' ,color:'#586a89'}} >Add to cart</IconButton>
                  <IconButton style={{ fontSize:'1.2rem' , color:'#586a89'}}>View details</IconButton>
                </CardActions>
              </Card>
            </Grid>
          )
        })}
      </Grid>
    </>
  );
}

const mapStateToProps = (state) => {
  return { products: state.products , categories: state.categories }
} 

const mapDispatchToProps = {
  active,
  inactive,
  getProducts,
}

export default connect(mapStateToProps, mapDispatchToProps)(productViewer);