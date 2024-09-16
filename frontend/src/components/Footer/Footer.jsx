import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="Akasa Air Logo" />
          <p>SNV Aviation Private Limited (d/b/a Akasa Air), is an Indian low-cost airline headquartered in Mumbai, Maharashtra, India. It was founded by Vinay Dube and Aditya Ghosh with investor Rakesh Jhunjhunwala holding a 46% stake in the airline.

          The airline began commercial operation with its first flight service from Mumbai to Ahmedabad on 7 August 2022, after receiving its first Boeing 737 MAX 8 aircraft. The CEO of the airline, Vinay Dube, stated that the airline will have a fleet size of approximately 72 aircraft within 5 years. He stated that the airline will initially have services from metro cities to tier-2 and tier-3 cities, as well as operating flights to major cities across India. The airline currently has 25 aircraft flying to 27 destinations, with an order for additional 202 aircraft.</p>
          
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="Facebook" />
            <img src={assets.twitter_icon} alt="Twitter" />
            <img src={assets.linkedin_icon} alt="LinkedIn" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91-1122334455</li>
            <li>akasaairfood@example.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © AkasaAir.com - All Rights Reserved.</p>
    </div>
  );
}

export default Footer;
