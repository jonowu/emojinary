import Head from 'next/head';

import GlobalStyle from '../components/global-style';
import ThemeProvider from '../components/theme-provider';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Emojinary</title>
      </Head>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
