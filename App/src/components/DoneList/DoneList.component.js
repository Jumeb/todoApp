import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import moment from 'moment';
import Icons from 'react-native-vector-icons/Ionicons';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import styles from './DoneList.style';
import theme from '../../styles/theme';
import {RedoTodo} from '../../redux/actions/DoneTodoAction';
import {Actions} from 'react-native-router-flux';

const DoneList = (props) => {
  const {done, RedoTodo, setDeleteTask, openNotification, setSuccess} = props;

  const redoTodo = (id) => {
    RedoTodo(id);
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
    }, 1000);
  };

  const deleteTask = (id, todo) => {
    const deleteTodo = {id, todo};
    setDeleteTask(deleteTodo);
    openNotification();
  };

  return (
    <View style={styles.todoItem}>
      <View style={styles.todoTitle}>
        <Text style={styles.todoSubTitle}>Completed on</Text>
        <Text style={styles.todoSubTitle}>
          {moment(done.completed_on).format('hh:mm a')}
        </Text>
      </View>
      <Text style={styles.todoInfo}>{done.title}</Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <TouchableOpacity
          style={styles.functionButton}
          onPress={() => redoTodo(done.id)}>
          <Icons name="return-up-back" size={20} color={theme.WHITE_COLOR} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => deleteTask(done.id, done.todo)}
          style={[
            styles.functionButton,
            {backgroundColor: theme.DANGER_COLOR},
          ]}>
          <Icons name="ios-trash-outline" size={20} color={theme.WHITE_COLOR} />
        </TouchableOpacity>
      </View>
      <Text style={styles.createdOn}>
        Created {moment(done.created_on).format('hh:mm a')}
      </Text>
    </View>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({RedoTodo}, dispatch);
};

export default connect(null, mapDispatchToProps)(DoneList);
