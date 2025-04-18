import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';


const CustomCard = ({imgSource,bodyText}) => {
    // Variables/State
    const cardHeight = imgSource ? undefined : "180px";
    const cardWidth = 345


    // Function 
    const cardImageHandler = () => {
        if (imgSource) {
            return imgSource && (
                <CardMedia
                component="img"
                height="140"
                image={imgSource}
                alt="green iguana"
                />  
            )  
        }
    }
  
    //Return 
    return (
    <Card sx={{ width: cardWidth , height : cardHeight , marginX:"auto" }}>
      <CardActionArea>
        {cardImageHandler()}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {bodyText}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CustomCard;