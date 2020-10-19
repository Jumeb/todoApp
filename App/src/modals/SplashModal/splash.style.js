import {StyleSheet} from 'react-native';
import theme from '../../styles/theme';

const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: 60,
  },
  modalContent: {
    borderWidth: 5,
    borderColor: theme.WHITE_COLOR,
    paddingVertical: 8,
    borderRadius: 8,
  },
  modalText: {
    fontSize: 26,
    textAlign: 'center',
    fontWeight: '700',
    letterSpacing: 3,
    color: theme.WHITE_COLOR,
  },
});

export default styles;
