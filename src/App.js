import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
        { name: 'Max', age: 28},
        { name: 'Manu', age: 29},
        { name: 'Stephanie', age: 26}
    ],
    otherState: 'some other value'
  }

  switchNameHandler = () => {
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
	  this.setState({
		  persons: [
			  { name: 'Goran', age: 28},
			  { name: 'Nemanja', age: 29},
			  { name: 'Stefana', age: 26}
		  ]
	  })
  }

  render() {
    return (
      <div className="App">
          <h1>Hi, I'm a React App</h1>
          <h1>Another reading</h1>
          <p>This is really working</p>
          <button onClick={this.switchNameHandler}>Switch Name</button>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age} >My Hobbies: Racing></Person>
	      <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
	      <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
    //   return React.createElement('div', {className: 'App'}, null, React.createElement('h1', null, 'goran'));
  }
}

export default App;
