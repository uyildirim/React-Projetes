import "./index.css"
import Home from "./pages/Home";
import {Route, Routes} from "react-router-dom";
import Watchlist from "./pages/Watchlist";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="watchlist" element={<Watchlist/>} />
    </Routes>
  );
}

export default App;