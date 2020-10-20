import React from 'react';
import {Text, View} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';

import theme from '../../styles/theme';
import styles from './TabIcon.style';

const TabIcon = ({title, focused, selected}) => {
  let icon = '';
  if (title === 'Home') {
    icon = 'home-outline';
  }
  if (title === 'Done') {
    icon = 'checkmark-done-circle-outline';
  }

  return (
    <View style={styles.mainTab}>
      <Icons name={icon} size={25} color={theme.PRIMARY_COLOR} />
      <Text style={styles.tabText}>{title}</Text>
      {focused && <View style={styles.separator} />}
    </View>
  );
};

export default TabIcon;
