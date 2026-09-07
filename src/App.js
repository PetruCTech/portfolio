import React from "react";

import { About, Footer, Header, Skills, Testimonial, Work } from "./container";
import { Navbar, SocialMedia } from "./components";
import "./App.scss";

// App
const App = () => {
  return (
    <div className="app">
      <Navbar />
      <SocialMedia />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default App;
