import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import Icons from 'react-native-vector-icons/Ionicons';

import theme from '../../styles/theme';

const Header = (props) => {
  const {rightTitle, tasks} = props;
  return (
    <View style={styles.mainHeader}>
      <Text style={styles.mainHeaderText}>{rightTitle}</Text>
      <View style={styles.todoList}>
        <Icons name="list" size={28} color={theme.WHITE_COLOR} />
        <Text style={styles.todoCount}>{tasks.todoLength}</Text>
      </View>
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
