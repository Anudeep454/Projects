import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Name from './App';
import {Name2} from './App';
import Parent from "./Parent"
import props_child from './props_child';
import props_parent from './props_parent';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Name />
    <Name2 />
    <Parent />
    <props_child/>
    <props_parent/>
  </React.StrictMode>
);

