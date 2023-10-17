import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { ThemeProvider } from 'react-bootstrap';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider breakpoints={['xxl', 'xl', 'lg', 'md', 'sm', 'xs']}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
