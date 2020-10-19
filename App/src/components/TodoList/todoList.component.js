import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {DoneTodo} from '../../redux/actions/DoneTodoAction';

import styles from './todoList.style';

const TodoList = (props) => {
  const {task, openModal, setFunc, setEditTask, openNotification} = props;

  const upDate = (id, todoinfo) => {
    setEditTask(id, todoinfo);
    setFunc('editTodo');
    openModal();
  };

  const DoneTask = (id, todoinfo) => {
    props.DoneTodo(id, todoinfo);
  };

  const deleteTask = (id, todoInfo) => {
    setEditTask(id, todoInfo);
    openNotification();
  };

  return (
    <View style={styles.todoItem}>
      <Text style={styles.todoInfo}>{task.todo}</Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <TouchableOpacity
          onPress={() => upDate(task.id, task.todo)}
          style={styles.functionButton}>
          <Text style={styles.functionButtonText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.functionButton}>
          <Text
            style={styles.functionButtonText}
            onPress={() => DoneTask(task.id, task.todo)}>
            Done
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.functionButton}
          onPress={() => deleteTask(task.id, task.todo)}>
          <Text style={styles.functionButtonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({DoneTodo}, dispatch);
};

export default connect(null, mapDispatchToProps)(TodoList);
