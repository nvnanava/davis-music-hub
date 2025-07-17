import React from "react"; // Import React library
import "./Navbar.css"; // Import the CSS file for styling
//import {Link} from react-router-dom; // Import Link component from react-router-dom for navigation for later use

const Navbar = () => {
  // Define a functional component named Navbar
  return (
    // Return the JSX for the Navbar component
    <nav className="navbar">
      {" "}
      {/* Main navigation element */}
      <div className="navbar_logo">
        {" "}
        {/* Logo section */}
        <h1 className="navbar_title"> &#127911; Davis Artist Directory</h1>
        {""}
        {/* Title of the directory */}
      </div>
      <ul className="navbar_links">
        <li>
          <a href="#home">Home</a>
        </li>{" "}
        {/* Link to home section */}
        <li>
          <a href="#about">About</a>
        </li>{" "}
        {/* Link to about section */}
        <li>
          <a href="#artists">Artists</a>
        </li>{" "}
        {/* Link to artists section */}
        <li>
          <a href="#contact">Contact</a>
        </li>{" "}
        {/* Link to contact section */}
      </ul>
    </nav>
  );
};

export default Navbar; // Export the Navbar component for use in other files
