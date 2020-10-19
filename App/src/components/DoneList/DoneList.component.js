import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import styles from './DoneList.style';

const DoneList = (props) => {
  const {done} = props;

  return (
    <View style={styles.todoItem}>
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
