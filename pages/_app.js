import Head from 'next/head';

import GlobalStyle from '../components/global-style';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Emojinary</title>
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};

export default App;
