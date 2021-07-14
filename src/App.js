import React from 'react'
import Todo from './components/TodoComponent/TodoComponent/Todo'
import './App.css';

class App extends React.Component{

  render(){
    return(
      <div className='App'>
        <h1>Todo App</h1>
        <Todo />
      </div>
    )
  }
}

export default App;
