import Addbox from "./components/addbox/Addbox";
import Topbar from "./components/topbar/Topbar";
import { Dialog } from "@mui/material";
import CustomizedDialogs from "./components/dailog/Dailog";
import Details from "./components/details/Details";
import DetailsBlock from "./components/detailsBlock/DetailsBlock";

function App() {
  return (
    <div className="App">
      <Topbar/>
      <Addbox/>
      <Details/>
    </div>
  );
}

export default App;
