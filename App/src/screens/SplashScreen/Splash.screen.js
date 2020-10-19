import React, {useState, useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';

import styles from './Splash.style';
import theme from '../../styles/theme';
import {Splash} from '../../modals';
import {Actions} from 'react-native-router-flux';

const SplashScreen = () => {
  const [slideIn, setSlideIn] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      Actions.main();
      setSlideIn(false);
    }, 2500);
  });
  return (
    <LinearGradient
      style={styles.mainContainer}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      colors={[theme.TERTIARY_COLOR, theme.PRIMARY_COLOR]}>
      <Splash text="My Todos" slideIn={slideIn} />
    </LinearGradient>
  );
};

export default SplashScreen;
