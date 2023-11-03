

import React,{ StrictMode } from 'react';
import ReactDOM from 'react-dom';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';

const root = document.getElementById('root');
const rootElement = createRoot(root);

rootElement.render(
  // <StrictMode>
    <App />
  // </StrictMode>,
  // document.getElementById('root')
);


