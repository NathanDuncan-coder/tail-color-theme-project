"use client";
import React, { useState } from 'react';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../tailwind.config.js';
import ColorSwatch from './ColorSwatch';


const fullConfig = resolveConfig(tailwindConfig);




const SavedColorButton = ({ palette, darkMode }) => {
  const [savedColorSections, setSavedColorSections] = useState([]);
  const [showSavedColors, setShowSavedColors] = useState(false);
  const handleSaveColorSection = () => {

    const newColorSection = palette.slice(); 
    setSavedColorSections([...savedColorSections, newColorSection]);
  };
  const handleToggleSavedColors = () => {
    setShowSavedColors(!showSavedColors);
  };

  return (
    <div className="relative">
      <button
        type="button"
        className={`w-40 p-4 ${darkMode ? 'bg-gray-100 text-black' : 'bg-gray-800 text-white'} 
                   rounded-xl shadow-lg  text-xl font-bold mb-4  ${darkMode ? 'hover:bg-gray-200' : 'hover:bg-gray-800'} 
                  focus:outline-none focus:ring-4  ${darkMode ? 'focus:ring-gray-300' : 'focus:ring-blue-300'} 
                  px-5 py-2.5 text-center me-2`}
        onClick={handleToggleSavedColors}
      >
        Saved colors: {savedColorSections.length}
      </button>
      {showSavedColors && (
        <div
          id="saved-colors-dropdown"
          className="absolute top-full left-0 bg-white shadow-lg p-4 max-w-md"
        >
          {savedColorSections.map((colorSection, sectionIndex) => (
            <div key={sectionIndex} className="mb-4">
              <h4 className="text-lg font-bold mb-2">Color Palette {sectionIndex + 1}</h4>
              <ul>
                {colorSection.map((color, colorIndex) => (
                  <li key={colorIndex} className="text-sm">
                    <span className="text-gray-600">{color.colorName}</span> {color.shade}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <button
            type="button"
            className={`w-full p-2 ${darkMode ? 'bg-gray-100 text-black' : 'bg-gray-800 text-white'} 
                       rounded-lg shadow-lg  text-lg font-bold mb-4  ${darkMode ? 'hover:bg-gray-200' : 'hover:bg-gray-800'} 
                      focus:outline-none focus:ring-4  ${darkMode ? 'focus:ring-gray-300' : 'focus:ring-blue-300'} 
                      px-5 py-2.5 text-center`}
            onClick={handleSaveColorSection}
          >
            Save Current Palette
          </button>
        </div>
      )}
    </div>
  );
};


const TailwindColorDisplay = ({ darkMode, handleToggleDarkMode, handleSaveColorSection }) => {
  const colors = fullConfig.theme.extend?.colors || fullConfig.theme.colors;
  const [palette, setPalette] = useState([]);
  const [savedColorSections, setSavedColorSections] = useState([]);

  const newColorSection = palette.slice(); 
  setSavedColorSections([...savedColorSections, newColorSection]);

  const handleSaveColor = (colorName, shade, hexCode) => {
    const newColor = { colorName, shade, hexCode };
    setPalette([...palette, newColor]);
  };

  const renderColorSwatches = () => {
    return Object.entries(colors).map(([colorName, shades]) => {
      if (typeof shades === 'string') {
        return (
          <div key={colorName} className="w-1/4 p-2">
            <ColorSwatch 
              key={colorName}
              colorName={colorName}
              shade=""
              hexCode={shades}
              darkMode={darkMode}
              onSave={() => handleSaveColor(colorName, "", shades)}
            />
          </div>
        );
      }
  
      return Object.entries(shades).map(([shade, hexCode]) => (
        <div key={`${colorName}-${shade}`} className="w-1/4 p-2">
          <ColorSwatch 
            key={`${colorName}-${shade}`}
            colorName={colorName}
            shade={shade}
            hexCode={hexCode}
            darkMode={darkMode}
            onSave={() => handleSaveColor(colorName, shade, hexCode)}
          />
        </div>
      ));
    });
  };

  return (
    <div className={`p-8 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <div className="flex flex-col items-center gap-10">
              
            <button
                  onClick={handleToggleDarkMode}
                  className={`mb-4 px-4 py-2 rounded-lg border transition-colors duration-300 ease-in-out ${
                    darkMode
                      ? 'bg-white text-black border-gray-600 hover:bg-gray-200 hover:border-gray-700 active:bg-gray-300'
                      : 'bg-black text-white border-black hover:bg-gray-800 hover:border-gray-900 active:bg-gray-900'
                  }`}
                >
                  Toggle Dark Mode
          </button>

          <div className="flex flex-wrap justify-center max-w-md">
              {renderColorSwatches()}
          </div>


        {/* Ths is for second button at bottom */}

        <div className={`p-8 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>

        <button
            type="button"
            className={`w-40 p-4 ${darkMode ? 'bg-gray-100 text-black' : 'bg-gray-800 text-white'} 
              rounded-xl shadow-lg  text-xl font-bold mb-4  ${darkMode ? 'hover:bg-gray-200' : 'hover:bg-gray-800'} 
              focus:outline-none focus:ring-4  ${darkMode ? 'focus:ring-gray-300' : 'focus:ring-blue-300'} 
              px-5 py-2.5 text-center me-2`}
            onClick={handleSaveColorSection}
      >

  Saved colors: {savedColorSections.length}
  <div id="palette" className="flex flex-wrap justify-center gap-4 max-w-md">
    {savedColorSections.map((colorSection, sectionIndex) => (
      <div key={sectionIndex} className="flex flex-wrap justify-center gap-4 max-w-md">
        {colorSection.map((color, colorIndex) => (
          <div key={colorIndex} className="color-box w-1/4 p-2" style={{ backgroundColor: color.hexCode }}>
            <span className="text-white text-xs">{color.colorName} {color.shade}</span>
          </div>
        ))}
      </div>
    ))}
  </div>
</button>

    </div>
  
      </div>
    </div>
  );
   
};

export default TailwindColorDisplay;
