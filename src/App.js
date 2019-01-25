import React, { Component } from 'react';
import './styles.css';

import Header from './components/header';
import ToDoInput from './components/todoInput';
import TodoItem from './components/todoItem';
import * as CssClassNames from './components/CssClassNames';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [ ],
      nextId: 0,
      totalToDos: 0,
      totalUncheckedToDos: 0
    }

    this.addToDo = this.addToDo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.checkTodo = this.checkTodo.bind(this);

  }

  addToDo(todoText) {
    
    const todo = this.state.todos.find(x => x.text === todoText);
    if (todo) {
      alert('Already exists '+todoText);
    }
    else {
      const todos = this.state.todos.slice();
      const newId = this.state.newId;
      todos.push({ id: this.state.nextId, text: todoText });
      this.checkTodo(newId, false);
      this.setState({
        todos: todos,
        nextId: this.state.nextId + 1,
        totalToDos: this.state.totalToDos + 1
      });
    }
  }

  removeTodo(id, checked) {
    const totalToDos = this.state.totalToDos;
    const totalUncheckedToDos = this.state.totalUncheckedToDos;

    this.setState({
      todos: this.state.todos.filter((todo, index) => todo.id !== id),
      totalToDos: totalToDos - 1,
      totalUncheckedToDos: checked ? totalUncheckedToDos : totalUncheckedToDos - 1
    });
  }

  checkTodo(id, checked) {
    const todos = this.state.todos;
    const totalUncheckedToDos = this.state.totalUncheckedToDos;
    
    this.setState({
      todos: todos.map(x => {
        if (x.id === id) {
          x.checked = checked;
        }
        return x;
      })
    });
    if (checked){
      this.setState({totalUncheckedToDos: totalUncheckedToDos-1});
    } else{
      this.setState({totalUncheckedToDos: totalUncheckedToDos+1});
    }
  }

  render() {
    const todoItem = this.state.todos.map((todo) => {
                        return <TodoItem todo={todo} 
                                        key={todo.id} 
                                        id={todo.id} 
                                        removeTodo={this.removeTodo} 
                                        checkTodo={this.checkTodo} 
                                        checked={todo.checked} />
                      });
    return (
      <div className={"container center"}>
        <Header />
        <ToDoInput todoText="" 
                  addTodo={this.addToDo} 
                  totalToDos={this.state.totalToDos} 
                  totalUncheckedToDos={this.state.totalUncheckedToDos} />
        <ul className={CssClassNames.TodoItems.TODO_LIST} id="todo-list">
          { todoItem }
        </ul>
      </div>
    );
  }
}

export default App;
