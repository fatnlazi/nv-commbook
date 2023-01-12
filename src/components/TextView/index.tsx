import React, { memo, useState } from 'react';
import {
  LayoutChangeEvent,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import * as styles from '../../styles';

export type TextViewProps = {
  styleView?: ViewStyle;
  styleText?: TextStyle;
  text?: string;
  onLayout?: ((event: LayoutChangeEvent) => void) | undefined;
};

const TextView = ({
  styleView = {},
  styleText = {},
  text = '',
  onLayout = undefined,
}: TextViewProps) => {
  const [fontSize, setFontSize] = useState<number>(16);

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
      fontSize,
    },
  });

  const onLayoutView = (event: LayoutChangeEvent) => {
    const { height } = event.nativeEvent.layout;
    setFontSize(height * 0.7);
  };

  return (
    <View style={style.view} onLayout={onLayout || onLayoutView}>
      <Text style={style.text}>{text}</Text>
    </View>
  );
};

export default memo(TextView);
