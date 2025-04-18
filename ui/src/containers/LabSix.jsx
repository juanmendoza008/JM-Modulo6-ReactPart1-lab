// NOTE AC
// 1: Products should have products with names, prices and descriptions.
// 2: Write two components, one for displaying products and one for showing the shopping basket. In your component Folder.
// 3: Products component, add a button which can add the selected product to the shopping basket.
// 4: ShoppingBasket.jsx a seperate component to the rest of Products.jsx.
// 5: ShoppingBasket.jsx should have a function to tally the total of the selected products in the shopping basket.

import { Typography, Box, Paper } from "@mui/material";
import React from "react";
import ProductsTymothy from "../components/ProductsTymothy";
import Products from "../components/Products";
import { useState } from "react";

export const productList = [
  {
    id: 1,
    price: 3.95,
    icecream: "Chocolate",
    image:
      "https://www.scoopclub.com.au/wp-content/uploads/2019/12/Chocolate-Ice-Cream-Recipe-500x500.jpg",
  },
  {
    id: 2,
    price: 3.95,
    icecream: "Mint",
    image:
      "https://gimmethatflavor.com/wp-content/uploads/2022/07/Mint-Chocolate-Chip-Ice-Cream-Square-2-300x300.jpg",
  },
  {
    id: 3,
    price: 3.95,
    icecream: "Bubblegum",
    image: "https://lakesicecream.com/wp-content/uploads/Bubblegum.jpg",
  },
  {
    id: 4,
    price: 3.95,
    icecream: "Rum Raisin",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNTrIZsmVwckb6eQ7L27S5qq0oHSCz2sNC6w&s",
  },
  {
    id: 5,
    price: 3.95,
    icecream: "Strawberry",
    image:
      "https://www.alattefood.com/wp-content/uploads/2015/05/Homemade-Strawberry-Ice-Cream-Recipe-37-500x500.jpg",
  },
  {
    id: 6,
    price: 3.95,
    icecream: "Vanilla",
    image:
      "https://laurenslatest.com/wp-content/uploads/2020/08/vanilla-ice-cream-5-copy-500x375.jpg",
  },
];

const LabSix = () => {
  //Var
  const [products] = useState(productList);
  const [shoppingList, setShoppingList] = useState([]);

  //Functions
  const addToShoppingCart = (productId) => {
    if (productId) {
      const foundProduct = products.find((product) => product.id === productId);
      let qty = 1;

      // if (foundProduct) {
      //   setShoppingList((prev) => [...prev, foundProduct]);
      // }

      if (foundProduct) {
        if (shoppingList.some((item) => item.id === foundProduct.id)) {
          console.log("Already in the shopping List");
          qty = qty + 1;
        } else {
          setShoppingList((prev) => [...prev, foundProduct]);
        }
      }
    }
  };

  const calculateTotal = () => {
    return shoppingList
      .reduce((total, product) => total + product.price, 0)
      .toFixed(2);
  };

  //Return
  return (
    <Box>
      <Typography variant="h4">Lab Six </Typography>
      <Box display={"flex"} flexDirection={"row"} gap={2}>
        {/* List of Products */}
        <Paper sx={{ flex: 2 }}>
          <Typography>List of Products </Typography>
          <Products products={products} purchaseCallBack={addToShoppingCart} />
        </Paper>

        {/* Shopping List */}
        <Paper sx={{ flex: 2 }}>
          <Typography>Shopping Cart </Typography>
          <Products products={shoppingList} />
          <Typography>Total: ${calculateTotal()}</Typography>
        </Paper>
      </Box>
    </Box>
  );
};

export default LabSix;
