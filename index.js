import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

const name = 'Riaan';
const el = <p>I lobh you, {name}</p>;
const em = <h1>yesh, {el}</h1>;
ReactDOM.render(em, document.getElementById('root'));
