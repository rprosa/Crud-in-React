import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    :root{
        --bg-default: whitesmoke;
        --primary: #8257e5;
        --valid-bg: #57e57b;
        --invalid-bg: #e55757;
        --containers-bg: white;
        --label: #353535;
        --border-color: lightgray;
        --outline-color: #cf4343555;
    }

    *{ 
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html{
        font-size: 10px;
    }

    body{
        width: 100%;
        height: 100vh;
        background: var(--bg-default);
        font-family: Verdana, Geneva, Tahoma, sans-serif
    }
`;