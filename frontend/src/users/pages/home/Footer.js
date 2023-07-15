import React from 'react'
import './footer.css'
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa6";

export default function Footer() {
  return (
    <div>
        <footer className='footer'>
          <div className='container'>
              <div className="row">
                  <div className="footer-col">
                      <h4>Contact Us</h4>
                      <ul className="non-bullets">
                          <li>+91 xxxxxxxxxx</li>
                          <li>+91 xxxxxxxxxx</li>
                      </ul>
                  </div>
                  <div className="footer-col">
                      <h4>Team Members</h4>
                      <ul className="non-bullets">
                          <li>Vedant Upadhyay</li>
                          <li>Sanidhya Baheti</li>
                          <li>Yash Baghel</li>
                          <li>Siddharth Agrawaal</li>
                      </ul>
                  </div>
                  <div className="footer-col">
                      <h4>Mentors</h4>
                      <ul className="non-bullets">
                          <li>Aryan Yadav</li>
                          <li>Omkar Mangesh Shirgaonkar</li>
                      </ul>
                  </div>
                  <div className="footer-col">
                      <h4>Follow us</h4>
                      <div className="social-links">
                          <a href="#"><i className="fab fa-facebook-f"><FaFacebookF /></i></a>
                          <a href="#"><i className="fab fa-twitter"><FaTwitter /></i></a>
                          <a href="#"><i className="fab fa-instagram"><FaInstagram /></i></a>
                      </div>
                  </div>
              </div>
          </div>
        </footer>
      </div>
  )
}
