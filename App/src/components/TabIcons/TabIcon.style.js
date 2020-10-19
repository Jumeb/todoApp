import {StyleSheet} from 'react-native';
import theme from '../../styles/theme';

const styles = StyleSheet.create({
  mainTab: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  tabIcon: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: theme.PRIMARY_COLOR,
    borderRadius: 10,
  },
  tabText: {
    fontSize: 10,
    color: theme.PRIMARY_COLOR,
  },
});

export default styles;
