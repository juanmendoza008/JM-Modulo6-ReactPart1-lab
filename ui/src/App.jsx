import Labs from "./containers/Labs";
import { Container } from "@mui/material";
import "./App.css";

function App() {
  // VARIABLES/STATE

  // FUNCTIONS/SIDE EFFECT

  // RETURN OF OUR VISUAL STUFF
  return (
    <Container
      sx={{
        display: "flex",
        height: "90vh",
      }}
    >
      <Labs />
    </Container>
  );
}

export default App;
