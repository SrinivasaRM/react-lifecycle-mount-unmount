import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Greeting extends React.Component{
  componentWillMount(){
    console.log("In Component Will Mount method");
    //debugger;
  }
  componentDidMount(){
    console.log("In Component Did Mount method");
    //debugger;
  }
  componentWillReceiveProps(){}
  shouldComponentUpdate(){
    return true;
  }
  componentWillUpdate(){}
  componentDidUpdate(){}
  componentWillUnmount(){
    console.log("In Component Will Unmount method");
  }
  render(){
    return(
      <div>Hello Srinivasa Reddy</div>
    );
  }
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {showGreeting:true};
    setTimeout(() => {
      this.setState({showGreeting:false});
    },10000);

    /**
    setTimeIn(() => {
      this.setState({showGreeting:true});
    },5000);
    **/
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          {this.state.showGreeting && <Greeting />}
        </p>
      </div>
    );
  }
}

export default App;
