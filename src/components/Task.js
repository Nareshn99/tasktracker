/* eslint-disable*/
import React from 'react';
import TaskIteam from './TaskIteam';

class TaskContainer extends React.Component {
  render() {
    return (
      <ul>
        {this.props.todos.map((todo) => (
          <TaskIteam
            key={todo.id}
            todo={todo}
            handleChangeProps={this.props.handleChangeProps}
            deleteTodoProps={this.props.deleteTodoProps}
            setUpdate={this.props.setUpdate}
          />

        ))}
      </ul>
    );
  }
}
export default TaskContainer;
