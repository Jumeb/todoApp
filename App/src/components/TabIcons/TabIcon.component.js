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
      <Icons
        name={icon}
        size={20}
        color={selected ? theme.PRIMARY_COLOR : theme.WHITE_COLOR}
        style={styles.tabIcon}
      />
      {focused && <Text style={styles.tabText}>{title}</Text>}
    </View>
  );
};

export default TabIcon;
