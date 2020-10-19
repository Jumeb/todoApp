import React, {useEffect, useState} from 'react';
import {View, ScrollView} from 'react-native';
import {connect} from 'react-redux';

import {DoneList} from '../../components';
import {AddModal, ConfirmNotification} from '../../modals';
import styles from './Done.style';

const Done = (props) => {
  const {done} = props;
  const [addModal, setAddModal] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [editTask, setEditTask] = useState({});
  const [func, setFunc] = useState('');

  useEffect(() => {}, [done]);

  const openNotification = () => {
    setConfirm(!confirm);
  };

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
        {done.doneList.map((item, key) => (
          <DoneList done={item} key={key} />
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
    </View>
  );
};

const mapStateToProps = (state) => {
  const {done} = state;
  return {done};
};

export default connect(mapStateToProps)(Done);
