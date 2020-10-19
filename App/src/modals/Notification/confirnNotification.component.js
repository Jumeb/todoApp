import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {DeletedTodo} from '../../redux/actions/DeletedTodoAction';
import styles from './confirmNotification.style';

const ConfirmNotification = (props) => {
  const {closeNotification, confirm, deleteTodo} = props;

  const Delete = () => {
    const {todo} = deleteTodo;
    props.DeletedTodo(todo);
    closeNotification();
  };
  return (
    <Modal style={styles.mainContainer} isVisible={confirm} hasBackdrop={false}>
      <View style={styles.modalTitle}>
        <Text style={styles.modalTitleText}>Delete</Text>
      </View>
      <View style={styles.modalContent}>
        <View style={styles.deleteDetails}>
          <Text style={styles.deleteDetailsText}>Do you want to delete?</Text>
          <Text style={styles.deleteDetailsText}> {deleteTodo.todo}</Text>
        </View>
        <View style={styles.modalButtonsContainer}>
          <TouchableOpacity
            style={styles.modalButtons}
            onPress={() => closeNotification()}>
            <Text style={styles.modalButtonsText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.modalButtons}
            onPress={() => Delete()}>
            <Text style={styles.modalButtonsText}>Confirm</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({DeletedTodo}, dispatch);
};

export default connect(null, mapDispatchToProps)(ConfirmNotification);
