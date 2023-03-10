import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    html, body, #root {
        height: 100%;
    }
    body {
        font: 14px 'Roboto', sans-serif;
        background: #EEE8AA;
        color: #333;
        -web-kit-smoothing: antialiased !important;
    }
    ul {
        list-style: none;
    }
`