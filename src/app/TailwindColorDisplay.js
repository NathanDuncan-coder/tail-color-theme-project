
import React from 'react';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../tailwind.config.js';

const fullConfig = resolveConfig(tailwindConfig);
console.log(fullConfig);

const colors = fullConfig.theme.colors;
console.log(colors);

const shadeTintMap = {
  '50': ' | Extra Light',
  '100': '| Light',
  '200': '| Lighter',
  '300': '| Medium Light',
  '400': '| Medium',
  '500': '| Medium Dark',
  '600': '| Dark',
  '700': '| Darker',
  '800': '| Darkest',
  '900': '| Extra Dark',
  '950': '| Extra Darkest',
};

  const shadeNames = {
    pink: {
      '50': 'lavender-blush',
      '100': 'mimi-pink',
      '200': 'lavender-pink',
      '300': 'amaranth-pink',
      '400': 'hot-pink',
      '500': 'rose-bonbon',
      '600': 'mexican-pink',
      '700': 'amaranth-purple',
      '800': 'magenta-dye',
      '900': 'murry',
      '950': 'dark-purple',
    },
    gray: {
      '50': 'platinum',
      '100': 'ash-gray',
      '200': 'french-gray',
      '300': 'cool-gray',
      '400': 'cadet-gray',
      '500': 'slate-gray',
      '600': 'paynes-gray',
      '700': 'davys-gray',
      '800': 'onyx',
      '900': 'eerie-black',
      '950': 'night',
    },
    red: {
      '50': 'tea-rose',
      '100': 'misty-rose',
      '200': 'melon',
      '300': 'light-coral',
      '400': 'bittersweet',
      '500': 'imperial-red',
      '600': 'red-(cmyK)',
      '700': 'engineering-orange',
      '800': 'marron',
      '900': 'rosewood',
      '950': 'black-bean',
    },
    orange: {
      '50': 'papaya-whip',
      '100': 'navajo-white',
      '200': 'sunset',
      '300': 'xanthous',
      '400': 'hunyadi-yellow',
      '500': 'gamboge',
      '600': 'dark-goldenrod',
      '700': 'golden-brown',
      '800': 'sepia',
      '900': 'cafe-noir',
      '950': 'bistre',
    },
    green: {
      '50': 'mint-green',
      '100': 'celeste',
      '200': 'aquamarine',
      '300': 'turquoise',
      '400': 'emerald',
      '500': 'mint',
      '600': 'jade',
      '700': 'shamrock-green',
      '800': 'jungle-green',
      '900': 'sea-green',
      '950': 'castleton-green',
    },
    blue: {
      '50': 'alice-blue',
      '100': 'lavender-(web)',
      '200': 'jordy-blue',
      '300': 'ruddy-blue',
      '400': 'cornflower-blue',
      '500': 'azure',
      '600': 'royal-blue-(web-color)',
      '700': 'cobalt-blue',
      '800': 'yale-blue',
      '900': 'ultramarine',
      '950': 'traditional-royal-blue',
    },
    purple: {
      '50': 'pale-purple',
      '100': 'magnolia',
      '200': 'thistle',
      '300': 'mauve',
      '400': 'lavender-(floral)',
      '500': 'amethyst',
      '600': 'electric-purple',
      '700': 'veronica',
      '800': 'french-violet',
      '900': 'grape',
      '950': 'indigo',
    },
    yellow: {
      '50': 'vanilla',
      '100': 'flax',
      '200': 'jasmine',
      '300': 'naples-yellow',
      '400': 'gold',
      '500': 'jonquil',
      '600': 'gold-(metallic)',
      '700': 'dark-goldenrod',
      '800': 'field-drab',
      '900': 'drab-dark-brown',
      '950': 'bistre-brown',
    },
    cyan: {
      '50': 'ice-blue',
      '100': 'electric-blue',
      '200': 'aqua',
      '300': 'cyan-(rgb)',
      '400': 'fluorescent-cyan',
      '500': 'robin-blue-egg',
      '600': 'verdigris',
      '700': 'dark-cyan',
      '800': 'caribbean-current',
      '900': 'midnight-green',
      '950': 'dark-green',
    },
  };

  const ColorSwatch = ({ colorName, shade, hexCode, darkMode }) => {
    const shadeName = shadeNames[colorName] ? shadeNames[colorName][shade] : shade;
    const color = colors[colorName][shade]; 
    const tint = shadeTintMap[shade] || '';
  
    return (
      <div className="flex items-center mb-2">
        <div
          className="w-8 h-8 mr-2 rounded-full shadow-md"
          style={{ backgroundColor: color }} 
        ></div>
        <span className={darkMode ? 'text-white' : 'text-black'}>
          {colorName} - {shade} {shadeName} {tint}: {color} 
        </span>
      </div>
    );
  };
  
  const TailwindColorDisplay = ({ darkMode, handleToggleDarkMode }) => {
    const colors = fullConfig.theme.colors;
  
    return (
      <div className={`p-6 relative ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <button
          className={`absolute top-4 right-4 ${
            darkMode ? 'bg-white text-black' : 'bg-blue-500 text-white'
          } font-bold py-2 px-4 rounded`}
          onClick={handleToggleDarkMode}
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
  
        {Object.keys(colors).map(colorName => (
          <div key={colorName} className="mb-6">
            <h2 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-black'}`}>{colorName}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Object.entries(colors[colorName]).map(([shade, hexCode]) => (
                <ColorSwatch
                  key={shade}
                  colorName={colorName}
                  shade={shade} 
                  hexCode={hexCode}
                  darkMode={darkMode}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };
  

  export default TailwindColorDisplay;