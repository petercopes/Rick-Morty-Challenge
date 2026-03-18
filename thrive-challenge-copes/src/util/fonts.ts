import localFont from 'next/font/local';
export const segoeUIFont = localFont({
  src: [
    {
      path: '../assets/fonts/segoeui/segoeui.ttf',
      weight: '400', 
      style: 'normal',
    },
    {
      path: '../assets/fonts/segoeui/segoeuib.ttf',
      weight: '700', 
      style: 'normal',
    },
    {
      path: '../assets/fonts/segoeui/segoeuii.ttf',
      weight: '400',
      style: 'italic',
    },
     {
      path: '../assets/fonts/segoeui/segoeuibi.ttf',
      weight: '700',
      style: 'italic',
    },
  ],
  display: 'swap',
  variable: '--font-secondary',
});
// 2. Configure the Technical Data Font
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