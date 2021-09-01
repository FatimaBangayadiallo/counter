import React from 'react';
import ReactDOM from 'react-dom';
class ClassComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      counter: 0
    }
  }

  addFive = () =>{
    this.setState({counter: this.state.counter +5})
  };
  resetZero = () =>{
    this.setState({counter: 0})
  }

  render(){
    return (
      <div>
        <h1>counter: {this.state.counter}</h1>
        <hr/>
        <button onClick={this.addFive}>add five</button>
        <button onClick={this.resetZero}>reset ZERO</button>
      </div>
    );
  }

};
export default ClassComponent;
