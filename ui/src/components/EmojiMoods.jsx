import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useState } from "react";


const EmojiMoods = () => {
    // Var
    // Array of moods
    const moodList = [
        "happy","mad","serious","sad","surprise"
    ];
    const [mood, setMood] = useState(moodList[0]);

    //Function 
    const pickYourMood = () => {
    switch (mood) {
        case moodList[0]:
            return <>😊</>;
        case moodList[1]:
            return <>😡</>;
        case moodList[2]:
            return <>😐</>;
        case moodList[3]:
            return <>😢</>;
        case moodList[4]:
            return <>😲</>;
        default: 
            return <>😊</>;
    }
    }

    const changeMood = () => {
        setMood((prevMood) => randomMood(prevMood));
    }

    const randomMood = (currentMood) => {
        //Make new arrays of moods without the previous
        const moodListWithoutPrev = [...moodList].filter(
            (mood) => mood !== currentMood
        );
        //random the new filtered mood list to find the index
        const moodIndexRandom = Math.floor(Math.random() * moodList.length);
        // new mood, which doesnt use the previosu
        return moodListWithoutPrev[moodIndexRandom]
    }

    //Return
    return (
        <Box> 
            <Typography>
                My emoji is: {pickYourMood()}
            </Typography>
            <Button onClick={changeMood}>Change the Mood</Button>
            
        </Box>
    );
}

export default EmojiMoods;


