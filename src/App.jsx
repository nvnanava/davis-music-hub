import { useState } from "react";
import Navbar from "./Components/Navbar";
import { FooterCom } from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <h1 className="text-4xl font-bold text-purple-600">Artist Spotlight!</h1>
      <FooterCom />
      {/* Add more components or content here as needed */}
    </>
  );
}

export default App;
