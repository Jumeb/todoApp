import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import moment from 'moment';
import Icons from 'react-native-vector-icons/Ionicons';

import {DoneTodo} from '../../redux/actions/DoneTodoAction';
import theme from '../../styles/theme';
import styles from './todoList.style';

const TodoList = (props) => {
  const {task, openModal, setFunc, setEditTask, openNotification} = props;

  const upDate = (todo, date, createdOn) => {
    setEditTask(todo, date, createdOn);
    setFunc('editTodo');
    openModal();
  };

  const DoneTask = (todoinfo, date, createdOn) => {
    const completedOn = new Date();
    props.DoneTodo(todoinfo, date, createdOn, completedOn);
  };

  const deleteTask = (todo, date, createdOn) => {
    setEditTask(todo, date, createdOn);
    openNotification();
  };

  return (
    <View style={styles.todoItem}>
      <View style={styles.todoTitle}>
        <Text style={styles.todoSubTitle}>Complete by</Text>
        <Text style={styles.todoSubTitle}>
          {moment(task.date).format('hh:mm a')}
        </Text>
      </View>
      <Text style={styles.todoInfo}>{task.todo}</Text>
      <View style={styles.functionButtonsContainer}>
        <TouchableOpacity
          onPress={() => upDate(task.todo, task.date, task.createdOn)}
          style={[
            styles.functionButton,
            {backgroundColor: theme.SUCCESS_COLOR},
          ]}>
          <Icons name="pencil-outline" size={20} color={theme.WHITE_COLOR} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.functionButton}
          onPress={() => DoneTask(task.todo, task.date, task.createdOn)}>
          <Icons
            name="ios-checkmark-done"
            size={20}
            color={theme.WHITE_COLOR}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.functionButton, {backgroundColor: theme.DANGER_COLOR}]}
          onPress={() => deleteTask(task.todo, task.date, task.createdOn)}>
          <Icons name="ios-trash-outline" size={20} color={theme.WHITE_COLOR} />
        </TouchableOpacity>
      </View>
      <Text style={styles.createdOn}>
        last updated {moment(task.createdOn).fromNow()}
      </Text>
    </View>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({DoneTodo}, dispatch);
};

export default connect(null, mapDispatchToProps)(TodoList);
