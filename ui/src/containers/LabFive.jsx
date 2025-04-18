import { Typography, Box, Button } from "@mui/material";
import React, { useState } from "react";
import BigCats from "../components/BigCats";
import AddCatForm from "../components/AddCatForm";
import {cats} from "./LabTwo"


const LabFive = () => {
  // Var
  const [data,setData]=useState(cats);

  // Funct
  const updateCatsList = (newObject) => {
    const hasMatch = data.some(
      (obj) =>
        newObject.name === obj.name && newObject.latinName === obj.latinName
    );
    if (!hasMatch) {
      const copyOfCurrentData = [...data];
      copyOfCurrentData.push(newObject);
      setData(copyOfCurrentData);
    }
  };

  // Test Prefix add object
  const TestCatsList = (newObject) => {
    if (newObject?.name && newObject?.latinName) {
      const copyOfCurrentData = [...data];
      copyOfCurrentData.push(newObject);
      console.log("copy", copyOfCurrentData)
      setData(copyOfCurrentData);
    }
  };

  // Return
  return (
    <Box>
      <Typography variant="h4">Lab Five Content</Typography>

      <AddCatForm submitFnc={updateCatsList}/>
      
      <BigCats data={data}> </BigCats>


      {/* // Test Button to Add to the list   */}
      <Button onClick={() => 
        {TestCatsList({name :"ABC" , latinName:"CDE", imagSource:""});
        }}
      >Test add to the list </Button>
    </Box>

  );
};

export default LabFive;
