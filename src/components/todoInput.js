import React from 'react';
import './../styles.css';
import * as CssClassNames from './CssClassNames';

export default class ToDoInput extends React.Component {
    constructor(props) {
        super(props);

        this.addTodo = this.addTodo.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    addTodo() {
        // Generating some random number between 0 to 99, TO avoid Already Exist functionality frequently, 
        // if not we can use the increment by one

        // cosnt text = 'Todo_'+(this.props.totalToDos+ 1);
        
        const text = 'Todo_'+(this.props.totalToDos+Math.floor(Math.random() * 99) + 1);
        this.props.addTodo(text);
        
        // Below code I tried adding input field, After realized no need this.

        // if (todo.length > 0) {
        //     this.props.addTodo(todo);
        //     this.setState({ value: '' });
        // }
        // else{
        //     alert('TODO cannot be empty..');
        // }

    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    render() {
        return (
            <div>
                <div className={CssClassNames.TodoInput.COUNTERS}>
                    <span>
                        Item count: {this.props.totalToDos}
                    </span>
                    <span>
                        Unchecked count: {this.props.totalUncheckedToDos}
                    </span>
                </div>
                <div className={CssClassNames.TodoInput.COUNTERS}>
                    <button className={CssClassNames.TodoInput.BUTTON} 
                            onClick={() => this.addTodo()}>
                        New TODO
                    </button>
                </div>
            </div>
        );
    }
}