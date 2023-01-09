import React from 'react';
import { Dimensions, Text } from 'react-native';
import SafeAreaView from '../../components/SafeAreaView';
import useLayout from '../../hooks/useLayout';

const HomeScreen = () => {
  const [layoutSafeArea, onLayoutSafeArea] = useLayout();

  console.log(JSON.stringify(layoutSafeArea));
  console.log(JSON.stringify(Dimensions.get('window')));

  return (
    <SafeAreaView onLayoutView={onLayoutSafeArea}>
      <Text>{'HELLO'}</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
