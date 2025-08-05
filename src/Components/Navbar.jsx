import React from "react"; // Import React library
import "./Navbar.css"; // Import the CSS file for styling
//import {Link} from react-router-dom; // Import Link component from react-router-dom for navigation for later use

const Navbar = () => {
  // Define a functional component named Navbar
  return (
    // Return the JSX for the Navbar component
    <nav className="navbar">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=search"
      />
      ; {/* Main navigation element */}
      <div className="navbar_logo">
        {" "}
        {/* Logo section */}
        <h1 className="navbar_title"> Davis Music Hub</h1>
        <span className="navbar_Emoji"> &#127911; </span>
        {/* Title of the directory */}
      </div>
      <ul className="navbar_links">
        <li>
          <a href="#home">Home</a>
        </li>{" "}
        {/* Link to home section */}
        <li>
          <a href="#about">Artists</a>
        </li>{" "}
        {/* Link to about section */}
        <li>
          <a href="#artists">About</a>
        </li>{" "}
        {/* Link to artists section */}
        <li>
          <a href="#contact">Contact</a>
        </li>{" "}
        {/* Link to contact section */}
        <li>
          <a href="#GetFeatured">Get Featured</a>
        </li>{" "}
        {/* Link to Get Featured section */}
        <li>
          <a href="#events">Concerts</a>
        </li>{" "}
        {/* Link to Get Featured section */}
      </ul>
      <div className="navbar_search">
        <input type="text" placeholder="" />
        <span class="material-symbols-outlined">search</span>
      </div>
    </nav>
  );
};

export default Navbar; // Export the Navbar component for use in other files
