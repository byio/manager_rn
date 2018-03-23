import React from 'react';
import { View, Text, Modal } from 'react-native';

import { CardSection } from './CardSection';
import { Button } from './Button';

const ConfirmModal = ({  }) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={() => {}}
    >
      <View>
        <CardSection>
          <Text>{children}</Text>
        </CardSection>
        <CardSection>
          <Button onPressProp={onAccept}>Yes</Button>
          <Button onPressProp={onDecline}>No</Button>
        </CardSection>
      </View>
    </Modal>
  );
};

export { ConfirmModal };
