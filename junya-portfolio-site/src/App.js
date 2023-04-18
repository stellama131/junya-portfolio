import {Routes, Route, Link} from "react-router-dom"
import './App.css';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';


function App() {
  return (
    <div className="App">
      <div className="banner">
        <h1>Logo here</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<Home></Home>}/>
        <Route path="/about" element={<About></About>}/>
        <Route path="/contact" element={<Contact></Contact>}/>
      </Routes>
    </div>
  );
}

export default App;
