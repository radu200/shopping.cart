import type { AppProps } from 'next/app';
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store from "../redux/store";
import persistor from "../redux/persistedStore";
import '../global.css';

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Component {...pageProps} />
    </PersistGate>
  </Provider>
);

export default App;
