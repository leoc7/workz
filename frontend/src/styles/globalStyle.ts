import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    html, body, #__next {
        width: 100%;
        height: 100%;
        font-family: 'Roboto';
        background: var(--bg);
        color: var(--gray0);
        -webkit-font-smoothing: antialiased;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
    }

    :root {
        --bg: rgba(178, 177, 238, 0.22);
        --main1: #5B59BC;
        --main2: #4947A5;
        --gray0: #333;
        --gray1: #666;
        --gray2: #999;
        --white0: #fff;
        --lightred: rgba(229, 3, 3, 0.39);
        --lightyellow: rgba(211, 229, 3, 0.39);
        --lightgreen: rgba(3, 229, 66, .39);
    }

    @keyframes shimmer {
        0% {
            background-position: -468px 0;
        }
        
        100% {
            background-position: 468px 0; 
        }
    }    
`;
