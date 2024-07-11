import "./App.css";
import Navigation from "./components/layout/navigation";
import Footer from "./components/layout/footer";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Pocetna from "./components/pages/pocetna";
import AboutUs from "./components/pages/aboutUs";
import Kategorije from "./components/pages/kategorije";
import JednaKategorija from "./components/pages/jednaKategorija"; //predlozi i ubaci komponentu
import DetaljiKategorije from "./components/pages/detaljiKategorije";

function App() {
  return (
    <BrowserRouter>
      {" "}
      <Navigation />
      <main style={{ minHeight: "100vh" }}>
        <Routes>
          <Route path="/" element={<Pocetna />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="*" element={<p>Not found</p>} />
          <Route path="/kategorije/" element={<Kategorije />} />
          <Route path="/kategorije/:kategorija" element={<JednaKategorija />} />
          <Route path="/pice/:id" element={<DetaljiKategorije />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
