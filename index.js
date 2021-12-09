import React from 'react';
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

class Hello extends React.Component {
  state = {
    count: 2,
  };
  lovemore = () => {
    this.setState({
      count: this.state.count * 2,
    });
  };
  render() {
    return (
      <div>
        <h1> Your love for me: {this.state.count}</h1>
        <button id="btn" onClick={this.lovemore}>
          LOVE MORE
        </button>
      </div>
    );
  }
}
const em = <Hello />;
ReactDOM.render(em, document.getElementById('chapri'));

// class Counter extends React.Component {
//   state = {
//     counter: 0,
//   };
//   increment = () => {
//     this.setState({
//       counter: this.state.counter + 1,
//     });
//   };
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
