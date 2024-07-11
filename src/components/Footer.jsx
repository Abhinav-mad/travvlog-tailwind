import React from 'react'
import logo from '../assets/images/logo.png'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
function Footer() {
  return (
    <section className='contact'>
       <footer className="footer">
       <div className="footer-container">
        <div className="footer-section">
          <div className='flex'>  
          <img src={logo} alt="Travlog Logo" className="footer-logo" />
          <p className='text-xl font-bold ml-1'>Travlog</p>
          </div>
          <p className="footer-description">
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.
          </p>
          <div className="footer-social-icons">
            <a href="#" className="footer-social-link">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="footer-social-link">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="footer-social-link">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
        <div className="footer-section">
          <h3 className="footer-heading">Company</h3>
          <ul className="footer-links">
            <li><a href="#">About</a></li>
            <li><a href="#">Career</a></li>
            <li><a href="#">Mobile</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="footer-heading">Contact</h3>
          <ul className="footer-links">
            <li><a href="#">Why Travlog?</a></li>
            <li><a href="#">Partner with us</a></li>
            <li><a href="#">FAQ's</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="footer-heading">Meet Us</h3>
          <ul className="footer-links">
            <li>+788885556</li>
            <li>travel.com</li>
            <li>205 budapest,New York</li>
            <li>DD426</li>
          </ul>
        </div>
      </div>
      </footer>
          </section>
  )
}

export default Footer