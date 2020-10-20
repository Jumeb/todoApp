import React, {useEffect, useState} from 'react';
import {Text, View, ScrollView} from 'react-native';
import {connect} from 'react-redux';

import {TodoList, AddButton} from '../../components';
import {AddModal, ConfirmNotification} from '../../modals';
import styles from './Home.style';

const Home = (props) => {
  const {tasks} = props;
  const [addModal, setAddModal] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [editTask, setEditTask] = useState({});
  const [func, setFunc] = useState('');

  useEffect(() => {}, [tasks]);

  const openNotification = () => {
    setConfirm(!confirm);
  };

  const todos = tasks.filter((complete) => !complete.completed);

  const closeNotification = () => {
    setConfirm(false);
  };

  const closeModal = () => {
    setAddModal(false);
  };

  const openModal = () => {
    setAddModal(true);
  };

  return (
    <View style={styles.mainContainer}>
      <ScrollView>
        {todos.map((item, key) => (
          <TodoList
            task={item}
            openModal={openModal}
            openNotification={openNotification}
            setFunc={(text) => setFunc(text)}
            setEditTask={setEditTask}
            key={key}
          />
        ))}
      </ScrollView>
      <AddModal
        closeModal={closeModal}
        addModal={addModal}
        func={func}
        editTask={editTask}
      />
      <ConfirmNotification
        closeNotification={closeNotification}
        openNotification={openNotification}
        confirm={confirm}
        deleteTodo={editTask}
      />
      <AddButton openModal={openModal} setFunc={(text) => setFunc(text)} />
    </View>
  );
};

const mapStateToProps = (state) => {
  const {tasks} = state;
  return {tasks};
};

export default connect(mapStateToProps)(Home);
