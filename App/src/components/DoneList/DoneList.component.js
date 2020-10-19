import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import moment from 'moment';

import styles from './DoneList.style';

const DoneList = (props) => {
  const {done} = props;

  return (
    <View style={styles.todoItem}>
      <View style={styles.detailsDone}>
        <View style={styles.todoTitle}>
          <Text style={styles.todoSubTitle}>Created on</Text>
          <Text style={styles.todoSubTitle}>
            {moment(done.createdOn).format('hh:mm a')}
          </Text>
        </View>
        <View style={styles.completedStyle}>
          <Text style={styles.completedData}>Completed on</Text>
          <Text style={styles.completedData}>
            {moment(done.compeletedOn).format('hh:mm a')}
          </Text>
        </View>
      </View>
      <Text style={styles.todoInfo}>{done.todo}</Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <TouchableOpacity style={styles.functionButton}>
          <Text style={styles.functionButtonText}>Redo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.functionButton}>
          <Text style={styles.functionButtonText}>Done</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DoneList;
