import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *,
    ::after,
    ::before {
        box-sizing: inherit;
    }

    body {
        background-image: url(https://wallpapers.com/images/high/4k-bitcoin-p5r0i6d562n8bep4.webp);
        background-size: cover;
        opacity: 0.9;
        font-family: 'Chakra Petch', sans-serif;
    }`;
