import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import IndividualItem from "./Components/IndividualItem";
import GPU from "./Pages/GPU";
import CPU from "./Pages/CPU";
import ScrollBar from "./Components/ScrollBar";
import Extra from "./Pages/Extra";
import HDD from "./Pages/HDD";
import DDRM from "./Pages/DDRM";
import Gabinete from "./Pages/Gabinete";
import Fonte from "./Pages/Fonte";
import Mobo from "./Pages/Mobo";
import { CartProvider } from "./Components/CartContext";
import { QuantidadeProvider } from "./Components/QuantiudadeContext";
import AuxBar from "./Components/AuxiliarBar";
import Ty from "./Pages/Ty";
import ResultMain from "./Components/Searchresult";
import { SearchProvider } from "./Components/SearchContext";

function App() {
  return (
    <CartProvider>
      <QuantidadeProvider>
        <SearchProvider>
          <div>
            <Router>
              <NavBar />
              <ScrollBar />
              <AuxBar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Cart" element={<Cart />} />
                <Route path="/Item/:id" element={<IndividualItem />} />
                <Route path="/GPU" element={<GPU />} />
                <Route path="/CPU" element={<CPU />} />
                <Route path="/Extra" element={<Extra />} />
                <Route path="/HDD" element={<HDD />} />
                <Route path="/DDRM" element={<DDRM />} />
                <Route path="/Gabinete" element={<Gabinete />} />
                <Route path="/Fonte" element={<Fonte />} />
                <Route path="/MOBO" element={<Mobo />} />
                <Route path="/Ty" element={<Ty />} />
                <Route path="/SearchResult" element={<ResultMain />} />
              </Routes>
            </Router>
          </div>
        </SearchProvider>
      </QuantidadeProvider>
    </CartProvider>
  );
}

export default App;
