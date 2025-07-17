import { useState } from "react";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <h1 className="text-4xl font-bold text-purple-600">
        Welcome to Davis Artist Directory!🎶
      </h1>
      <div className="p-8 bg-yellow-100 text-center text-lg font-semibold text-gray-900">
        Tailwind is working! 🎉
      </div>
    </>
  );
}

export default App;
