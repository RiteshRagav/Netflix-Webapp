import React from "react";
import myLogo from "../assets/logo.png"; // <-- your custom logo

function Welcome() {
  return (
    <div className="welcome flex flex-col items-center justify-center min-h-screen bg-black text-white">
      {/* Your custom logo */}
      <img
        src={myLogo}
        alt="App Logo"
        className="w-40 md:w-56 mb-6"
      />

      {/* Welcome text */}
      <h1 className="text-3xl md:text-5xl font-bold mb-4">
        Welcome to My App
      </h1>
      <p className="text-lg md:text-xl text-gray-300">
        Enjoy unlimited access to your content!
      </p>
    </div>
  );
}

export default Welcome;
