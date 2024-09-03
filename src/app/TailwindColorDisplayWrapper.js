// src/app/TailwindColorDisplayWrapper.js
import React, { useState } from 'react';
import TailwindColorDisplay from './TailwindColorDisplay';

const TailwindColorDisplayWrapper = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <TailwindColorDisplay
      darkMode={darkMode}
      handleToggleDarkMode={handleToggleDarkMode}
    />
  );
};

export default TailwindColorDisplayWrapper;