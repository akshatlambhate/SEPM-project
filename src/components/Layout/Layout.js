import React, { Children } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import background from "../background.json";
import dancing from "../dancing.json";
import Lottie from "lottie-react";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="relative">{children}</div>
      {/* <div className=' absolute top-16 left-20 w-72'>
      <Lottie animationData={background} >
      </Lottie>
      </div> */}
      {/* <div className=' absolute top-96  right-0 w-96'>
      <Lottie animationData={dancing} >
      </Lottie>
      </div> */}
      <Footer />
    </div>
  );
};

export default Layout;
