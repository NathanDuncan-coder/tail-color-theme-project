"use client"
import React, { useState } from 'react';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../tailwind.config.js';
import ColorSwatch from './ColorSwatch';

const fullConfig = resolveConfig(tailwindConfig);

const TailwindColorDisplay = ({ darkMode, handleToggleDarkMode }) => {
  // Safely accessing colors from the fullConfig object
  const colors = fullConfig.theme.extend?.colors || fullConfig.theme.colors;

  const renderColorSwatches = () => {
    return Object.entries(colors).map(([colorName, shades]) => {
      if (typeof shades === 'string') {
        return (
          <ColorSwatch 
            key={colorName}
            colorName={colorName}
            shade=""
            hexCode={shades}
            darkMode={darkMode}
          />
        );
      }

      return Object.entries(shades).map(([shade, hexCode]) => (
        <ColorSwatch 
          key={`${colorName}-${shade}`}
          colorName={colorName}
          shade={shade}
          hexCode={hexCode}
          darkMode={darkMode}
        />
      ));
    });
  };

  return (
    <div className={`p-8 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <button
        onClick={handleToggleDarkMode}
        className={`mb-4 px-4 py-2 rounded ${darkMode ? 'bg-white text-black' : 'bg-black text-white'}`}
      >
        Toggle Dark Mode
      </button>
      <div>
        {renderColorSwatches()}
      </div>
    </div>
  );
};

export default TailwindColorDisplay;
