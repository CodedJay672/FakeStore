import React from "react";
import './Footer.css';

const about = ['About Us', 'Our Services', 'Our Team'];
const contact = ['Contact us', 'Facebook', 'Twitter', 'Instagram'];
const user = ['Profile', 'My cart', 'Watchlist'];

export default function Footer() {
  return (
    <div className="footer">
      <div className="links">
        <div className="about">
          {about.map((item, index) => {
            return <div key={index}>{item}</div>
          })}
        </div>
        <div className="contact">
          {contact.map((item, index) => {
            return <div key={index}>{item}</div>
          })}
        </div>
        <div className="user">
          {user.map((item, index) => {
            return <div key={index}>{item}</div>
          })}
        </div>
      </div>
      <div className="copy">
        <p>copyrigth since 2023</p>
      </div>
    </div>
  )
}