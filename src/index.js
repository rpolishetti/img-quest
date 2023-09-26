import '@fortawesome/fontawesome-free/css/fontawesome.min.css';
import '@fortawesome/fontawesome-free/css/brands.min.css';
import '@fortawesome/fontawesome-free/css/solid.min.css';
import 'bulma/css/bulma.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';

const rootEl = document.querySelector('#root');
const root = ReactDOM.createRoot(rootEl);

root.render(<App />);
