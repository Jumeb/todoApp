import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';

import styles from './Addbutton.styles';
import theme from '../../styles/theme';

const AddButton = (props) => {
  const {openModal, setFunc, tasks} = props;
  const addTodo = () => {
    setFunc('addTodo');
    openModal();
  };
  return (
    <TouchableOpacity style={styles.addButton} onPress={() => addTodo()}>
      <View style={styles.addButtonTextLayout}>
        <Icons name="ios-add-outline" size={28} color={theme.WHITE_COLOR} />
      </View>
    </TouchableOpacity>
  );
};

const mapStateToProps = ({tasks}) => {
  return {tasks};
};

export default connect(mapStateToProps)(AddButton);
