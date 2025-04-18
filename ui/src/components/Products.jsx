import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  IconButton,
} from "@mui/material";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

// {
//   id: 1,
//   price: 3.95,
//   icecream: "Chocolate",
//   image:
//     "https://www.scoopclub.com.au/wp-content/uploads/2019/12/Chocolate-Ice-Cream-Recipe-500x500.jpg",
// },

const Products = ({ products, purchaseCallBack }) => {
  //Function
  const listOfProducts = () => {
    return (
      <List>
        {products.length > 0 ? (
          products.map((product) => (
            <CreateAProduct
              key={product.id}
              id={product.id}
              name={product.icecream}
              cost={product.price}
              image={product.image}
              purchaseCallBack={purchaseCallBack}
            />
          ))
        ) : (
          <Typography>Loading Data...</Typography>
        )}
      </List>
    );
  };

  const CreateAProduct = ({
    id,
    name,
    cost,
    image,
    purchaseCallBack,
    qty = 1,
  }) => {
    const handlePurchase = () => {
      if (purchaseCallBack) {
        purchaseCallBack(id);
      }
    };

    return (
      <ListItem>
        <ListItemAvatar>
          <Avatar alt={name} src={image} />
        </ListItemAvatar>
        <ListItemText primary={name} secondary={`$${cost}`} />
        {purchaseCallBack && (
          <IconButton edge="end" aria-label="add" onClick={handlePurchase}>
            <AddShoppingCartIcon />
          </IconButton>
        )}
        {!purchaseCallBack && <ListItemText secondary={`qty= ${qty}`} />}
      </ListItem>
    );
  };

  //Return
  return <Box>{listOfProducts()}</Box>;
};

export default Products;
