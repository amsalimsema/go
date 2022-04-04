import { Routes, Route, BrowserRouter } from "react-router-dom";

import "./App.css";
import BottomNav from "./components/BottomNav/BottomNav";
import Navbar from "./components/Navbar/Navbar";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Home } from "./pages/Home";
import Products from "./components/Products/Products";
import Contact from "./components/Contact/Contact";
import Testimonial from "./components/Testimonial/Testimonial";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <Footer />
      <BottomNav />
    </BrowserRouter>
  );
}

export default App;
