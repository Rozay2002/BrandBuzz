const About = () => {
    return ( 
        <section className="about" id="about">
        <div className="aboutcss">
            <div className="mainText4">
                <h2>Our <span>Agency</span></h2>
                <p>We believe in the power of data. Our<br/> analytics-driven approach allows us to make<br/>
                    informed<br/> Decisions and optimize your marketing<br/> efforts for maximum ROI, let's turn your<br/>
                    data into actionable insights. Tailored<br/>
                    Solutions for Your Business
                </p>
                <button>Read more</button>
            </div>
            <div className="image1">
                <img src={require("./Images/1.JPG")} alt=""/>
            </div>
        </div>
            <div className="secondText">
                <h2>What <span>Clients</span> Say!</h2>
                <p>See How Our Digital Marketing Agency Helped <br/> <span>Clients Achieve Their Goals</span></p>
            </div>
            <div className="card2">
                <div className="cad1">
                    <img src={require("./Images/21.JPG")} alt=""/>
                    <h5>Robert Rozay</h5>
                    <h6>Accra, Ghana</h6>
                    <p>Lorem ipsum dolor, sit amet consectetur Beatae, <br/>
                        doloremque ex deleniti magni Beatae<br/>
                         doloremque ex deleniti magni
                    </p>
                    <div className="star1">
                        <img src={require("./Images/20.jpeg")} alt=""/>
                    </div>
                </div>
                <div className="cad2">
                    <img src={require("./Images/22.jpg")} alt=""/>
                        <h5>Ricky Rozay</h5>
                        <h6>Kumasi, Ghana</h6>
                         <p>Lorem ipsum dolor, sit amet consectetur Beatae, <br/>
                             doloremque ex deleniti magni Beatae<br/>
                            doloremque ex deleniti magni
                         </p>
                    <div className="star2">
                        <img src={require("./Images/20.jpeg")} alt=""/>
                    </div>
                </div>
                <div className="cad3">
                 <img src={require("./Images/23.jpg")} alt=""/>
                    <h5>Morgan Rozay</h5>
                    <h6>Tamale, Ghana</h6>
                    <p>Lorem ipsum dolor, sit amet consectetur Beatae, <br/>
                        doloremque ex deleniti magni Beatae<br/>
                         doloremque ex deleniti magni
                    </p>
                    <div className="star3">
                        <img src={require("./Images/20.jpeg")} alt=""/>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default About;