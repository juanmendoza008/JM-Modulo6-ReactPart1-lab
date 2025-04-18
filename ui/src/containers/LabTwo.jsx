import { Typography, Box, Divider } from "@mui/material";
import React from "react";
import BigCats from "../components/BigCats";


export const cats = [
  { name: 'Cheetah', latinName: 'Acinonyx jubatus', imagSource:'../src/assets/panther.jpg' },
  { name: 'Cougar', latinName: 'Puma concolor', imagSource:'../src/assets/panther.jpg' },
  { name: 'Jaguar', latinName: 'Panthera onca', imagSource:'../src/assets/panther.jpg' },
  { name: 'Leopard', latinName: 'Panthera pardus', imagSource:'../src/assets/panther.jpg' },
  { name: 'Lion', latinName: 'Panthera leo', imagSource:'../src/assets/panther.jpg' },
  { name: 'Snow leopard', latinName: 'Panthera uncia', imagSource:'../src/assets/panther.jpg' },
  { name: 'Tiger', latinName: 'Panthera tigris', imagSource:'../src/assets/panther.jpg' },
]


const LabTwo = () => {
  return (
    <Box>
      <Typography variant="h4">Lab Two Content</Typography>

      <Box>
        <Typography variant="h5">Not data</Typography>
        <BigCats ></BigCats>
      </Box>

      <Divider />
      <Box>
      <Typography variant="h5">With the data</Typography>
      <Typography >Same image...</Typography>
      <BigCats data={cats}></BigCats>
      </Box>

    </Box>
  );
};

export default LabTwo;
