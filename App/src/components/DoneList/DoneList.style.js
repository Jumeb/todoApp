import {StyleSheet} from 'react-native';
import theme from '../../styles/theme';

const styles = StyleSheet.create({
  functionButton: {
    paddingVertical: 6,
    paddingHorizontal: 15,
    marginVertical: 5,
    borderRadius: 4,
    backgroundColor: theme.PRIMARY_COLOR,
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
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },
  todoInfo: {
    fontSize: 16,
    color: theme.TERTIARY_COLOR,
    flexWrap: 'wrap',
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  todoTitle: {
    backgroundColor: theme.PRIMARY_COLOR,
    borderTopRightRadius: 4,
    borderTopLeftRadius: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 6,
    paddingHorizontal: 8,
  },
  todoSubTitle: {
    color: theme.WHITE_COLOR,
    fontSize: 18,
  },
  createdOn: {
    color: theme.LIGHT_GREY,
    paddingHorizontal: 6,
    paddingVertical: 3,
    textAlign: 'right',
    fontSize: 12,
  },
});

export default styles;
