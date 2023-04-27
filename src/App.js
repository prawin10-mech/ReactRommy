import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/UI/Nav";
import OurServices from "./pages/OurServices";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import PostProperty from "./pages/postProperty";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainBgImg from "./assets/mainBackground.jpg";
import AllRooms from "./components/rooms/AllRooms";

function App() {
  return (
    <Router>
      <div
        className="bg-cover bg-no-repeat bg-center w-full h-screen"
        style={{
          backgroundImage: `url(${MainBgImg})`,
        }}
      >
        {/* <Header /> */}
        <Nav />
        <Routes>
          <Route path="/" element={<OurServices />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/postProperty" element={<PostProperty />} />
          <Route path="/allAvailableRooms" element={<AllRooms />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
