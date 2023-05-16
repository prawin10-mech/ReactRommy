import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Nav from "./components/UI/Nav";
import OurServices from "./pages/OurServices";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import PostProperty from "./pages/postProperty";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainBgImg from "./assets/mainBackground.jpg";
import AllRooms from "./components/rooms/AllRooms";
import SecondPage from "./pages/SecondPage";
<<<<<<< HEAD
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";
import PrivateRoute from "./utils/PrivateRoute";
import MyBookings from "./pages/MyBookings";
import ViewRoom from "./pages/ViewRoom";
=======
import ThirdFile from "./pages/ThirdFile";
import ControlPanel from "./pages/ControlPanel";
>>>>>>> 325db63731aadebc7d74471f48d303a1a268d47e

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<OurServices />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route element={<PrivateRoute />}>
            <Route path="/postProperty" element={<PostProperty />} />
            <Route path="/myBookings" element={<MyBookings />} />
          </Route>

          <Route path="/allAvailableRooms" element={<AllRooms />} />
          <Route path="/rooms/view-room/:id" element={<ViewRoom />} />
          <Route path="/sp" element={<SecondPage />} />
<<<<<<< HEAD
          <Route path="/login" element={<Login />} />
          <Route path="/reset_password" element={<ResetPassword />} />
=======
          <Route path="/third" element={<ThirdFile />} />
          <Route path="/cp" element={<ControlPanel />} />

>>>>>>> 325db63731aadebc7d74471f48d303a1a268d47e
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
