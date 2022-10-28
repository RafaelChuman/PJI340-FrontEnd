import { createGlobalStyle } from "styled-components";

export const theme = {
  colors: {
    transparent: "transparent",
    black: "#000",
    white: "${theme.colors.pink[600]}",
    gray: {
      900: "#171923",
      800: "#1A202C",
      700: "#2D3748",
      600: "#4A5568",
      500: "#718096",
      400: "#A0AEC0",
      300: "#CBD5E0",
      200: "#E2E8F0",
      100: "#EDF2F7",
      50: "#F7FAFC",
    },
    purple: {
      900: "#181B23",
      800: "#44337A",
      700: "#553C9A",
      600: "#6B46C1",
      500: "#805AD5",
      400: "#9F7AEA",
      300: "#B794F4",
      200: "#D6BCFA",
      100: "#E9D8FD",
      50: "#FAF5FF",
    },
    yellow: {
      900: "#5F370E",
      800: "#744210",
      700: "#975A16",
      600: "#B7791F",
      500: "#D69E2E",
      400: "#ECC94B",
      300: "#F6E05E",
      200: "#FAF089",
      100: "#FEFCBF",
      50: "#FFFFF0",
    },
    pink: {
      900: "#521B41",
      800: "#702459",
      700: "#97266D",
      600: "#B83280",
      500: "#D53F8C",
      400: "#ED64A6",
      300: "#F687B3",
      200: "#FBB6CE",
      100: "#FED7E2",
      50: "#FFF5F7",
    },
    cyan: {
      900: "#065666",
      800: "#086F83",
      700: "#0987A0",
      600: "#00A3C4",
      500: "#00B5D8",
      400: "#0BC5EA",
      300: "#76E4F7",
      200: "#9DECF9",
      100: "#C4F1F9",
      50: "#EDFDFD",
    },
  },
  fonts: {
    body: "Poppins",
    heading: "Poppins, sans-serif",
    mono: "Menlo, monospace",
  },
  fontSizes: {
    "0.75rem": "0.75rem",
    "0.875rem": "0.875rem",
    "1rem": "1rem",
    "1.125rem": "1.125rem",
    "1.25rem": "1.25rem",
    "1.5rem": "1.5rem",
    "1.875rem": "1.875rem",
    "2.25rem": "2.25rem",
    "3rem": "3rem",
    "3.75rem": "3.75rem",
    "4.5rem": "4.5rem",
    "6rem": "6rem",
    "8rem": "8rem",
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  lineHeights: {
    ".75rem": ".75rem",
    "1rem": "1rem",
    "1.25rem": "1.25rem",
    "1.5rem": "1.5rem",
    "1.75rem": "1.75rem",
    "2rem": "2rem",
    "2.25rem": "2.25rem",
    "2.5rem": "2.5rem",
  },
  letterSpacings: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
  },
  space: {
    "0.125rem": "0.125rem",
    "0.25rem": "0.25rem",
    "0.375rem": "0.375rem",
    "0.5rem": "0.5rem",
    "0.625rem": "0.625rem",
    "0.75rem": "0.75rem",
    "0.875rem": "0.875rem",
    "1rem": "1rem",
    "1.25rem": "1.25rem",
    "1.5rem": "1.5rem",
    "1.75rem": "1.75rem",
    "2rem": "2rem",
    "2.25rem": "2.25rem",
    "2.5rem": "2.5rem",
    "3rem": "3rem",
    "3.5rem": "3.5rem",
    "4rem": "4rem",
    "5rem": "5rem",
    "6rem": "6rem",
    "7rem": "7rem",
    "8rem": "8rem",
    "9rem": "9rem",
    "10rem": "10rem",
    "11rem": "11rem",
    "12rem": "12rem",
    "13rem": "13rem",
    "14rem": "14rem",
    "15rem": "15rem",
    "16rem": "16rem",
    "18rem": "18rem",
    "20rem": "20rem",
    "24rem": "24rem",
  },
};

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  
  body {
    background: ${theme.colors.gray[50]};
    color:${theme.colors.gray[800]};
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Poppins', sans-serif;
    font-size: ${theme.fontSizes["1rem"]};
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight:  ${theme.fontWeights.bold};
  }


  button:hover {
    color: ${theme.colors.cyan[900]};
  }

  button {
    cursor: pointer;
    text-align:center;
    justify-content:center;

    font-weight: ${theme.fontWeights.bold};
    color: ${theme.colors.cyan[900]};

    border-radius: 0.25rem;
    border: 2px solid ${theme.colors.cyan[700]}; 
    
    background-color: ${theme.colors.white};
    
    
    transition-duration: 0.4s;
    padding: 4px;
  }

  p{
    color:${theme.colors.gray[800]};
  }

  /* div{
    overflow-x: auto;
  } */

  input{
    text-align:center;
    justify-content:center;
    border-radius: 0.25rem;
    border: 2px solid ${theme.colors.cyan[700]}; 
    background-color: ${theme.colors.white};
    color: ${theme.colors.gray[900]};
    transition-duration: 0.4s;
    padding: 4px;
    font-size: ${theme.fontSizes["1.125rem"]};
    
  }



  table{
    border:0px;
    border-collapse: collapse;
    min-width: 600px;
    margin: 0px;
    
    thead{
      th:first-child{
        border-bottom-left-radius:8px;
        border-top-left-radius:8px;
      } 
      th:last-child{
        border-bottom-right-radius:8px;
        border-top-right-radius:8px;
      }

      th {
        background-color: ${theme.colors.cyan[900]};
        color: ${theme.colors.gray[50]};
        height: ${theme.lineHeights["2.25rem"]} ;
      }
    }


    tr {

      height: ${theme.lineHeights["2.25rem"]} ;

      td {
        text-align: center;
        justify-content:center;
        vertical-align: middle;
      }

      input[type='button'] {
        font-size: ${theme.fontSizes["1.5rem"]};
        color: ${theme.colors.gray[50]};
        background-color: ${theme.colors.pink[500]};
        padding: ${theme.space["1rem"]};        
        margin: 0;
      }
    }

    tr:nth-child(even){
      background-color: ${theme.colors.cyan[100]};
    }

    tr:hover {
      background-color: ${theme.colors.gray[200]};
    }


  }







  input[type="checkbox"]  {
    content: "";
    appearance: none;

    width: 1.4em;
    height: 1.4em;

    border-radius: 4px;
    border: 2px solid ${theme.colors.pink[400]};
    background: ${theme.colors.white};

    transition: all 0.2s, transform 0.3s ease-in-out;
  }

  input[type="checkbox"]:checked, input[type="checkbox"]:hover  {
    
    width: 1.4em;
    height: 1.4em;

    border: 2px solid ${theme.colors.pink[800]};
    /* background: ${theme.colors.pink[200]}; */

    box-shadow: inset 1.4em 1.4em ${theme.colors.pink[200]};
  }

  input[type="checkbox"]:checked{

    background: ${theme.colors.white};

    transform: rotateX(180deg);
  }


`;
