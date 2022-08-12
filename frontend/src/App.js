import "./styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./components/Home/Home";
import ServicesApps from "./components/Services/ServicesApps";
import ServicesSystem from "./components/Services/ServicesSystem";
import ServicesConsultant from "./components/Services/ServicesConsultant";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Contact from "./components/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-gradient-to-r from-blue-100 to-blue-400 h-full">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/apps" element={<ServicesApps />} />
          <Route path="/services/system" element={<ServicesSystem />} />
          <Route path="/services/consultant" element={<ServicesConsultant />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
