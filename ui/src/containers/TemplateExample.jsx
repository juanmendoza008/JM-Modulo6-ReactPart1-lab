import { Box } from "@mui/material";
import CustomCard from "../components/Card";


const TemplateExample = () => {
    //VAr 

    //Func 

    // Return
    return (
        <Box>
            Template Example
            <CustomCard 
                imgSource={"https://mui.com/static/images/cards/contemplative-reptile.jpg"}
                bodyText={"This is a Lizard"}
            >Card </CustomCard>

            <CustomCard 
                bodyText={"This is a Lizard"}
            >Card </CustomCard>

        </Box>

    );
};

export default TemplateExample;

