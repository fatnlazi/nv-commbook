import React, { useState } from 'react';
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

const ButtonView = ({
  styleView = {},
  styleText = {},
  text = '',
  onPress = undefined,
  children = undefined,
}: {
  styleView?: ViewStyle;
  styleText?: TextStyle;
  text?: string;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  children?: React.ReactNode | undefined;
}) => {
  const [fontSize, setFontSize] = useState(16);

  const style = StyleSheet.create({
    view: {
      ...styles.button.view,
      ...styleView,
    },
    text: {
      ...styles.text.text,
      fontSize: fontSize,
      ...styleText,
    },
  });

  const onLayoutView = (event: LayoutChangeEvent) => {
    const height = event.nativeEvent.layout.height;
    setFontSize(height * 0.66);
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={style.view} onLayout={onLayoutView}>
        {text ? <Text style={style.text}>{text}</Text> : undefined}
        {children}
      </View>
    </TouchableOpacity>
  );
};

export default ButtonView;
