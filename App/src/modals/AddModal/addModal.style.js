import {StyleSheet} from 'react-native';
import theme from '../../styles/theme';

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'transparent',
  },
  modalContent: {
    backgroundColor: theme.WHITE_COLOR,
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 4,
  },
  functionButton: {
    padding: 8,
    backgroundColor: theme.PRIMARY_COLOR,
    borderRadius: 4,
    marginHorizontal: 80,
    marginTop: 20,
  },
  functionButtonText: {
    fontSize: 16,
    color: theme.WHITE_COLOR,
    textAlign: 'center',
  },
});

export default styles;
