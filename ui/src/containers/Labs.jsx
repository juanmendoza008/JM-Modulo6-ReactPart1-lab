import { useState } from "react";
import { Box, Paper, Typography, ButtonGroup, Button } from "@mui/material";
import LabOne from "./LabOne";
import TemplateExample from "./TemplateExample";
import LabTwo from "./LabTwo";
import LabThree from "./LabThree";
import LabFive from "./LabFive";
import LabFour from "./LabFour";
import LabSix from "./LabSix";
import LabSixSol from "./LabSixSol";

const Labs = () => {
  const [selectedLab, setSelectedLab] = useState(0);

  const labButtonConfig = [
    { label: "Lab One", callbackFunction: () => setSelectedLab(1) },
    { label: "Lab Two", callbackFunction: () => setSelectedLab(2) },
    { label: "Lab Three", callbackFunction: () => setSelectedLab(3) },
    { label: "Lab Four", callbackFunction: () => setSelectedLab(4) },
    { label: "Lab Five", callbackFunction: () => setSelectedLab(5) },
    { label: "Lab Six", callbackFunction: () => setSelectedLab(6) },
    // { label: "Lab SixSol", callbackFunction: () => setSelectedLab(7) },
  ];

  const labContentHandler = () => {
    switch (selectedLab) {
      case 0:
        return <TemplateExample />;
      case 1:
        return <LabOne />;
      case 2:
        return <LabTwo />;
      case 3:
        return <LabThree />;
      case 4:
        return <LabFour />;
      case 5:
        return <LabFive />;
      case 6:
        return <LabSix />;
      // case 7:
      //   return <LabSixSol />;

      default:
        return <Typography>No matching lab</Typography>;
    }
  };

  return (
    <Box display={"flex"} flexDirection={"column"} justifyContent={"center"}>
      <Box display={"flex"} flexDirection={"row"} justifyContent={"center"}>
        <Typography variant={"h3"}>LABS FOR MODULE 6</Typography>
      </Box>

      <Box display={"flex"} justifyContent={"center"} my={"8px"}>
        <ButtonGroup variant="contained" aria-label="Basic button group">
          {labButtonConfig.map((lab) => (
            <Button onClick={lab.callbackFunction}>{lab.label}</Button>
          ))}
        </ButtonGroup>
      </Box>

      <Box height={"400px"}>
        <Paper
          sx={{ height: "inherit", overflow: "scroll", overflowX: "hidden" }}
        >
          {labContentHandler()}
        </Paper>
      </Box>
    </Box>
  );
};

export default Labs;
