// Packages
import React from 'react';

// Definitions
import { AppProps } from 'next/app';

// redux-toolkit
import { store } from '../src/vendors/redux-toolkit';
import { Provider } from 'react-redux'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
