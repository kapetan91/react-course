import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>Hi, I'm a React App</h1>
          <h1>Another reading</h1>
          <p>This is really working</p>
          <Person name="Max" age="27" >My Hobbies: Racing</Person>
	      <Person name="Manu" age="28" />
	      <Person name="Stephanie" age="27" />
      </div>
    );
    //   return React.createElement('div', {className: 'App'}, null, React.createElement('h1', null, 'goran'));
  }
}

export default App;
