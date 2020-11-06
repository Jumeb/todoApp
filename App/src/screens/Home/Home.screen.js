import React, {useEffect, useState} from 'react';
import {Text, View, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {TodoList, AddButton} from '../../components';
import {AddModal, ConfirmNotification} from '../../modals';
import styles from './Home.style';
import {loadData} from '../../utils/storage';
import {AddTodo} from '../../redux/actions/TodoAction';
import {url} from '../../utils/globalVariable';

const Home = (props) => {
  const {tasks} = props;
  const [addModal, setAddModal] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [editTask, setEditTask] = useState({});
  const [func, setFunc] = useState('');

  useEffect(() => {
    loadData('Todos').then((todo) => console.log(todo, 'todos'));
  }, [tasks]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = () => {
    const listOfTodos = `${url}/todos`;
    // console.log(listOfTodos);
    fetch(listOfTodos)
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        // props.AddTodo(responseJson);
      })
      .catch((err) => console.log(err));
  };

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

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({AddTodo}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
