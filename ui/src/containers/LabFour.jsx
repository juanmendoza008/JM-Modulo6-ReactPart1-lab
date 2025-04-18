import { 
  Typography, 
  Box, 
  ToggleButtonGroup, 
  ToggleButton 
} from "@mui/material";
import TextField from '@mui/material/TextField';
import React, { useState } from "react";
import BigCats from "../components/BigCats";

const LabFour = () => {
  const filters = ["Asc","Desc"]
  const [filterType,setFilterType] = useState(filters[0]);
  const [searchText, setSearchText] = useState("");

  const cats = [
    { name: 'Cheetah', latinName: 'Acinonyx jubatus', imagSource:'../src/assets/panther.jpg' },
    { name: 'Jaguar', latinName: 'Panthera onca', imagSource:'../src/assets/panther.jpg' },
    { name: 'Leopard', latinName: 'Panthera pardus', imagSource:'../src/assets/panther.jpg' },
    { name: 'Snow leopard', latinName: 'Panthera uncia', imagSource:'../src/assets/panther.jpg' },
    { name: 'Tiger', latinName: 'Panthera tigris', imagSource:'../src/assets/panther.jpg' }, 
    { name: 'Cougar', latinName: 'Puma concolor', imagSource:'../src/assets/panther.jpg' },
    { name: 'Lion', latinName: 'Panthera leo', imagSource:'../src/assets/panther.jpg' },
  ]

  //Functions 
  // Alphabetic
  // State Filter
  const changeFilter = () => {
    setFilterType((prev) => {
      return prev === filters[0] ? filters[1] : filters[0];
    });
    //console.log(filterType)
  }
  // Data handling 
  const dataHandlingFunction = () => {
    
    // Sorting the data list
    const sortedInASC = cats.sort(function (a, b) {
      var textA = a.name.toUpperCase();
      var textB = b.name.toUpperCase();
      return textA > textB ? -1 : textA > textB ? 1 : 0;
    })
    .filter((cat) => {
      if (searchText && searchText.length >= 3){
        return cat.name.toLocaleUpperCase().includes(searchText.toLocaleUpperCase())
      }
      return true;
    })
    ;
    if (filterType === filters[0]) {
      return sortedInASC;
    }
    if (filterType === filters[1]) {
      return sortedInASC.reverse();
    }

    if(searchText) {
      sortedCats.filter((item) => {
        if (searchText && searchText.length >=3) {
          return item.name.toLocaleLowerCase.includes(searchText.toLocaleLowerCase())
        }
      }
    )}
    return sortedCats;
  }
  // Text Filter 
  const searchFieldHandler = (e) => {
    //console.log("e",e.target.value)
    setSearchText(e.target.value);
  }

  return (

    <Box>
      <Typography variant="h4">Lab Four Content</Typography>
      <Box my={2}>
        <TextField label="Search" variant="standard" onChange={searchFieldHandler} />
        <ToggleButtonGroup
          value={filterType}
          exclusive
          onChange={changeFilter}
          aria-label="update filter type"
        >
          <ToggleButton value={filters[0]} aria-label="left aligned">
            <Typography>ASC</Typography>
          </ToggleButton>

          <ToggleButton value={filters[1]} aria-label="centered">
            <Typography>DESC</Typography>
          </ToggleButton>

        </ToggleButtonGroup>
      </Box>
      <BigCats data={dataHandlingFunction()} />
    </Box>

  );

};

export default LabFour;
