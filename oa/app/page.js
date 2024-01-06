import Content from "./components/Content";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div>
        <NavBar />
        <Content />
        <Footer/>
      </div>

    </main>

  )
}
