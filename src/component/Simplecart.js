import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import { connect } from 'react-redux';

const SimpleCart = (props) => {
    if (props.cart.cart.length > 0) {
        return (
            <>
                <Card style={{ textAlign: 'left', float: 'right', width: '400px' }}>
                    <CardContent>
                        {props.cart.cart.map((product, index) => {
                            return (
                                <Typography key={product.id} className='cart11'>
                                    {product.name} : ${product.price}
                                </Typography>
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

export default connect(mapStateToProps)(SimpleCart);