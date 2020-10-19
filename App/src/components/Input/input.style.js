import {StyleSheet} from 'react-native';
import theme from '../../styles/theme';

const styles = StyleSheet.create({
  todoInputContainer: {
    marginVertical: 10,
  },
  todoInputLabel: {
    color: theme.PRIMARY_COLOR,
    fontSize: 16,
  },
  todoInput: {
    borderColor: theme.PRIMARY_COLOR,
    borderRadius: 4,
    borderWidth: 1.3,
    paddingVertical: 6,
    paddingHorizontal: 9,
  },
});

export default styles;
