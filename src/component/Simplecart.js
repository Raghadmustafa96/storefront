import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import { connect } from 'react-redux';

const SimpleCart = (props) => {
    if (props.cart.cart.length > 0) {
        return (
            <>
                <Card style={{ position:"absolute",left:'1100px', width: '230' }}>
                    <CardContent>
                        {props.cart.cart.map((product, index) => {
                            return (
                                <Typography key={index} className='cart11'>
                                    {product.name} : ({ parseInt(product.Count) - parseInt(product.inventoryCount)})
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