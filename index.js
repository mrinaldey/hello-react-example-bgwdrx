import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

let counter = 0;
let show = () => {
  counter++;
  const el = <h1>My love for you increases like:{counter}</h1>;
  ReactDOM.render(el, document.getElementById('root'));
};
setInterval(show, 500);

function Confess() {
  return <h1>I love you.</h1>;
}
const dum = <Confess />;
ReactDOM.render(dum, document.getElementById('chapri'));
