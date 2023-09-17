import "./langing.css";

import { Link } from "react-router-dom";
import { AiOutlineMail } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import PetsIntro from "./PetsIntro";

const Landing = () => {
  return (
    <>
      <div className="landing">
        <nav className="navbar">
          <div>
            <Link to="/">
              <img
                src="/1000_F_194466027_fgKbP1uRjbk6ojXu8xL2SJR5NlKpdhP8-removebg-preview.png"
                alt="logo"
                className="logo"
              />
            </Link>
          </div>
          <div className="nav-links">
            <Link to="/search">Search</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/">SignUp</Link>
          </div>
        </nav>

        <div className="landing-content">
          <div className="landing-text">
            <h2>
              Find your new <br />
              best friend
            </h2>
            <p className="subtext">
              We have a wide variety of pets for you to choose from. <br />
              Click the button below to start your search.
            </p>
            <div className="btn">
              <Link className="landing-button" to="/search">
                Search
              </Link>
            </div>
          </div>

          <img className="landing-image" src="/Component 9.png" alt="landing" />
        </div>
        <div className="pets-display">
          <h2 className="pets-heading">Meet some of our pets</h2>
          <PetsIntro />
        </div>

        <div className="footer">
          <div className="footer-content">
            <div className="footer-section about">
              <h1> About us</h1>
              <br />
              <p>
                We are a pet adoption agency that helps you find your new best
                friend. <br />
                We have a wide variety of pets for you to choose from.
              </p>
            </div>
            <div className="footer-section links">
              <h2>Quick Links</h2>
              <br />
              <ul>
                <Link to="/">
                  <li>Search</li>
                </Link>
                <Link to="/contact">
                  <li>Contact</li>
                </Link>
                <Link to="/">
                  <li>SignUp</li>
                </Link>
              </ul>
            </div>
            <div className="footer-section contact">
              <h2>Contact us</h2>
              <br />
              <ul>
                <li>
                  <BsFillTelephoneFill /> 123-456-789
                </li>
                <li>
                  <AiOutlineMail />
                  adoptme@gmail.com
                </li>
                <li>
                  <BsFacebook />
                  adoptme
                </li>
                <li>
                  <FaInstagram />
                  adoptme
                </li>
                <li>
                  <FaTwitter />
                  adoptme
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            &copy; adoptme.com | Designed by Shrishti
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
