import React, { memo } from 'react';
import { LayoutChangeEvent, StyleSheet, View, ViewStyle } from 'react-native';
import { SafeAreaView as OrgSafeAreaView } from 'react-native-safe-area-context';
import * as styles from '../../styles';

const SafeAreaView = ({
  children = undefined,
  onLayoutView = undefined,
  styleView = {},
}: {
  children?: React.ReactNode | undefined;
  onLayoutView?: ((event: LayoutChangeEvent) => void) | undefined;
  styleView?: ViewStyle;
}) => {
  const style = StyleSheet.create({
    safe: {
      ...styles.flex.column,
      ...styles.flex.center,
      flex: 1,
      height: '100%',
      width: '100%',
      ...styleView,
    },
    view: {
      ...styles.flex.column,
      ...styles.flex.center,
      height: '100%',
      width: '100%',
      ...styleView,
    },
  });

  return (
    <OrgSafeAreaView style={style.safe}>
      <View onLayout={onLayoutView} style={style.view}>
        {children}
      </View>
    </OrgSafeAreaView>
  );
};

export default memo(SafeAreaView);
