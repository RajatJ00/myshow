import React, { Suspense, lazy } from "react";
//components
import Navbar from "../components/Navbar/navbar.component";
import LazyLoading from "../components/LazyLoading/LazyLoading.component.js";
import Footer from "../components/Footer/Footer.component.js";
const HeroCarousal = lazy(() => import("../components/HeroCarousal/HeroCarousal.component.js"));

const DefaultLayout = (props) => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<LazyLoading />}>
        <HeroCarousal />
      </Suspense>
      {props.children}
      <Footer />
    </>
  );
};
export default DefaultLayout;