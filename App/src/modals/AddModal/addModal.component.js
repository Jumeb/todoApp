import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Platform} from 'react-native';
import Modal from 'react-native-modal';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

import {AddTodo, EditTodo} from '../../redux/actions/TodoAction';
import {Input} from '../../components';
import styles from './addModal.style';

const AddModal = (props) => {
  const {addModal, closeModal, editTask, func} = props;
  const [todoInfo, setTodoInfo] = useState('');
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date());
  const [createdOn, setCreatedOn] = useState(new Date());

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
    setDatePicker();
  };

  const setDatePicker = () => {
    setShow(!show);
  };

  useEffect(() => {
    if (editTask.todo) {
      setTodoInfo(editTask.todo);
    }
  }, [editTask]);

  const resetModal = () => {
    closeModal();
    setTodoInfo('');
  };

  const perform = () => {
    if (func === 'addTodo') {
      if (todoInfo) {
        props.AddTodo(todoInfo, date, createdOn);
        closeModal();
        setCreatedOn(new Date());
        setTodoInfo('');
      }
      closeModal();
    } else if (func === 'editTodo') {
      const createdOn = new Date();
      props.EditTodo(todoInfo, date, createdOn);
      closeModal();
      setTodoInfo('');
      closeModal();
    }
  };
  return (
    <Modal
      isVisible={addModal}
      // hasBackdrop={false}
      backdropOpacity={0.6}
      onBackdropPress={() => closeModal()}
      swipeDirection={['down']}
      animationInTiming={1000}
      animationOutTiming={900}
      onSwipeComplete={() => closeModal()}
      style={styles.mainContainer}>
      <View style={styles.modalContent}>
        <Input
          capitalze="sentences"
          value={todoInfo}
          setTodo={(text) => setTodoInfo(text)}
        />
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode="time"
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}
        <DateInput setShow={setDatePicker} date={date} />
        <View style={styles.functionButtonsContainer}>
          <TouchableOpacity
            style={styles.functionButton}
            onPress={() => resetModal()}>
            <Text style={styles.functionButtonText}>Cancel</Text>
          </TouchableOpacity>

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
      </View>
    </Modal>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({AddTodo, EditTodo}, dispatch);
};

export default connect(null, mapDispatchToProps)(AddModal);

const DateInput = ({setShow, date}) => {
  return (
    <View style={styles.dateContainer}>
      <Text style={styles.dateContainerPlaceHolder}>
        {moment(date.getTime()).format('hh:mm a')}
      </Text>
      <TouchableOpacity style={styles.dateButton} onPress={() => setShow()}>
        <Text style={styles.dateButtonText}>Set Date</Text>
      </TouchableOpacity>
    </View>
  );
};
