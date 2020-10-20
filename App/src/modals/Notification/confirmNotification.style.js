import {StyleSheet} from 'react-native';
import theme from '../../styles/theme';

const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: 20,
  },
  modalContent: {
    backgroundColor: theme.WHITE_COLOR,
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderBottomLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  deleteDetails: {
    alignItems: 'center',
  },
  deleteDetailsText: {
    fontSize: 15,
  },
  modalTitle: {
    backgroundColor: theme.DANGER_COLOR,
    borderTopRightRadius: 4,
    borderTopLeftRadius: 4,
    padding: 13,
  },
  modalTitleText: {
    textAlign: 'center',
    fontSize: 19,
    color: theme.WHITE_COLOR,
  },
  modalButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  modalButtons: {
    backgroundColor: theme.PRIMARY_COLOR,
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 4,
    marginTop: 20,
  },
  modalButtonsText: {
    fontSize: 16,
    color: theme.WHITE_COLOR,
  },
});

export default styles;
