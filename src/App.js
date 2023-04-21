import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/UI/Nav";
import OurServices from "./pages/OurServices";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import PostProperty from "./pages/postProperty";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<OurServices />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/postProperty" element={<PostProperty />} />
      </Routes>
    </Router>
  );
}

export default App;
