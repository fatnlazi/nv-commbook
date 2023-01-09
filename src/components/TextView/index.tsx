import React, { useState } from 'react';
import {
  LayoutChangeEvent,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import * as styles from '../../styles';

export default function TextView({
  styleView = {},
  styleText = {},
  text = '',
}: {
  styleView?: ViewStyle;
  styleText?: TextStyle;
  text?: string;
}) {
  const [fontSize, setFontSize] = useState(16);

  const style = StyleSheet.create({
    view: {
      ...styles.text.view,
      ...styles.border.off,
      ...styleView,
      backgroundColor: undefined,
    },
    text: {
      ...styles.text.text,
      ...styleText,
      fontSize: fontSize,
    },
  });

  const onLayoutView = (event: LayoutChangeEvent) => {
    const height = event.nativeEvent.layout.height;
    setFontSize(height * 0.7);
  };

  return (
    <View style={style.view} onLayout={onLayoutView}>
      <Text style={style.text}>{text}</Text>
    </View>
  );
}
