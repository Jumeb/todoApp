import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';

import styles from './Addbutton.styles';
import theme from '../../styles/theme';

const AddButton = (props) => {
  const {openModal, setFunc} = props;
  const addTodo = () => {
    setFunc('addTodo');
    openModal();
  };
  return (
    <TouchableOpacity style={styles.addButton} onPress={() => addTodo()}>
      <View>
        <Icons name="add" size={30} color={theme.WHITE_COLOR} />
      </View>
    </TouchableOpacity>
  );
};

export default AddButton;
