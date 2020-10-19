import React from 'react';
import {Text, TextInput, View} from 'react-native';

import styles from './input.style';

const Input = (props) => {
  const {capitalize, value, setTodo} = props;
  return (
    <View style={styles.todoInputContainer}>
      <Text style={styles.todoInputLabel}>Todo</Text>
      <TextInput
        placeholder="Go partying at 10PM"
        style={styles.todoInput}
        value={value}
        capitalize={capitalize}
        onChangeText={(text) => setTodo(text)}
      />
    </View>
  );
};

export default Input;
