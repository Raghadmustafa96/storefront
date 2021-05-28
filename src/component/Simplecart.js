import React from 'react';
import { connect } from 'react-redux';
import { Card, CardContent, Typography, IconButton, Divider } from '@material-ui/core';
import { removeFromCart } from '../store/cart.js';
import DeleteIcon from '@material-ui/icons/Delete';

const SimpleCart = (props) => {
    if (props.cart.cart.length > 0) {
        return (
            <>
                <Card style={{ position:"absolute",left:'1040px', width: '300px' }}>
                    <CardContent>
                    <Typography component="p">Cart</Typography>
                        {props.cart.cart.map((product, index) => {
                            return (
                                <div style={{marginTop:'20px'}}>
                                  <Typography key={index} className='p11'>
                                    {product.name} ({product.count  - product.inStock})
                                  </Typography>
                                  <IconButton style={{ float:"right", marginTop:"-30px" }}>
                                    <DeleteIcon  onClick={() => props.removeFromCart(product)} />
                                  </IconButton>
                              </div>
                            )
                        })}
                    </CardContent>
                </Card>
            </>
        );
    } else {
        return null;
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = {
    removeFromCart
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(SimpleCart); 
