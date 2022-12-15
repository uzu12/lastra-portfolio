import './Nav.css';
import { BsFacebook } from "react-icons/bs";
import { Link } from 'react-scroll';

function Nav() {
  return (
    <div className="Nav">
      <Link to="home">
        <li>Home</li>
      </Link>
      <Link to="about">
        <li>About</li>
      </Link>
      <Link to="educ">
        <li>Education</li>
      </Link>
      <Link to="cert">
        <li>Certificates</li>
      </Link>
      <a href="https://www.facebook.com/trellyetsace.lastra">
        <BsFacebook size={25} className="icons"/>
      </a>
    </div>
  );
}

export default Nav;