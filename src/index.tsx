import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { DATA } from './mocks/offers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App data={DATA} />
  </React.StrictMode>
);
