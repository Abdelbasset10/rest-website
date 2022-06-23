import React from "react";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import About from "./components/about/About";
import SpecialMenu from "./components/specialMenu/SpecialMenu";
import Chef from "./components/chef/Chef";
import VideoSection from "./components/videoSection/VideoSection";
import Classement from "./components/classement/Classement";
import Gallery from "./components/gallery/Gallery";
import FindUs from "./components/findUs/FindUs";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <SpecialMenu />
      <Chef />
      <VideoSection />
      <Classement />
      <Gallery />
      <FindUs />
      <Footer />
     
      
      
    </div>
  );
}

export default App;
