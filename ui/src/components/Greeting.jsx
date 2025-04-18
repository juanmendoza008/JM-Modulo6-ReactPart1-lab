import React from "react";
import { Box, Typography } from "@mui/material";


const Greeting = ({name}) => {

    //Function 
    const isThereAName = () => {
        return name ? (
            <Typography>{name}</Typography>
        ) : (
            <Typography>World</Typography>
        )
    }
    
    //Return
    return (
        <Box> Hello,{isThereAName()}
        </Box>
    );
}

export default Greeting;


