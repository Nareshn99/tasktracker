/* eslint-disable*/

import React from 'react';
import InputTask from './InputTask';
import Header from './Header';
import Task from './Task';

class TaskContainer extends React.Component {
  state = {
    todos: [
      {
        id: new Date(),
        title: 'Setup development environment',
        completed: false,
      },
      {
        id: new Date(),
        title: 'Develop website and add content',
        completed: false,
      },
      {
        id:new Date(),
        title: 'Deploy to live server',
        completed: false,
      },
    ],
  };

  handleChange = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    }));
  }

  delTodo = (id) => {
    this.setState({
      todos: [
        ...this.state.todos.filter((todo) => todo.id !== id),
      ],
    });
  };

  addTask = (title) => {
    const newTodo = {
      id: new Date(),
      title,
      completed: false,
    };
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  };

  setUpdate = (updatedTitle, id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.title = updatedTitle;
        }
        return todo;
      }),
    });
  }

  render() {
    return (
      <div className="container">
        <div className="inner">
          <Header />
          <InputTask addTodoProps={this.addTask} />
          <Task
            todos={this.state.todos}
            handleChangeProps={this.handleChange}
            deleteTodoProps={this.delTodo}
            setUpdate={this.setUpdate}
          />
        </div>
      </div>
    );
  }
}
export default TaskContainer;
