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
  separator: {
    borderWidth: 1.4,
    borderColor: theme.PRIMARY_COLOR,
    width: 90,
  },
});

export default styles;
