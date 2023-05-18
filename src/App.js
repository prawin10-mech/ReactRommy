import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Nav from "./components/UI/Nav";
import OurServices from "./pages/OurServices";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import PostProperty from "./pages/postProperty";
import Footer from "./components/Footer";
import AllRooms from "./components/rooms/AllRooms";
import SecondPage from "./pages/SecondPage";
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";
import MyBookings from "./pages/MyBookings";
import ViewRoom from "./pages/ViewRoom";
import EditProfile from "./pages/EditProfile";
import PrivateRoute from "./utils/PrivateRoute";

const App = () => {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<OurServices />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route
            path="/postProperty"
            element={<PrivateRoute Component={PostProperty} />}
          />
          <Route
            path="/myBookings"
            element={<PrivateRoute Component={MyBookings} />}
          />
          <Route
            path="/editProfile"
            element={<PrivateRoute Component={EditProfile} />}
          />

          <Route path="/allAvailableRooms" element={<AllRooms />} />
          <Route path="/rooms/view-room/:id" element={<ViewRoom />} />
          <Route path="/sp" element={<SecondPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reset_password" element={<ResetPassword />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
};

export default App;
