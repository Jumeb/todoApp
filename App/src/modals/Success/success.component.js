import React from 'react';
import {View} from 'react-native';
import Modal from 'react-native-modal';
import Icons from 'react-native-vector-icons/Ionicons';

import styles from './success.style';
import theme from '../../styles/theme';

const Success = (props) => {
  const {success} = props;
  return (
    <Modal
      isVisible={success}
      hasBackdrop={false}
      style={styles.mainContainer}
      animationInTiming={450}
      animationOutTiming={450}
      animationOut="fadeOutLeft"
      animationIn="fadeInRight">
      <View style={styles.container}>
        <Icons name="checkmark-sharp" size={50} color={theme.WHITE_COLOR} />
      </View>
    </Modal>
  );
};

export default Success;
