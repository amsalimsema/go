//import logo from "./logo.svg";
import "./App.css";
import BottomNav from "./components/BottomNav/BottomNav";
import Navbar from "./components/Navbar/Navbar";

import Header from "./components/Header/Header";
import Instructions from "./components/Instructions/Instructions";
import Contact from "./components/Contact/Contact";
import Products from "./components/Products/Products";
import Testimonial from "./components/Testimonial/Testimonial";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Header />
      <Instructions />
      <Contact />
      <Products />
      <Testimonial />
      <Footer />
      <BottomNav />
    </div>
  );
}

export default App;
