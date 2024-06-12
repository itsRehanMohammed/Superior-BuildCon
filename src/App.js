import Home from "./Pages/Home";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Help from "./Pages/Help";
import Footer from "./components/Footer/Footer";
import Gallery from "./Pages/Gallery";
import ContactForm from "./Pages/ContactForm";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/help" element={<Help />} />
          <Route exact path="/gallery" element={<Gallery />} />
          <Route exact path="/contact" element={<ContactForm />} />
        </Routes>
        {/* <LoginModal open={loginOpen} onClose={handleLoginModalClose} /> */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
