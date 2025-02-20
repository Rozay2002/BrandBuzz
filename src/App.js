//import './App.css';
import './index.css';
import Navbar from './Navbar';
import Home from "./Home";
import Services from './Services';
import Blog from './Blog';
import About from './About';
import Contact from './Contact';


function App() {


  return <div className="App">
    <Navbar />
    <div className="content">
    <Home />
    <Services />
    <Blog />
    <About />
    <Contact />
    </div>
  </div>   
  
}

export default App;
