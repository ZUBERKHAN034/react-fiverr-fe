import "./Footer.scss";
import React from "react";
import constants from "../../common/constants";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
        <div className="footer-links">
            <h2>Categories</h2>
            <span>Graphics & Design</span>
            <span>Digital Marketing</span>
            <span>Writing & Translation</span>
            <span>Video & Animation</span>
            <span>Music & Audio</span>
            <span>Programming & Tech</span>
            <span>Data</span>
            <span>Business</span>
            <span>Lifestyle</span>
            <span>Photography</span>
            <span>Sitemap</span>
          </div>
          <div className="footer-links">
            <h2>About</h2>
            <span>Press & News</span>
            <span>Partnerships</span>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Intellectual Property Claims</span>
            <span>Investor Relations</span>
            <span>Contact Sales</span>
          </div>
          <div className="footer-links">
            <h2>Support</h2>
            <span>Help & Support</span>
            <span>Trust & Safety</span>
            <span>Selling on Fiverr</span>
            <span>Buying on Fiverr</span>
          </div>
          <div className="footer-links">
            <h2>Community</h2>
            <span>Customer Success Stories</span>
            <span>Community hub</span>
            <span>Forum</span>
            <span>Events</span>
            <span>Blog</span>
            <span>Influencer</span>
            <span>Affiliates</span>
            <span>Podcast</span>
            <span>Invite a Friend</span>
            <span>Become a Seller</span>
            <span>Community Standards</span>
          </div>
          <div className="footer-links">
            <h2>More From Fiverr</h2>
            <span>Fiverr Business</span>
            <span>Fiverr Pro</span>
            <span>Fiverr Logo Maker</span>
            <span>Fiverr Guides</span>
            <span>Get Inspired</span>
            <span>Fiverr Select</span>
            <span>ClearVoice</span>
            <span>Fiverr Workspace</span>
            <span>Learn</span>
            <span>Working Not Working</span>
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <h2>fiverr</h2>
            <span>© Fiverr International Ltd. {year}</span>
          </div>
          <div className="right">
            <div className="social">
              <img src={constants.ENUMS.ASSETS.ICONS.TWITTER} alt="twitter" />
              <img src={constants.ENUMS.ASSETS.ICONS.FACEBOOK} alt="facebook" />
              <img src={constants.ENUMS.ASSETS.ICONS.LINKEDIN} alt="linkedin" />
              <img
                src={constants.ENUMS.ASSETS.ICONS.PINTEREST}
                alt="pinterest"
              />
              <img
                src={constants.ENUMS.ASSETS.ICONS.INSTAGRAM}
                alt="instagram"
              />
            </div>
            <div className="link">
              <img src={constants.ENUMS.ASSETS.ICONS.LANGUAGE} alt="language" />
              <span>English</span>
            </div>
            <div className="link">
              <img src={constants.ENUMS.ASSETS.ICONS.COIN} alt="coin" />
              <span>INR</span>
            </div>
            <img
              src={constants.ENUMS.ASSETS.ICONS.ACCESSIBILITY}
              alt="accessibility"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
