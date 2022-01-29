import React from 'react';
//layout dos produtos
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton} from '@material-ui/core';
//carrinho
import { AddShoppingCart } from '@material-ui/icons';
//styles
import useStyles from './styles';

const Product = ({product}) => {
    const classes = useStyles();

  return( 
    <Card className={classes.root}>
        <CardMedia className={classes.media} image='' title={product.name}/>
        <CardContent>
            <div className={classes.cardContent}>
                <Typography variant='h5' gutterBottom>
                    {product.name}
                </Typography>
                <Typography vaeiant='h5' gutterBottom>
                    {product.price}
                </Typography>
            </div>
            <Typography vaeiant='h2' color='textSecondary'>{product.description}
                    
            </Typography>
        </CardContent>
        <CardActions disableSpacing className={classes.CardActions}>
            <IconButton Aria-label="Add to Cart">
                <AddShoppingCart />
            </IconButton>
        </CardActions>
    </Card>
  );
}

export default Product;
