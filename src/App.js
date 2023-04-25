import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/UI/Nav";
import OurServices from "./pages/OurServices";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import PostProperty from "./pages/postProperty";
import MainBgImg from "./assets/mainBackground.jpg";
import Footer from "./components/Footer";

function App() {
  return (
    <div
      className="bg-cover bg-no-repeat bg-center w-full h-screen"
      style={{
        backgroundImage: `url(${MainBgImg})`,
      }}
    >
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<OurServices />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/postProperty" element={<PostProperty />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
