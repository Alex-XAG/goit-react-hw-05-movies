import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
// import { AppStudy } from 'components/AppStudy/AppStudy';
import './index.css';

const API_KEY = 'fcd230550d5bc22e169a178a7e9d550c';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-05-movies">
      <App />
      {/* <AppStudy /> */}
    </BrowserRouter>
  </React.StrictMode>
);
