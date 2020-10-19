import {StyleSheet} from 'react-native';
import theme from '../../styles/theme';

const styles = StyleSheet.create({
  addButton: {
    position: 'absolute',
    bottom: 25,
    right: 15,
    borderColor: theme.PRIMARY_COLOR,
    backgroundColor: theme.PRIMARY_COLOR,
    borderWidth: 2,
    height: 60,
    width: 60,
    borderRadius: 50,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop: 60,
  },
  addButtonText: {
    color: theme.WHITE_COLOR,
    fontSize: 18,
  },
  addButtonTextDescription: {
    color: theme.WHITE_COLOR,
    fontWeight: '700',
    letterSpacing: 1.2,
  },
  addButtonTextLayout: {
    alignItems: 'center',
  },
});

export default styles;
