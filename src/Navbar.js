const Navbar = () => {

    return (
      <nav className="navbar">
        <img src={require("./Images/18.jpg")} alt=""/>
        <h3>BrandBuzz</h3>
        <div className="links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#blog">Blog</a>
          <a href="#about">About us</a>
          <a href="#contact">Contact us</a>
          <a href="/" style={{color: 'white', backgroundColor: '#ff4e00', borderRadius: '5px'}}>Sign Up</a>

          
        </div>
        
      </nav>
        
    );
  }
   
  export default Navbar;
    