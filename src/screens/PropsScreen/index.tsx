import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ButtonView from '../../components/ButtonView';
import SafeAreaView from '../../components/SafeAreaView';
import useLayout from '../../hooks/useLayout';
import * as styles from '../../styles';

const PropsScreen = () => {
  const navigation = useNavigation();
  const [layoutSafeArea, onLayoutSafeArea] = useLayout();

  return (
    <SafeAreaView
      onLayoutView={onLayoutSafeArea}
      styleView={{ ...styles.flex.start }}
    >
      <ButtonView
        styleView={{
          height: 0,
          width: 0,
          ...styles.margin.on,
        }}
        text="XONG"
      />
    </SafeAreaView>
  );
};

export default PropsScreen;
