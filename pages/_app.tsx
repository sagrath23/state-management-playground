// Packages
import React from 'react';

// Definitions
import { AppProps } from 'next/app';

// redux-toolkit
import { store } from '../src/vendors/redux-toolkit';
import { Provider } from 'react-redux';
// recoil
import { RecoilRoot } from 'recoil';

const providers = {
  'redux': (content) => (
    <Provider store={store}>
      {content}
    </Provider>
  ),
  'recoil': (content) => (
    <RecoilRoot>
      {content}
    </RecoilRoot>
  ),
  'zustand': (content) => content
};

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  providers['recoil'](<Component {...pageProps} />)
);

export default MyApp;
