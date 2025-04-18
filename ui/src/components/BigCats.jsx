import React from "react";
import { Box, Typography } from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';



const BigCats = ({data}) => {
    // Variables
    
    //Function 
    const createTheList = () => {
        if(!data) {
            return <Typography>Not data found</Typography>
        }

        return (
            <List>
                {data?.map((cat) => (
                    <SingularCat
                        key={cat.latinName}
                        name={cat.name}
                        latinName={cat.latinName}
                        imagSource={cat.imagSource}
                    />
                ))}
            </List>
        );
    }

    const SingularCat = ({ name, latinName, imagSource }) => {
        return (
            <ListItem>
                <ListItemAvatar>
                    <Avatar alt={name} src={imagSource} />
                </ListItemAvatar>
                <ListItemText primary={name} secondary={latinName} />
            </ListItem>
        );
    }
    //Return
    return (
        <Box>
            <Typography variant="h5">Big Cats</Typography>
            {createTheList()}
        </Box>
    );
}

export default BigCats;


