import React from 'react';
import {
  GestureResponderEvent,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

export default function ButtonView({
  styleView = {},
  onPress = undefined,
  children = undefined,
}: {
  styleView?: ViewStyle;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  children?: React.ReactNode | undefined;
}) {
  const sty = StyleSheet.create({
    view: {
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center',
      ...styleView,
    },
  });

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={sty.view}>{children}</View>
    </TouchableOpacity>
  );
}
