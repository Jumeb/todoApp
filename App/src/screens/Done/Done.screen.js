import React, {useEffect, useState} from 'react';
import {View, ScrollView} from 'react-native';
import {connect} from 'react-redux';

import {DoneList} from '../../components';
import {AddModal, ConfirmNotification, Success} from '../../modals';
import styles from './Done.style';

const Done = (props) => {
  const {tasks} = props;
  const [confirm, setConfirm] = useState(false);
  const [success, setSuccess] = useState(false);
  const [deleteTask, setDeleteTask] = useState({});

  const openNotification = () => {
    setConfirm(!confirm);
  };

  const closeNotification = () => {
    setConfirm(false);
  };

  const doneTodos = tasks.filter((complete) => complete.completed);

  return (
    <View style={styles.mainContainer}>
      <ScrollView>
        {doneTodos.map((item, key) => (
          <DoneList
            done={item}
            key={key}
            setDeleteTask={setDeleteTask}
            openNotification={openNotification}
            setSuccess={setSuccess}
          />
        ))}
      </ScrollView>
      <ConfirmNotification
        closeNotification={closeNotification}
        confirm={confirm}
        deleteTodo={deleteTask}
        setDeleteTask={setDeleteTask}
      />
      <Success success={success} />
    </View>
  );
};

const mapStateToProps = (state) => {
  const {tasks} = state;
  return {tasks};
};

export default connect(mapStateToProps)(Done);
