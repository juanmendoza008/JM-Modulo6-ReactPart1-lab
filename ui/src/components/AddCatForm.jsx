import React, { useState } from "react";
import { Box, Button, Typography, } from "@mui/material";
import TextField from '@mui/material/TextField';


const AddCatForm = ({ submitFnc }) => {
    //Variables
    const [name,setName] = useState();
    const [latinName,setLatinName] = useState();
    const [imagSource,setImagSource] = useState();

    //Functions
    // Handler Events  
    const nameHandler = (event) => {
        const value=event.target.value 
        if (value) {
            setName(value);
        }
    }

    const latinNameHandler = (event) => {
        const value=event.target.value 
        if (value) {
            setLatinName(value);
        }
    }

    const ImagSourceHandler = (event) => {
        const value=event.target.value 
        if (value) {
            setImagSource(value);
        }
    }

    const submitHandler = () => {
        // console.log({
        //     name,
        //     latinName,
        //     imagSource,
        // })
        if (submitFnc){
            submitFnc({
            name,
            latinName,
            imagSource: imagSource,
            });
        }   
    }
    
    //Return
    return (
        <Box display={"flex"} flexDirection={"column"} mx={5} gap={1} > 
            <Typography> Add Cat form </Typography>
            
            <TextField
                require = "true" 
                label="Name"
                variant="standard"
                onChange={nameHandler}
                helperText="Required Field"
            />

            <TextField
                require = "true"
                label="LatinName"
                variant="standard"
                onChange={latinNameHandler}
                helperText="Required Field"
            />

            <TextField
                label="ImagSourceName"
                variant="standard"
                onChange={ImagSourceHandler}
            />

            <Button onClick={submitHandler}>Submit</Button>

        </Box>
    );
}

export default AddCatForm;

