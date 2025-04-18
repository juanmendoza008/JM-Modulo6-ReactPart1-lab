import { Typography, Box } from "@mui/material";
import React from "react";
import Greeting from "../components/Greeting";

const LabOne = () => {
  return (
    <Box>
      <Typography variant="h4">Lab One Content</Typography>
      <Greeting name={"Jhon"}> </Greeting> 
    </Box>

  );
};

export default LabOne;
