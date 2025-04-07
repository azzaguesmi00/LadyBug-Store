import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
  
  body {
    background-color: #fff;
    color: #222;
    overflow-x: hidden;
  }

  /* Floating polka dots animation */
  .floating-dot {
    position: absolute;
    width: 15px;
    height: 15px;
    background-color: red;
    border-radius: 50%;
    opacity: 0.7;
    animation: float 5s infinite linear;
  }

  @keyframes float {
    0% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
    100% { transform: translateY(0); }
  }
`;

export default GlobalStyles;
