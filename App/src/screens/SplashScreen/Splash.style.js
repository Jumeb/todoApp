import {StyleSheet} from 'react-native';
import theme from '../../styles/theme';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  company: {
    fontSize: 18,
    color: theme.WHITE_COLOR,
    letterSpacing: 1.8,
    position: 'absolute',
    bottom: 7,
    textAlign: 'center',
  },
});

export default styles;
