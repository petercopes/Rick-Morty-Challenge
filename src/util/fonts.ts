import localFont from 'next/font/local';

export const consolasFont = localFont({
  src: [
    {
      path: '../assets/fonts/consolas/consolas.ttf',
      weight: '400', 
      style: 'normal',
    },
    {
      path: '../assets/fonts/consolas/consolasb.ttf',
      weight: '700', 
      style: 'normal',
    },
    {
      path: '../assets/fonts/consolas/consolasi.ttf',
      weight: '400',
      style: 'italic',
    },
     {
      path: '../assets/fonts/consolas/consolasbi.ttf',
      weight: '700',
      style: 'italic',
    },
  ],
  display: 'swap',
  variable: '--font-primary',

});