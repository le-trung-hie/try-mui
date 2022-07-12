import "./App.css";
import TourCard from "./components/TourCard";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

const App = () => {
  // const [spacing, setSpacing] = useState(2);

  // const changeSpacing = () {

  // }
  return (
    <div className="App">
      <Container>
        <Grid container spacing={5}>
          <TourCard />
          <TourCard />
          <TourCard />
          <TourCard />
        </Grid>
      </Container>
    </div>
  );
};

export default App;
