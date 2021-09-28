import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

        :root {
             --check-background: linear-gradient(45deg ,hsl(192, 100%, 67%) 0% , hsl(280, 87%, 65%) 100%);
             --bright-blue :   hsl(220, 98%, 61%);
             --background-light: hsl(0, 0%, 98%);
             --background-dark : hsl(235, 24%, 19%);

        }

        body, button , textarea, input { 
          font-family: 'Josefin Sans', sans-serif;
          font-weight: 400; 
        }

        h1,h2,h3,h4,h5, strong { 
          font-weight: 700;
         }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        @media (max-width: 1000px){
          font-size: 93.75%;
        }

        @media (max-width:720px){
          font-size: 87.5%;
        }

        button {
          cursor: pointer;
        }
`
