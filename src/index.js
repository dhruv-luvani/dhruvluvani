import React from 'react';
import ReactDOM from 'react-dom/client';
import './custom.css';
import '@splidejs/react-splide/css';
import App from './App';
import { BrowserRouter } from "react-router";
import { persistor, store } from './redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </BrowserRouter>
);
