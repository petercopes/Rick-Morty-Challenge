import { consolasFont } from "@/util/fonts";

export const theme = {
  colors: {
    white:'#ffffff',


    screenBackground: '#010806',
    locationBackground:'#040f0c',
    
    primaryGreen:'#66ff66',
    secondaryGreen:'#229922',
    shadowGreen:'#00ff00',
    screenOverlayShadow:'#0e420e6a',
    primaryGreenShadow:'rgba(0, 255, 0, 0.7)',

    locationInfo: '#f1e05a',

    cardBorder:'#2a2e31',
  },

  font: {
    family:{
        primary: `${consolasFont.style.fontFamily}, sans-serif`,
        secondary: `Courier , sans-serif`,
    },
    weights:{
        thin:'300',
        normal:'400',
        bold:'700',
    },
    size:{
        xs: '0.75rem',
        sm: '0.85rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        xxl: '1.5rem',
        heading: '2rem',
    },
},
spacing: {
    xxs: '4px',
    xs: '8px',
    sm: '12px',
    md: '16px',
    lg: '20px',
    xl: '24px',
    xxl: '32px',
    xxxl: '40px',
    xxxxl: '48px',
},

  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
  zIndices: {
    base: 1,
    shadow:2,
  },
  transitions: {
    default: 'all 300ms ease',
  },
  shadows: {
    activeButtonTab: '0 4px 12px rgba(0, 255, 0, 0.7)',
    activeButtonTabText:'0 0 5px #66ff66',
    characterInfoText:'0 0 3px #00ff00',
    locationInfo:'0 0 5px rgba(241, 224, 90, 0.3)'
  },
  containers:{
    tabContentHeight:'530px'
  },
} as const;


