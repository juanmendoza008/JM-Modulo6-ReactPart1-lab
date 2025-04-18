import {
  Typography,
  Box,
  Paper,
  List,
  ListItem,
  IconButton,
  ListItemText,
} from "@mui/material";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useState } from "react";

const LabSixSol = () => {
  const productsData = [
    { id: 1, name: "product one", price: 9.99, qty: 12 },
    { id: 2, name: "product two", price: 5.5, qty: 4 },
    { id: 3, name: "product three", price: 2.25, qty: 1 },
  ];
  const [products] = useState(productsData);
  const [shoppingCart, setShoppingCart] = useState([]);

  const addToShoppingCart = (productId) => {
    if (productId) {
      console.log("shopping cart", productId);
      const foundProduct = products.find((product) => product.id === productId);

      if (foundProduct) {
        setShoppingCart((prev) => [...prev, foundProduct]);
      }
    }
  };

  const calculateTotal = () => {
    return shoppingCart
      .reduce((total, item) => total + item.price, 0)
      .toFixed(2);
  };

  return (
    <Box>
      <Typography variant="h4">Lab Six</Typography>

      <Box display={"flex"} flexDirection={"row"} gap={2}>
        <Paper sx={{ flex: 2 }}>
          <Typography>Products</Typography>
          <ListOfProducts
            products={products}
            purchaseCallback={addToShoppingCart}
          />
        </Paper>

        {/* // SHOPPING CART COULD BE ITS OWN COMPONENT WITH ITS OWN STATE */}
        <Paper sx={{ flex: 1 }}>
          <Typography>Shopping Cart</Typography>

          <ListOfProducts products={shoppingCart} />

          <Typography>Total: ${calculateTotal()}</Typography>
        </Paper>
      </Box>
    </Box>
  );
};

// MAKE NEW COMPONENT FILE
const ListOfProducts = ({ products, purchaseCallback }) => {
  return (
    <List>
      {products.length > 0 ? (
        products.map((product) => (
          <SingleItem
            key={product.name}
            id={product.id}
            name={product.name}
            cost={product.price}
            purchaseCallback={purchaseCallback}
          />
        ))
      ) : (
        <Typography>Loading...</Typography>
      )}
    </List>
  );
};

// MAKE NEW COMPONENT FILE
const SingleItem = ({ id, name, cost, purchaseCallback }) => {
  const handlePurchase = () => {
    if (purchaseCallback) {
      console.log("single item, id", id);
      purchaseCallback(id);
    }
  };

  // MAKE NEW COMPONENT FILE
  const addToCardDisplayHandler = () => {
    return purchaseCallback ? (
      <IconButton edge="end" aria-label="add" onClick={handlePurchase}>
        <AddShoppingCartIcon />
      </IconButton>
    ) : (
      <></>
    );
  };

  return (
    <ListItem key={name} secondaryAction={addToCardDisplayHandler()}>
      <ListItemText primary={name} secondary={`$${cost}`} />
    </ListItem>
  );
};

export default LabSixSol;
