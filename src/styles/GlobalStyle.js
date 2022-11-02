import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
        list-style: none;
        border-radius: 8px;
        border: none;
        outline: none;
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    textarea:-webkit-autofill,
    textarea:-webkit-autofill:hover,
    textarea:-webkit-autofill:focus,
    select:-webkit-autofill,
    select:-webkit-autofill:hover,
    select:-webkit-autofill:focus {
    -webkit-text-fill-color: var(--color-1) !important;
    -webkit-box-shadow: 0 0 0px 1000px var(--color-1) inset;
    box-shadow: 0 0 0px 1000px var(--color-1) inset;
    }

    html {
        height: 100vh;
    }
        
    body{
       background-color: var(--color-1);

        &::-webkit-scrollbar {
            background-color: transparent;
            width: 5px;
            background-color: var(--color-1);
        }
        
        &::-webkit-scrollbar-thumb {
            background: var(--color-1);
         
        }
    }

    :root{
        --color-1: #3E54D3;
        
    }
`;
