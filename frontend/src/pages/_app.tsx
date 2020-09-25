import type { AppProps } from 'next/app';
import Header from '../components/Header';
import GlobalStyle from '../styles/globalStyle';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <>
            <Header />
            <Component {...pageProps} />
            <GlobalStyle />
        </>
    );
};

export default App;
