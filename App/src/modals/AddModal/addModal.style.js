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
    marginTop: 10,
  },
  functionButtonText: {
    fontSize: 16,
    color: theme.WHITE_COLOR,
    textAlign: 'center',
  },
  functionButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1.5,
    borderTopColor: theme.SECONDARY_COLOR,
    marginTop: 25,
  },
  dateContainer: {
    borderColor: theme.PRIMARY_COLOR,
    borderRadius: 4,
    borderWidth: 1.3,
    paddingLeft: 9,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  dateContainerPlaceHolder: {
    color: theme.LIGHT_GREY,
    letterSpacing: 1.4,
  },
  dateButton: {
    alignSelf: 'flex-end',
    marginRight: -2,
    padding: 10,
    paddingHorizontal: 12,
    backgroundColor: theme.PRIMARY_COLOR,
    borderRadius: 4,
  },
  dateButtonText: {
    color: theme.WHITE_COLOR,
  },
});

export default styles;
