import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

function Item(props) {
  return (
    <div className="item">
      <b>Name:</b>
      {props.name}
      <br />
      <b>Price:</b>
      {props.price}
    </div>
  );
}
const el = <Item name="Cheese" price="4.99" /> 
ReactDOM.render(
  el,
  document.getElementById('chapri')
)