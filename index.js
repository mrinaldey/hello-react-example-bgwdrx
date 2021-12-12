import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './style.css';

// function Item(props) {
//   return (
//     <div className="item">
//       <b>Name:</b>
//       {props.name}
//       <br />
//       <b>Price:</b>
//       {props.price}
//     </div>
//   );
// }
// function App() {
//   return (
//     <div>
//       <Item name="Cheese" price="4.99" />
//       <Item name="Bread" price="1.99" />
//       <Item name="Ice Cream" price="24" />
//     </div>
//   );
// }
// const el = <App />;
// ReactDOM.render(el, document.getElementById('root'));

// class Hello extends React.Component {
//   state = {
//     count: 2,
//   };
//   lovemore = () => {
//     this.setState({
//       count: this.state.count * 2,
//     });
//   };
//   render() {
//     return (
//       <div>
//         <h1> Your love for me: {this.state.count}</h1>
//         <button id="btn" onClick={this.lovemore}>
//           LOVE MORE
//         </button>
//       </div>
//     );
//   }
// }
// const em = <Hello />;
// ReactDOM.render(em, document.getElementById('chapri'));

// class Counter extends React.Component {
//   state = {
//     counter: 0,
//   };
//   increment = () => {
//     this.setState({
//       counter: this.state.counter + 1,
//     });
//   };
//   componentDidMount() {
//     setInterval(this.increment, 1000);
//   }
//   render() {
//     return (
//       <div>
//         <p>{this.state.counter}</p>
//         <button onClick={this.increment}>Love more</button>
//       </div>
//     );
//   }
// }
// const en = <Counter />;
// ReactDOM.render(en, document.getElementById('ello'));

// function Counter() {
//   const [counter, setCounter] = useState(2);

//   useEffect(() => {
//     alert('Number of clicks: ' + counter);
//   });

//   function increment() {
//     setCounter(counter + 1);
//   }

//   return (
//     <div>
//       <h2>Love me:{counter}</h2>
//       <br />
//       <button id="btn" onClick={increment}>
//         LOVE
//       </button>
//     </div>
//   );
// }
// const co = <Counter />;
// ReactDOM.render(co, document.getElementById('root'));

// function Converter() {
//   const [km, setKm] = useState(0);
//   const mile = convert(km) == 1 ? 'mile' : 'miles';

//   function handleChange(e) {
//     setKm(e.target.value);
//   }
//   function convert(km) {
//     return (km / 1.609).toFixed(2);
//   }

//   return (
//     <div>
//       <input id="btn" type="text" value={km} onChange={handleChange} />
//       <p>
//         {km} km is {convert(km)} {mile}.
//       </p>
//     </div>
//   );
// }
// const ez = <Converter />;
// ReactDOM.render(ez, document.getElementById('ello'));

function AddForm() {
  const [sum, setSum] = useState(0);
  const [num, setNum] = useState(0);

  function handleChange(e) {
    setNum(e.target.value);
  }
  function handleSubmit(e) {
    setSum(sum + Number(num));
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="number" value={num} onChange={handleChange} />
      <input type="submit" value="Add" />
      <p> S-Sum is {sum} </p>
    </form>
  );
}
const eff = <AddForm />;
ReactDOM.render(eff, document.getElementById('chapri'));
