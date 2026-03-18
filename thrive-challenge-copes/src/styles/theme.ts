import { consolasFont } from "@/util/fonts";

export const theme = {
  colors: {
    screenBackground: '#030a08',
    buttonInactive:'#229922',
    buttonActive:'#66ff66',

    buttonActiveShadow:'rgba(0, 255, 0, 0.7)',
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
  },
} as const;


