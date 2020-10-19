import {StyleSheet} from 'react-native';
import theme from '../../styles/theme';

const styles = StyleSheet.create({
  addButton: {
    position: 'absolute',
    bottom: 30,
    right: 15,
    borderColor: theme.PRIMARY_COLOR,
    backgroundColor: theme.PRIMARY_COLOR,
    borderWidth: 2,
    height: 70,
    width: 70,
    borderRadius: 50,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop: 60,
  },
  addButtonText: {
    color: theme.WHITE_COLOR,
    fontSize: 17,
  },
});

export default styles;
