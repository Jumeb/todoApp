import React from 'react';
import {View, Text} from 'react-native';
import Modal from 'react-native-modal';

import styles from './splash.style';

const Splash = (props) => {
  const {text, slideIn} = props;
  return (
    <Modal
      style={styles.mainContainer}
      isVisible={slideIn}
      hasBackdrop={false}
      animationIn="fadeInDown"
      animationInTiming={1500}>
      <View style={styles.modalContent}>
        <Text style={styles.modalText}>{text}</Text>
      </View>
    </Modal>
  );
};

export default Splash;
