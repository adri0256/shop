import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Items } from '@/types';
import { Box, TextField } from '@mui/material';

const ShopCard = (props: Items) => {
  const [quantity, setQuantity] = React.useState(props.quantity);

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

  const handleCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log("Card Clicked");
    console.log(e.currentTarget.parentElement!.id);
  };

  return (
    <Card id={props.id+""} sx={{ maxWidth: 345, minWidth: 345 }}>
      <CardMedia
        sx={{ height: 240 }}
        image={props.img}
        title={props.title}
        onClick={handleCardClick}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {props.title}
        </Typography>
        <Typography gutterBottom component="div">
            {props.desc}
        </Typography>
        <Typography color="text.primary">
            Price: {props.price} {props.currency}
        </Typography>
      </CardContent>
      <CardActions>
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
        <Button size="small">Add to Cart</Button>
      </CardActions>
    </Card>
  );
}

export default ShopCard;