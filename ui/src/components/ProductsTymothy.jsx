import {
  Avatar,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Box,
  Typography,
  Card,
  Chip,
  Stack,
  Divider,
} from "@mui/material";

const ProductsTymothy = ({ data }) => {
  // NOTE VARIABLES/STATE

  // NOTE FUNCTIONS/SIDE EFFECT
  const displayProductList = () => {
    return data.map((item) => (
      <Card key={item.id} variant="outlined" sx={{ maxWidth: 360 }}>
        <Box sx={{ p: 2 }}>
          <Stack
            direction="row"
            sx={{ justifyContent: "space-between", alignItems: "center" }}
          >
            <ListItem
              key={item.id}
              secondaryAction={
                <IconButton edge="end" aria-label="add-products">
                  <svg
                    id={item.name}
                    width={"0.8em"}
                    height={"0.8em"}
                    fill={"#757575"}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" />
                  </svg>
                </IconButton>
              }
            >
              <ListItemAvatar>
                <Avatar src={item.image} />
              </ListItemAvatar>
              <ListItemText
                primary={item.icecream}
                secondary={"$" + item.price}
              />
            </ListItem>
          </Stack>
        </Box>
        <Divider />
        <Box sx={{ p: 2 }}>
          <Typography gutterBottom variant="body2">
            Select type
          </Typography>
          <Stack direction="row" spacing={1}>
            <Chip label="1 Scoop" size="medium" />
            <Chip label="2 Scoops" size="medium" />
            <Chip label="3 Scoops" size="medium" />
          </Stack>
        </Box>
      </Card>
    ));
  };

  // NOTE RETURN OF OUR VISUAL STUFF
  return (
    <Box>
      <Typography variant="h4">Lab 6 Content</Typography>
      <Stack direction="row" sx={{ justifyContent: "space-evenly" }}>
        <Box>
          <Typography>Products</Typography>
          {displayProductList()}
        </Box>
      </Stack>
    </Box>
  );
};

export default ProductsTymothy;
