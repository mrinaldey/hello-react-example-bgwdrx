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

class Confess extends React.Component {
  render() {
    return <h1> I love you babie </h1>;
  }
}
const dum = <Confess />;
ReactDOM.render(dum, document.getElementById('chapri'));

function Hello(props) {
  return <p>Hello, {props.name}!</p>;
}

const el = <Hello name="HOOMAN" />;
ReactDOM.render(el, document.getElementById('ello'));
