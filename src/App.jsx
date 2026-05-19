import { useCallback, useRef, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Services from "./pages/Services";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Carrers from "./pages/Home";
import ContactUs from "./pages/Home";
import Home from "./pages/Home";

function App() {
  const [isDarkmode, setisDarkmode] = useState(false);
  const formRef = useRef(null);
  const setDarkModeState = useCallback(() => {
    setisDarkmode(!isDarkmode);
  });
  return (
    <>
      <div className={`${isDarkmode ? "bg-gray-900" : "bg-white"}`}>
        <Header
          setDarkModeState={setDarkModeState}
          formRef={formRef}
          isDarkmode={isDarkmode}
        />
        <div className="my-5 overflow-hidden">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/career" element={<Carrers />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </div>
        <Footer formRef={formRef} />
      </div>
    </>
  );
}

export default App;
