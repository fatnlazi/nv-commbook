import React, { memo } from 'react';
import { Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SafeAreaView from '../../components/SafeAreaView';
import useLayout from '../../hooks/useLayout';
import ButtonView from '../../components/ButtonView';

const HomeScreen = () => {
  const [layoutSafeArea, onLayoutSafeArea] = useLayout();
  const navigation = useNavigation();

  return (
    <SafeAreaView onLayoutView={onLayoutSafeArea}>
      <ButtonView
        styleView={{
          height: 64,
          width: 362,
        }}
        text="GoToPropsScreen"
        onPress={() => navigation.navigate('Props')}
      />
    </SafeAreaView>
  );
};

export default memo(HomeScreen);
