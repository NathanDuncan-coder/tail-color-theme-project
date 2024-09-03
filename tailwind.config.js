/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      extend:{
    colors: {
              white:{
                       DEFAULT: '#ffffff',
                    },
              
              black:{
                      DEFAULT: '#000000',
                    },
          
              pink: { //   contrast checker                  Dark     light

                DEFAULT: '#FF4DA6', //brilliant rose         pass      fail
                50: '#FDEEF6 ', // lavender blush            pass      fail
                100: '#FBDCEB', // mimi pink                 pass      fail
                200: '#F8B7D7', //lavender pink              pass      fail
                300: '#F492C2', // amaranth pink             pass      fail
                400: '#F06DAE', // hot pink                  pass      fail
                500: '#EC4899', // rose bonbon               pass      fail
                600: '#E4187D', // mexican pink              pass      fail
                700: '#B11261', // amaranth purple           pass      pass    
                800: '#7F0D45', // magenta dye               fail      pass           
                900: '#4C0829', // murry                     fail      pass
                950: '#32051B', // dark purple               fail      pass
              },

              gray: {  //   contrast checker                 Dark     light

              DEFAULT:'#8B8589',  //taupe gray               pass     fail                              
              50: '#E3E5E8',   //platinum                    pass     fail          
              100: '#ABAEA9',  //ash gray                    pass     fail     
              200: '#C2C5CC',  //french gray                 pass     fail    
              300: '#969BA7',  //cool gray                   pass     fail      
              400: '#8B91A1',  //cadet gray                  pass     fail       
              500: '#7F8694',  //slate gray                  pass     fail   
              600: '#616979',  //payne's gray                fail     pass         
              700: '#515761',  //davy's gray                 fail     pass        
              800: '#383C43',  //Onyx                        fail     pass 
              900: '#1E2024',  //eerie black                 fail     pass        
              950: '#121315'   //night                       fail     pass  
            },

            red: {  //   contrast checker                  Dark     light

              DEFAULT: '#FF0000', // red                   pass     fail                                                            
              50: '#F9C8C8',      //tea rose(red)          pass     fail                            
              100: '#FCDADA',     //misty rose             pass     fail                        
              200: '#F9B5B5',     //melon                  pass     fail                
              300: '#F58F8F',     //light coral            pass     fail                      
              400: '#F46161',     //bittersweet            pass     fail                      
              500: '#EF4444',     //imperial red           pass     fail                       
              600: '#E71414',     //red(cmyk)              pass     fail                    
              700: '#B30F0F',     //engineering orange     fail     pass                                
              800: '#800B0B',     // marron                fail     pass                     
              900: '#580202',     //rosewood               fail     pass                      
              950: '#4C0707'      //black bean             fail     pass                        
            },

            orange: {  //   contrast checker                  Dark     light

              DEFAULT: '#FFA200',  //orange peel              pass     fail                        
              50: '#FDECCF',  //papaya whip                   pass     fail                  
              100: '#FBDCA8', //navajo white                  pass     fail                    
              200: '#FACD81', //sunset                        pass     fail              
              300: '#F8BD59', //xanthous                      pass     fail               
              400: '#F7AE32', //hunyadi yellow                pass     fail                     
              500: '#F59E0B', //gamboge                       pass     fail              
              600: '#C07C08', //dark goldenrod                pass     pass                     
              700: '#8A5906', //golden brown                  fail     pass                   
              800: '#543603', //sepia                         fail     pass            
              900: '#4E3304', //cafe noir                     fail     pass                
              950: '#322001'  //bistre                        fail     pass             
            },

            green: {  //   contrast checker                  Dark     light

              DEFAULT: '#00FF19', //green                    pass     fail                 
              50: '#D7FCEF',      //mint green               pass     fail                       
              100: '#C4FAE8',     //celeste                  pass     fail                   
              200: '#9EF7D9',     //aquamarine               pass     fail                     
              300: '#6CDBB6',     //Turquoise                pass     fail                     
              400: '#4AD7A8',     //emerald                  pass     fail                   
              500: '#10B981',     //mint                     pass     fail                
              600: '#00B679',     //jade                     pass     fail                
              700: '#009E60',     //shamrock green           pass     fail                          
              800: '#53A078',     //jungle green             pass     fail                        
              900: '#0C855D',     //sea green                pass     fail                     
              950: '#075239',     //castleton green          fail     pass                           
            },


            blue: {  //   contrast checker                  Dark     light

              DEFAULT: '#2475F8', //blue(crayola)            pass    fail                          
              50: '#EBF2FE',      //alice blue               pass    fail                      
              100: '#D7E6FD',     // lavender (web)          pass    fail                             
              200: '#B0CDFB',     //jordy blue               pass    fail                       
              300: '#7CABF6',     //ruddy blue               pass    fail                       
              400: '#629BF8',     //cornflower blue          pass    fail                            
              500: '#3B82F6',     //azure                    pass    fail                  
              600: '#0B61EE',     //royal blue (web color)   fail    pass                                   
              700: '#084BB8',     //cobalt blue              fail    pass                        
              800: '#063583',     //yale blue                fail    pass                      
              900: '#000091',     //ultramarine              fail    pass                        
              950: '#012862',     //traditional royal blue   fail    pass                                   
            },

            purple: {  //   contrast checker                  Dark     light

              DEFAULT: '#9500FF', //electric violet           pass     fail                          
              50: '#FFEEFD',      //pale purple               pass     fail                      
              100: '#FBF7FF',     //magnolia                  pass     fail                   
              200: '#EAD0FC',     //thistle                   pass     fail                 
              300: '#D9A9FA',     //mauve                     pass     fail                
              400: '#C783F8',     //lavender (floral)         pass     fail                            
              500: '#B65CF6',     //amethyst                  pass     fail                   
              600: '#B151F6',     //electric purple           pass     fail                          
              700: '#9E27F3',     //veronica                  fail     pass                   
              800: '#820CD6',     //french violet             fail     pass                        
              900: '#6209A1',     //grape                     fail     pass                
              950: '#41066C',     //indigo                    fail     pass                 
              
            },

            'yellow': {  //   contrast checker                  Dark     light

                DEFAULT: '##FFFF00', //yellow                    pass    fail                 
                50: '#FDEEB2',      //vanilla                    pass    fail                  
                100: '#FDE99B',     //flax                       pass    fail               
                200: '#FCE37E',     //jasmine                    pass    fail                  
                300: '#FBDB5B',     //naples yellow              pass    fail                        
                400: '#FBD438',     //gold                       pass    fail               
                500: '#FACC15',     //jonquil                    pass    fail                 
                600: '#D7AD05',     //gold (metallix)            pass    fail                          
                700: '#A58504',     //dark goldenrod             pass    fail                         
                800: '#745D02',     //field drab                 fail    pass                     
                900: '#423501',     //drab dark brown            fail    pass                          
                950: '#292101'      //bistre brown               fail    pass                       
              },

            'cyan': { //       contrast checker                    Dark     light

               DEFAULT: '#00B7EB',          //process cyan         pass      fail                           
              50: '#A1FFFF',                //ice blue             pass      fail                       
              100: '#7FFDFD',               //electric blue        pass      fail                            
              200: '#61FDFD',               //aqua                 pass      fail                   
              300: '#00FFFF',               //cyan(rgb)            pass      fail                        
              400: '#00F5F5',               //fluorescent cyan     pass      fail                              
              500: '#51D9D9',               //robin blue egg       pass      fail                             
              600: '#29B9B9',               //verdigris            pass      fail                        
              700: '#009999',               //dark cyan            pass      fail                       
              800: '#006666',               //caribbean current    fail      pass                                
              900: '#003333',               //midnight green       fail      pass                             
              950: '#002828'                //dark green           fail      pass                         
            },


    }
  
    } 
  },
  plugins: [],
  }
 