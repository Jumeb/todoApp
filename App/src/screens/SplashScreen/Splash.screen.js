import React, {useState, useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';

import styles from './Splash.style';
import theme from '../../styles/theme';
import {Splash} from '../../modals';
import {Actions} from 'react-native-router-flux';
import {Text, View} from 'react-native';
import {AddTodo} from '../../redux/actions/TodoAction';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {loadData} from '../../utils/storage';

const SplashScreen = (props) => {
  const [slideIn, setSlideIn] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      Actions.Auth();
      setSlideIn(false);
    }, 1000);
    loadData('Todos')
      .then((todo) => {
        console.log(todo, 'from storage');
        props.AddTodo(todo);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <LinearGradient
      style={styles.mainContainer}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      colors={[theme.TERTIARY_COLOR, theme.PRIMARY_COLOR]}>
      <View>
        <Splash text="My Todos" slideIn={slideIn} />
      </View>
      <Text style={styles.company}>Made by JB.Inc</Text>
    </LinearGradient>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({AddTodo}, dispatch);
};

export default connect(null, mapDispatchToProps)(SplashScreen);
