import { Outlet } from "react-router-dom";

import Contact from "../components/Contact/Contact";
import Instructions from "../components/Instructions/Instructions";
import Products from "../components/Products/Products";
import Testimonial from "../components/Testimonial/Testimonial";

export const Home = () => {
  return (
    <>
      <Products />
      <Instructions />
      <Contact />
      <Testimonial />
    </>
  );
};
