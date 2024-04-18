import React from 'react';
import './Footer.css'; 
import icon from "./black and white icon.png";
import android from "./android.png";

import facebook from "./facebook.png";


const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-content">
      <img style={{margin:"10px 50px 0px 0px"}} src={icon} height={"100px"} width={"100px"} alt="Cricbuzz Logo" />
        <div className="footer-section">
          <div className="mobile-section">
           
            <h3>MOBILE SITES & APPS</h3>
          </div>
          <ul>
            <li><a href="https://m.cricbuzz.com" target="_blank" rel="noopener noreferrer">cricbuzz.com</a></li>
            <li><a href="https://play.google.com/store/apps/details?id=com.cricbuzz.android" target="_blank" rel="noopener noreferrer">Android</a></li>
            <li><a href="https://apps.apple.com/in/app/cricbuzz-live-cricket-scores/id360466413" target="_blank" rel="noopener noreferrer">iOS</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>FOLLOW US ON</h3>
          <ul>
            <li><a href="https://www.facebook.com/cricbuzz/" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://twitter.com/cricbuzz" target="_blank" rel="noopener noreferrer"> Twitter</a></li>
            <li><a href="https://www.youtube.com/c/cricbuzz/videos" target="_blank" rel="noopener noreferrer">YouTube</a></li>
            <li><a href="https://in.pinterest.com/cricbuzz/" target="_blank" rel="noopener noreferrer">Pinterest</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>COMPANY</h3>
          <ul>
            <li><a href="https://www.cricbuzz.com/careers" target="_blank" rel="noopener noreferrer">Careers</a></li>
            <li><a href="https://www.cricbuzz.com/info/advertise" target="_blank" rel="noopener noreferrer">Advertise</a></li>
            <li><a href="https://www.cricbuzz.com/info/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
            <li><a href="https://www.cricbuzz.com/info/termsofuse" target="_blank" rel="noopener noreferrer">Terms of Use</a></li>
            <li><a href="https://www.cricbuzz.com/product-blog/cricbuzz-mobile-apps-tv-ad-cricket-ka-keeda" target="_blank" rel="noopener noreferrer">Cricbuzz TV Ads</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
