/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      screens:{
        esm:'350px'  
      },
      fontFamily:{
         'League':['"League Spartan"','sans-serif']
      },
      boxShadow:{
        custom:'0 4px 0',
        custom2:'0 2px 0 var(--tw-shadow-color)'
      },
      colors:{
       theme1:{
           background:{
             main:'#3A4764',
             screen:'#182034',
             keypad:'#232C43'
           },
           keys:{
             btn1:'#637097',
             btn1S:'#404E72',
             btn2:'#D03F2F',
             btn2S:'#93261A',
             btn3:'#EAE3DC',
             btn3S:'#B4A597'
           },
           text:{
             blue:'#444B5A',
             white:'#FFFFFF'
           }
          },
       theme2:{
            background:{
              main:'#E6E6E6',
              screen:'#EDEDED',
              keypad:'#D1CCCC'
            },
            keys:{
              btn1:'hsl(185, 42%, 37%)',
              btn1S:'hsl(185, 58%, 25%)',
              btn2:' hsl(25, 98%, 40%)',
              btn2S:'hsl(25, 99%, 27%)',
              btn3:' hsl(45, 7%, 89%)',
              btn3S:'hsl(35, 11%, 61%)'
            },
            text:{
              yellow:' hsl(60, 10%, 19%)',
            }
           },
           theme3:{
            background:{
              main:'hsl(268, 75%, 9%)',
              screen:'hsl(268, 71%, 12%)',
              keypad:'hsl(268, 71%, 12%)'
            },
            keys:{
              btn1:'hsl(281, 89%, 26%)',
              btn1S:'hsl(285, 91%, 52%)',
              btn2:' hsl(176, 100%, 44%)',
              btn2S:'hsl(177, 92%, 70%)',
              btn3:' hsl(268, 47%, 21%)',
              btn3S:'hsl(290, 70%, 36%)'
            },
            text:{
              yellow:'  hsl(52, 100%, 62%)',
              blue:'hsl(198, 20%, 13%)',
            }
           }
      }
    },
  },
  plugins: [],
}
