import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';

// product provider
import ProductProvider from './contexts/ProductContext';
// sidebar provider
import SidebarProvider from './contexts/SidebarContext'
// cart provider
import CartProvider from './contexts/CartContext';
import MenuProvider from './contexts/MobileMenuContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <SidebarProvider>
    <MenuProvider>
      <CartProvider>
        <ProductProvider>
            <App/>
        </ProductProvider>
      </CartProvider>
    </MenuProvider>
  </SidebarProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
