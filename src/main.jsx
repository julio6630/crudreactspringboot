import React from 'react';
import ReactDOM from 'react-dom/client';
import { InvoiceApp } from './InvoiceApp';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <InvoiceApp />
  </React.StrictMode>
)
