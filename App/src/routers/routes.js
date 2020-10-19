import React from 'react';
import {StyleSheet} from 'react-native';
import {Router, Stack, Scene} from 'react-native-router-flux';
import {SplashScreen, Home, Done} from '../screens/index';
import {TabIcon, Header} from '../components';
import theme from '../styles/theme';

const Routers = () => {
  return (
    <Router>
      <Stack key="root" hideNavBar>
        <Scene key="welcome">
          <Scene key="SplashScreen" component={SplashScreen} hideNavBar />
        </Scene>
        <Scene
          key="main"
          tabs={true}
          showLabel={false}
          tabBarStyle={styles.tabBar}>
          <Scene
            key="Home"
            component={Home}
            title="Home"
            rightTitle="My Todos"
            navBar={Header}
            icon={TabIcon}
          />
          <Scene
            key="Done"
            component={Done}
            title="Done"
            icon={TabIcon}
            rightTitle="Done"
            navBar={Header}
          />
        </Scene>
      </Stack>
    </Router>
  );
};

export default Routers;

const styles = StyleSheet.create({
  tabBar: {
    borderTopColor: 'white',
    width: '90%',
    marginBottom: 10,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 25,
    shadowOffset: {width: 0, height: 1},
    elevation: 1,
    shadowOpacity: 0.2,
    shadowRadius: 2,
    borderTopWidth: 1,
  },
});
