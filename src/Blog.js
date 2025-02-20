const Blog = () => {
    return ( 
        <section className="blog" id="blog">
            <div className="image">
                <img src={require("./Images/6.JPG")} alt=""/>
            </div>
            <div className="mainText3">
                <h2>Simple <span>Solution!</span></h2>
                <p>We understand that no businesses<br/> are alike. That's why we take the<br/> time to understand.</p>
                <div className="listText">
                    <h2>1</h2>
                    <h4>Contact Us</h4>
                    <p>Contact us to boost your undersanding</p>
                    <h2>2</h2>
                    <h4>Consult</h4>
                    <p>Consult us to boost your undersanding</p>
                    <h2>3</h2>
                    <h4>Place order</h4>
                    <p>You can place your order</p>
                    <h2>4</h2>
                    <h4>Payment</h4>
                    <p>Make payment of your ordered item</p>
                </div>
                <div className="buttons">
                    <button className="get">Get Started</button>
                    <button className="read">Read more</button>
                </div>
            </div>
        </section>
     );
}
 
export default Blog;