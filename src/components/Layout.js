import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ children }) {
  // children means any component under Component Layout is special property
  return (
    <>
      <Navbar />
      <div className="background-hero-page"></div>
      {children}
      <Footer />
    </>
  );
}

export default Layout;
