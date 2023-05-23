import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Items } from '@/types';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

const ShopCard = (props: Items) => {
  const [quantity, setQuantity] = useState(props.quantity);

  const handleOnQuantityChange = (e: { target: { value: string | number; }; }) => {
    if(+e.target.value < 1) setQuantity(1);
    if(+e.target.value > 99) setQuantity(99);
    if(isNaN(+e.target.value)) setQuantity(1);
    if(+e.target.value >= 1 && +e.target.value <= 99) setQuantity(+e.target.value);
  };

  const handleIncrement = () => {
    if(quantity < 99) setQuantity(quantity + 1);
    if(quantity > 99) setQuantity(99);
  };

  const handleDecrement = () => {
    if(quantity > 1) setQuantity(quantity - 1);
    if(quantity < 1) setQuantity(1);
  };

  const handleCardClick = () => {
    console.log("Card Clicked");
    console.log("id: " + props.id);

    route('details/', props.id); 
  };
  
  const handleAddToCart = () => {
    console.log("Add to Cart Clicked");
    console.log("id: " + props.id);
    console.log("quantity: " + quantity);
  };

  return (
    <Card id={props.id+""} sx={{ maxWidth: 345, minWidth: 345 }}>
      <CardMedia
        sx={{ height: 240, cursor: 'pointer' }}
        image={props.image}
        title={props.name}
        onClick={handleCardClick}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {props.name}
        </Typography>
        <Typography gutterBottom component="div">
            {props.description}
        </Typography>
        <Typography color="text.primary">
            Price: {props.price} {props.currency}
        </Typography>
      </CardContent>
      <CardActions>
        <Box sx={{ display: 'flex' }}>
          <Box sx={{ flexGrow: 1 }}>
            <Button size="small" onClick={handleDecrement}>-</Button>
            <TextField
              id="quantity"
              type="text"
              value={quantity}
              onChange={handleOnQuantityChange}
              variant="standard"
              sx={{ width: 30, textAlign: 'center', '& input': { textAlign: 'center' } }}
              autoComplete='off'
            />
            <Button size="small" onClick={handleIncrement}>+</Button>
          </Box>
          <Box>
            <Button size="small" onClick={handleCardClick}>Details</Button>
            <Button size="small" onClick={handleAddToCart}>Add to Cart</Button>
          </Box>
        </Box>
      </CardActions>
    </Card>
  );
}

export default ShopCard;