import { useState } from "react";
import Navbar from "./Components/Navbar"; // Importing the Navbar component
import { ArtistCarousel } from "./Components/ArtistCarousel"; //Importing the artist carousel component
import { FooterCom } from "./Components/Footer"; //Importing footer componenet
import { sacArtists } from "./Data/artists.json"; // Importing the artist data

function App() {
  return (
    <>
      <Navbar />
      <h1 className="app-title">Artist Spotlight!</h1>
      <ArtistCarousel data={sacArtists} />
      {/* Render the ArtistCarousel component with the artist data */}
      {/* Add more components or content here as needed */}

      <FooterCom />
      {/* Add more components or content here as needed */}
    </>
  );
}

export default App;
