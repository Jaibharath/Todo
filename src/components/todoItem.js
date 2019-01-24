import React from 'react';
import './../styles.css';
import * as CssClassNames from './CssClassNames';

export default class TodoItem extends React.Component {

  removeTodo(id, checked) {
    this.props.removeTodo(id, checked);
  }

  render() {
    return (
      <div className={CssClassNames.TodoItems.TODO_ITEM}>
        <label className={CssClassNames.TodoItems.TODO_TEXT}>
            <input type="checkbox" 
                  className={CssClassNames.TodoItems.TODO_CHECKBOX} 
                  defaultChecked={this.props.checked} 
                  onClick={(e)=> this.props.checkTodo(this.props.id,e.target.checked) }/>
            {this.props.todo.text}
        </label>
        <button className={CssClassNames.TodoItems.TODO_DELETE} 
                onClick={(e)=> this.removeTodo(this.props.id, this.props.checked) }>Remove</button>
      </div>
    );
  }
}
