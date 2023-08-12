import "./langing.css";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <>
      <div className="landing">
        <div className="text-container">
          <p className="landing-text">Hello Hoomans!</p>
          <p className="sub-text">
            Welcome to the Pet Adoption App.
            <br />
            Adopt them and take home a friend for life.
          </p>
          <Link to="/search" className="search-link">
            <button className="search-btn">Find Here</button>
          </Link>
        </div>

        <img className="animal-img" src=" ./Landing/animal.jpeg" alt="animal" />
      </div>
    </>
  );
};

export default Landing;
