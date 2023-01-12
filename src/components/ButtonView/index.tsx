import React, { memo, useState } from 'react';
import {
  GestureResponderEvent,
  LayoutChangeEvent,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import * as styles from '../../styles';

export type ButtonViewProps = {
  styleView?: ViewStyle;
  styleText?: TextStyle;
  text?: string;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  onLayout?: ((event: LayoutChangeEvent) => void) | undefined;
  children?: React.ReactNode | undefined;
};

const ButtonView = ({
  styleView = {},
  styleText = {},
  text = '',
  onPress = undefined,
  onLayout = undefined,
  children = undefined,
}: ButtonViewProps) => {
  const [fontSize, setFontSize] = useState(16);

  const style = StyleSheet.create({
    view: {
      ...styles.button.view,
      ...styleView,
    },
    text: {
      ...styles.text.text,
      fontSize,
      ...styleText,
    },
  });

  const onLayoutView = (event: LayoutChangeEvent) => {
    const { height } = event.nativeEvent.layout;
    setFontSize(height * 0.66);
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={style.view} onLayout={onLayout || onLayoutView}>
        {text ? <Text style={style.text}>{text}</Text> : undefined}
        {children}
      </View>
    </TouchableOpacity>
  );
};

export default memo(ButtonView);
