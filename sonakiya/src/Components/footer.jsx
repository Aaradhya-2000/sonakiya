import { Link } from "react-router-dom";
import logo from "../images/logo.jpeg"
// import logo1 from "../images/logo1.jpeg"
import fb from "../images/SocialLinks/fb.png"
import insta from "../images/SocialLinks/insta.jpg"
import linkdin from "../images/SocialLinks/linkdin.jpeg"
import twitter from "../images/SocialLinks/twitter.jpeg"

const Footer = ()=>{
    return(
        <>
        
        <footer className="footer">
        <div className="footer-cont">
            <div className="footer-row">
                <div className="footer-col">
                    <img src={logo} alt="" />
                    <p>— We feel immense pleasure to introduce <br /> ourselves as SONAKIYA & SON'S (Since, 2021)</p>
                </div>
            
            <div className="footer-col-1">
                <h1>About Us</h1>
                <ul>
                    <li><Link to="#" className="b">About Us</Link></li>
                    <li><Link to="#" className="b">Delivery Information</Link></li>
                    <li><Link to="#" className="b">Privacy Policy</Link></li>
                    <li><Link to="#" className="b">Terms & Conditions</Link></li>
                    <li><Link to="#" className="b">Team</Link></li>

                  
                    
                </ul>
            </div>
            <div className="footer-col-1">
                <h1>Products</h1>
                <ul>
                    <li><Link to="#" className="b">Fall Protection</Link></li>
                    <li><Link to="#" className="b">Fire Protection</Link></li>
                    <li><Link to="#" className="b">Electric Protection</Link></li>
                    <li><Link to="#" className="b">Hand Protection</Link></li>
                    <li><Link to="#" className="b">Head Protection</Link></li>

                  
                    
                </ul>
            </div>
            <div className="footer-col-1">
                <h1>Contact</h1>
                <ul>
                    <li ><Link to="#" className="b">Address : Plot No.-14,Sector-D,Patel Nagar <br />
                    Raisen Road Bhopal-462022(M.P)</Link></li>
                    <li ><Link to="#" className="b">Phone : (+91)9755920636 /(+91)8103953176 </Link></li>
                    <li ><Link to="#" className="b">Email : sonakiya71@gmail.com </Link></li>
                    <li ><Link to="#" className="b">Day : Mon -Sun </Link></li>
                  
                   
                </ul>
            </div>
            <div className="footer-col-1">
               <h1>Social Links</h1>
              <div className="icons">
                <Link className="link" id="fb" to="https://www.facebook.com/people/Sonakiya-Sons/100094459628272/" ><img src={fb} alt="" /></Link>
                <Link className="link" id="insta" to="https://www.instagram.com/sonakiyasons_official/"> <img src={insta} alt="" /></Link>
                <Link className="link" id="twit" to="https://x.com/i/flow/login?redirect_after_login=%2Fsonakiya71"> <img src={twitter} alt="" /></Link>
                <Link className="link" id="linkdin" to="https://www.linkedin.com/company/sonakiya-and-son-s/"> <img src={linkdin} alt="" /></Link>
              
             
              </div>
            </div>
        </div>
        <div className="footer-row-2">
            <p>© 2021 <span> Sonakiya & Sons_official </span> - All right reserved</p>
        </div>
        </div>
       </footer>
        </>
    )
}

export default Footer;