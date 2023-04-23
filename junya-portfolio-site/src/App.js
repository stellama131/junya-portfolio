import { Routes, Route, Link } from "react-router-dom"
import './App.css';
import Navbar from "./pages/navbar";
import Footer from "./pages/footer";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="content">
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/about" element={<About></About>} />
          <Route path="/contact" element={<Contact></Contact>} />
        </Routes>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default App;
