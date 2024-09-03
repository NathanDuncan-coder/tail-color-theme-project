import React from 'react';

const ColorSwatch = ({ colorName, shade, hexCode, darkMode }) => {
  return (
    <div>
      <div
        className='w-12 h-12 rounded-full'
        style={{ backgroundColor: hexCode}}
      ></div>
      <p className={`mt-2 text-xs ${darkMode ? 'text-white' : 'text-black'}`}>
        {colorName} {shade}
      </p>
    </div>
  );
};

export default ColorSwatch;
