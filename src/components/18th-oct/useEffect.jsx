import { useState, useEffect } from 'react';

const WindowSizeComponent = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Event listener for window resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array, runs only once

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6">
          Window Width
        </h1>
        <p className="text-3xl text-indigo-600 font-medium">
          {windowWidth}px
        </p>
      </div>
    </div>
  );
};

export default WindowSizeComponent;
