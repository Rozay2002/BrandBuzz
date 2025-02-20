const Home = () => {
    return ( 
        <header className="top"  id="home">
            <div className="mainText">
                <h1><b>We create <br/><span className="sol">solutions</span> for<br/> your business</b></h1>
                <p>Our team keeps a keen eye on emerging trends.<br/> 
                   and technologies to ensure your marketing<br/>
                   campaings remain cutting edge. 
                </p>
            
                <div className="link2">
                    <a href="#services"> Get Started</a>     
                </div>
                
                <div className="down">
                        <img src={require("./Images/19.jpg")} alt=""/>
                        <h4>< a href="#services">Explore more</a></h4>
                </div>
            </div>
                <div className="topImages">
                        <img src={require("./Images/15.JPG")} alt="" />
                        <img src={require("./Images/13.JPG")} alt="" />
                </div>
        </header>
     );
}
 
export default Home;