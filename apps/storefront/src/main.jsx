import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import '@acme/ui/tokens.css';
import './styles.css';
import App from './App.jsx';
import { trackPageView } from './analytics.js';

trackPageView();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
