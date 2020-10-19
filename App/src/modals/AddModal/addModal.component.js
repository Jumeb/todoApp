import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {AddTodo, EditTodo} from '../../redux/actions/TodoAction';
import {Input} from '../../components';
import styles from './addModal.style';

const AddModal = (props) => {
  const {addModal, closeModal, editTask, func} = props;
  const [todoInfo, setTodoInfo] = useState('');

  useEffect(() => {
    if (editTask.todo) {
      setTodoInfo(editTask.todo);
    }
  }, [editTask]);

  const perform = () => {
    if (func === 'addTodo') {
      if (todoInfo) {
        props.AddTodo(todoInfo);
        closeModal();
        setTodoInfo('');
      }
      closeModal();
    } else if (func === 'editTodo') {
      const {id} = editTask;
      props.EditTodo(id, todoInfo);
      closeModal();
      setTodoInfo('');
      closeModal();
    }
  };
  return (
    <Modal
      isVisible={addModal}
      hasBackdrop={false}
      style={styles.mainContainer}>
      <View style={styles.modalContent}>
        <Input
          capitalze="sentences"
          value={todoInfo}
          setTodo={(text) => setTodoInfo(text)}
        />
        <TouchableOpacity
          style={styles.functionButton}
          onPress={() => perform()}>
          <Text style={styles.functionButtonText}>
            {todoInfo.length < 10
              ? 'Enter Todo'
              : func === 'addTodo'
              ? 'Add Todo'
              : 'Edit Todo'}
          </Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({AddTodo, EditTodo}, dispatch);
};

export default connect(null, mapDispatchToProps)(AddModal);
