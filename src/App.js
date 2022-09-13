import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About, Contact, Error, Home, Menu, Main } from "./pages";
import { BreakFast, Diner, Drink, Desert } from "./pages";
import ScrollToTop from "./pages/ScrollToTop";
import Footer from "../src/components/footer/Footer";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* <div className="App"></div> */}
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="menu" element={<Menu />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
          {/*  */}
          <Route path="bread" element={<BreakFast />} />
          <Route path="diner" element={<Diner />} />
          <Route path="drink" element={<Drink />} />
          <Route path="desert" element={<Desert />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
