import Content from "./component/Content";
import Footer from "./component/Footer";
import NavBar from "./component/NavBar";
import React from "react";

export default function Home() {
  return (
    <React.Fragment>

        <NavBar />
        <Content />
        <Footer/>

    </React.Fragment>

  )
}
