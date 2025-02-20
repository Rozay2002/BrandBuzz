const Contact = () => {
    return ( 
        <section className="contact" id="contact">
        <div className="all">
            <div className="topContact">
                    <h2>Ready to get started?</h2>
                    <button>Contact Us</button>
            </div>
            <div className="con">
                <div className="imgs">
                    <div className="topIt">
                        <img src={require("./Images/18.jpg")} alt=""/>
                        <h4>BrandBuzz</h4>
                    </div>
                    <div className="downIt">
                       <span><img src={require("./Images/24.jpg")} alt=""/></span> 
                       <span><img src={require("./Images/25.jpg")} alt=""/></span>
                       <span><img src={require("./Images/26.jpg")} alt=""/></span>
                    </div>
                </div>
                
                <div className="links2">
                    <h4>Company</h4>
                    <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="/">Career</a></li>
                        <li><a href="/">Team</a></li>
                    </ul>
                </div>
                <div className="links3">
                    <h4>Designs</h4>
                    <ul>
                        <li><a href="/">Design connesis</a></li>
                        <li><a href="/">Hype projects</a></li>
                        <li><a href="/">Find a designer</a></li>
                        <li><a href="/">Discover resolution</a></li>
                        <li><a href="/">Pricing</a></li>
                    </ul>
                </div>
                <div className="links4">
                    <h4>Resources</h4>
                    <ul>
                        <li><a href="/">Become a designer</a></li>
                        <li><a href="/">Blog</a></li>
                        <li><a href="/">Design without creators</a></li>
                        <li><a href="/">Rewards</a></li>
                        <li><a href="/">Affiliates</a></li>
                    </ul>
                </div>
            </div>
            
            <div className="footer">
                All rights reserved || 2024
            </div>
        </div>
            
        </section>
     );
}
 
export default Contact;