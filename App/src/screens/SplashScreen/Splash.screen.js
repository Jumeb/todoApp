import React, {useState, useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';

import styles from './Splash.style';
import theme from '../../styles/theme';
import {Splash} from '../../modals';
import {Actions} from 'react-native-router-flux';
import {Text, View} from 'react-native';

const SplashScreen = () => {
  const [slideIn, setSlideIn] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      Actions.main();
      setSlideIn(false);
    }, 1000);
  });
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

export default SplashScreen;
