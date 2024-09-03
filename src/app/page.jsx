import React from 'react';
import TailwindColorDisplay from './TailwindColorDisplay';
import tailwindConfig from '../../tailwind.config';

const App = () => {
  const colors = tailwindConfig.theme.colors;

  return (
    <div>
      <TailwindColorDisplay colors={colors} />
    </div>
  );
};

export default App; 

// const shadeNames = {
//     pink: {
//       '50': 'lavender-blush',
//       '100': 'mimi-pink',
//       '200': 'lavender-pink',
//       '300': 'amaranth-pink',
//       '400': 'hot-pink',
//       '500': 'rose-bonbon',
//       '600': 'mexican-pink',
//       '700': 'amaranth-purple',
//       '800': 'magenta-dye',
//       '900': 'murry',
//       '950': 'dark-purple',
//     },
//     gray: {
//       '50': 'platinum',
//       '100': 'ash-gray',
//       '200': 'french-gray',
//       '300': 'cool-gray',
//       '400': 'cadet-gray',
//       '500': 'slate-gray',
//       '600': 'paynes-gray',
//       '700': 'davys-gray',
//       '800': 'onyx',
//       '900': 'eerie-black',
//       '950': 'night',
//     },
//     red: {
//       '50': 'tea-rose',
//       '100': 'misty-rose',
//       '200': 'melon',
//       '300': 'light-coral',
//       '400': 'bittersweet',
//       '500': 'imperial-red',
//       '600': 'red-(cmyK)',
//       '700': 'engineering-orange',
//       '800': 'marron',
//       '900': 'rosewood',
//       '950': 'black-bean',
//     },
//     orange: {
//       '50': 'papaya-whip',
//       '100': 'navajo-white',
//       '200': 'sunset',
//       '300': 'xanthous',
//       '400': 'hunyadi-yellow',
//       '500': 'gamboge',
//       '600': 'dark-goldenrod',
//       '700': 'golden-brown',
//       '800': 'sepia',
//       '900': 'cafe-noir',
//       '950': 'bistre',
//     },
//     green: {
//       '50': 'mint-green',
//       '100': 'celeste',
//       '200': 'aquamarine',
//       '300': 'turquoise',
//       '400': 'emerald',
//       '500': 'mint',
//       '600': 'jade',
//       '700': 'shamrock-green',
//       '800': 'jungle-green',
//       '900': 'sea-green',
//       '950': 'castleton-green',
//     },
//     blue: {
//       '50': 'alice-blue',
//       '100': 'lavender-(web)',
//       '200': 'jordy-blue',
//       '300': 'ruddy-blue',
//       '400': 'cornflower-blue',
//       '500': 'azure',
//       '600': 'royal-blue-(web-color)',
//       '700': 'cobalt-blue',
//       '800': 'yale-blue',
//       '900': 'ultramarine',
//       '950': 'traditional-royal-blue',
//     },
//     purple: {
//       '50': 'pale-purple',
//       '100': 'magnolia',
//       '200': 'thistle',
//       '300': 'mauve',
//       '400': 'lavender-(floral)',
//       '500': 'amethyst',
//       '600': 'electric-purple',
//       '700': 'veronica',
//       '800': 'french-violet',
//       '900': 'grape',
//       '950': 'indigo',
//     },
//     yellow: {
//       '50': 'vanilla',
//       '100': 'flax',
//       '200': 'jasmine',
//       '300': 'naples-yellow',
//       '400': 'gold',
//       '500': 'jonquil',
//       '600': 'gold-(metallic)',
//       '700': 'dark-goldenrod',
//       '800': 'field-drab',
//       '900': 'drab-dark-brown',
//       '950': 'bistre-brown',
//     },
//     cyan: {
//       '50': ' ice-blue',
//       '100': 'electric-blue',
//       '200': 'aqua',
//       '300': 'cyan-(rgb)',
//       '400': 'fluorescent-cyan',
//       '500': 'robin-blue-egg',
//       '600': 'verdigris',
//       '700': 'Dark-Cyan',
//       '800': 'caribbean-current',
//       '900': 'midnight-green',
//       '950': 'dark-green',
//     },
// white:{
//     DEFAULT: '#ffffff',
// },

// black:{
//   DEFAULT: '#000000',
// },

//   pink: {
//     50: '#ffe4e6',
//     100: '#fecdd3',
//     200: '#fda4af',
//     300: '#fb7185',
//     400: '#f43f5e',
//     500: '#e11d48',
//     600: '#be123c',
//     700: '#9f1239',
//     800: '#881337',
//     900: '#701a32',
//     950: '#4a041d',
//   },

//         gray: {  //   contrast checker                 Dark     light

//         DEFAULT:'#8B8589',  //taupe gray               pass     fail                              
//         50: '#E3E5E8',   //platinum                    pass     fail          
//         100: '#ABAEA9',  //ash gray                    pass     fail     
//         200: '#C2C5CC',  //french gray                 pass     fail    
//         300: '#969BA7',  //cool gray                   pass     fail      
//         400: '#8B91A1',  //cadet gray                  pass     fail       
//         500: '#7F8694',  //slate gray                  pass     fail   
//         600: '#616979',  //payne's gray                fail     pass         
//         700: '#515761',  //davy's gray                 fail     pass        
//         800: '#383C43',  //Onyx                        fail     pass 
//         900: '#1E2024',  //eerie black                 fail     pass        
//         950: '#121315'   //night                       fail     pass  
//       },

//       red: {  //   contrast checker                  Dark     light

//         DEFAULT: '#FF0000', // red                   pass     fail                                                            
//         50: '#F9C8C8',      //tea rose(red)          pass     fail                            
//         100: '#FCDADA',     //misty rose             pass     fail                        
//         200: '#F9B5B5',     //melon                  pass     fail                
//         300: '#F58F8F',     //light coral            pass     fail                      
//         400: '#F46161',     //bittersweet            pass     fail                      
//         500: '#EF4444',     //imperial red           pass     fail                       
//         600: '#E71414',     //red(cmyk)              pass     fail                    
//         700: '#B30F0F',     //engineering orange     fail     pass                                
//         800: '#800B0B',     // marron                fail     pass                     
//         900: '#580202',     //rosewood               fail     pass                      
//         950: '#4C0707'      //black bean             fail     pass                        
//       },

//       orange: {  //   contrast checker                  Dark     light

//         DEFAULT: '#FFA200',  //orange peel              pass     fail                        
//         50: '#FDECCF',  //papaya whip                   pass     fail                  
//         100: '#FBDCA8', //navajo white                  pass     fail                    
//         200: '#FACD81', //sunset                        pass     fail              
//         300: '#F8BD59', //xanthous                      pass     fail               
//         400: '#F7AE32', //hunyadi yellow                pass     fail                     
//         500: '#F59E0B', //gamboge                       pass     fail              
//         600: '#C07C08', //dark goldenrod                pass     pass                     
//         700: '#8A5906', //golden brown                  fail     pass                   
//         800: '#543603', //sepia                         fail     pass            
//         900: '#4E3304', //cafe noir                     fail     pass                
//         950: '#322001'  //bistre                        fail     pass             
//       },

//       green: {  //   contrast checker                  Dark     light

//         DEFAULT: '#00FF19', //green                    pass     fail                 
//         50: '#D7FCEF',      //mint green               pass     fail                       
//         100: '#C4FAE8',     //celeste                  pass     fail                   
//         200: '#9EF7D9',     //aquamarine               pass     fail                     
//         300: '#6CDBB6',     //Turquoise                pass     fail                     
//         400: '#4AD7A8',     //emerald                  pass     fail                   
//         500: '#10B981',     //mint                     pass     fail                
//         600: '#00B679',     //jade                     pass     fail                
//         700: '#009E60',     //shamrock green           pass     fail                          
//         800: '#53A078',     //jungle green             pass     fail                        
//         900: '#0C855D',     //sea green                pass     fail                     
//         950: '#075239',     //castleton green          fail     pass                           
//       },


//       blue: {  //   contrast checker                  Dark     light

//         DEFAULT: '#2475F8', //blue(crayola)            pass    fail                          
//         50: '#EBF2FE',      //alice blue               pass    fail                      
//         100: '#D7E6FD',     // lavender (web)          pass    fail                             
//         200: '#B0CDFB',     //jordy blue               pass    fail                       
//         300: '#7CABF6',     //ruddy blue               pass    fail                       
//         400: '#629BF8',     //cornflower blue          pass    fail                            
//         500: '#3B82F6',     //azure                    pass    fail                  
//         600: '#0B61EE',     //royal blue (web color)   fail    pass                                   
//         700: '#084BB8',     //cobalt blue              fail    pass                        
//         800: '#063583',     //yale blue                fail    pass                      
//         900: '#000091',     //ultramarine              fail    pass                        
//         950: '#012862',     //traditional royal blue   fail    pass                                   
//       },

//       purple: {  //   contrast checker                  Dark     light

//         DEFAULT: '#9500FF', //electric violet           pass     fail                          
//         50: '#FFEEFD',      //pale purple               pass     fail                      
//         100: '#FBF7FF',     //magnolia                  pass     fail                   
//         200: '#EAD0FC',     //thistle                   pass     fail                 
//         300: '#D9A9FA',     //mauve                     pass     fail                
//         400: '#C783F8',     //lavender (floral)         pass     fail                            
//         500: '#B65CF6',     //amethyst                  pass     fail                   
//         600: '#B151F6',     //electric purple           pass     fail                          
//         700: '#9E27F3',     //veronica                  fail     pass                   
//         800: '#820CD6',     //french violet             fail     pass                        
//         900: '#6209A1',     //grape                     fail     pass                
//         950: '#41066C',     //indigo                    fail     pass                 
        
//       },

//       'yellow': {  //   contrast checker                  Dark     light

//           DEFAULT: '##FFFF00', //yellow                    pass    fail                 
//           50: '#FDEEB2',      //vanilla                    pass    fail                  
//           100: '#FDE99B',     //flax                       pass    fail               
//           200: '#FCE37E',     //jasmine                    pass    fail                  
//           300: '#FBDB5B',     //naples yellow              pass    fail                        
//           400: '#FBD438',     //gold                       pass    fail               
//           500: '#FACC15',     //jonquil                    pass    fail                 
//           600: '#D7AD05',     //gold (metallix)            pass    fail                          
//           700: '#A58504',     //dark goldenrod             pass    fail                         
//           800: '#745D02',     //field drab                 fail    pass                     
//           900: '#423501',     //drab dark brown            fail    pass                          
//           950: '#292101'      //bistre brown               fail    pass                       
//         },

//       'cyan': { //       contrast checker                    Dark     light

//          DEFAULT: '#00B7EB',          //process cyan         pass      fail                           
//         50: '#A1FFFF',                //ice blue             pass      fail                       
//         100: '#7FFDFD',               //electric blue        pass      fail                            
//         200: '#61FDFD',               //aqua                 pass      fail                   
//         300: '#00FFFF',               //cyan(rgb)            pass      fail                        
//         400: '#00F5F5',               //fluorescent cyan     pass      fail                              
//         500: '#51D9D9',               //robin blue egg       pass      fail                             
//         600: '#29B9B9',               //verdigris            pass      fail                        
//         700: '#009999',               //dark cyan            pass      fail                       
//         800: '#006666',               //caribbean current    fail      pass                                
//         900: '#003333',               //midnight green       fail      pass                             
//         950: '#002828'                //dark green           fail      pass                         
//       },