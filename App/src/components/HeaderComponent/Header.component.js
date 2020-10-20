import React, {useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import Icons from 'react-native-vector-icons/Ionicons';

import theme from '../../styles/theme';
import {Actions} from 'react-native-router-flux';

const Header = (props) => {
  const {rightTitle, tasks} = props;
  useEffect(() => {
    tasks;
  }, [tasks]);
  const taskLength = tasks.filter((len) => !len.completed);
  return (
    <View style={styles.mainHeader}>
      <Text style={styles.mainHeaderText}>{rightTitle}</Text>
      <TouchableOpacity style={styles.todoList} onPress={() => Actions.main()}>
        <Icons name="list" size={28} color={theme.WHITE_COLOR} />
        <Text style={styles.todoCount}>{taskLength.length}</Text>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = ({tasks}) => {
  return {tasks};
};

export default connect(mapStateToProps)(Header);

const styles = StyleSheet.create({
  mainHeader: {
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: theme.PRIMARY_COLOR,
    padding: 10,
    alignItems: 'center',
  },
  mainHeaderText: {
    fontSize: 20,
    color: theme.WHITE_COLOR,
    textAlign: 'center',
  },
  todoList: {
    flexDirection: 'row',
    position: 'absolute',
    right: 6,
    alignItems: 'flex-start',
  },
  todoCount: {
    height: 14,
    width: 14,
    borderRadius: 20,
    backgroundColor: theme.WHITE_COLOR,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 10,
    marginLeft: -10,
    color: theme.PRIMARY_COLOR,
  },
});
