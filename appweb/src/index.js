import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import ProductsLayout from './products/components/ProductsLayout';
import FetLayout from './products/components/FetLayout';
import DeclareFun from './products/components/DeclareFun';


ReactDOM.render(


    <ProductsLayout />
    ,
  document.getElementById('root')
);

