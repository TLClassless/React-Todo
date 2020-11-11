import React, { Component } from 'react';
import Todos from './components/Todos.js';

import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Complete Task 1',
        completed: false
      },
      {
        id: 2,
        title: 'Complete Task 2',
        completed: false
      },
      {
        id: 3,
        title: 'Complete Task 3',
        completed: false
      }
    ]
  }

  // Toggle Complete  
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed // toggle
      }
      return todo;
    }) })
  }

  // Delete Todo
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] }) // ... = spread operator, copy all elements already present in [] / filter will filter out todos !== that aren't associated with the selected id
  }

  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
      </div>
    );
  }
}

export default App;
