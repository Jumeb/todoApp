import {StyleSheet} from 'react-native';
import theme from '../../styles/theme';

const styles = StyleSheet.create({
  functionButton: {
    padding: 10,
    marginVertical: 5,
  },
  functionButtonText: {
    fontSize: 15,
    color: theme.PRIMARY_COLOR,
  },
  todoItem: {
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 4,
    shadowColor: 'black',
    shadowOpacity: 0.8,
    elevation: 2,
    backgroundColor: theme.WHITE_COLOR,
    marginHorizontal: 8,
    marginVertical: 10,
    borderRadius: 4,
    padding: 8,
  },
  todoInfo: {
    fontSize: 16,
    color: theme.TERTIARY_COLOR,
  },
});

export default styles;
