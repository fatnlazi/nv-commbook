import React, { memo } from 'react';
import { StyleSheet, Text, TextStyle, ViewStyle } from 'react-native';
import { useFontSize } from '../../hooks';
import * as constant from '../../constant';

export type MyTextProps = {
  style?: TextStyle | ViewStyle | undefined;
  text?: string;
};

const MyText = ({ style = undefined, text = '' }: MyTextProps) => {
  const [fontSize, onLayout] = useFontSize();

  const styleDefault = StyleSheet.compose(
    {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      fontSize,
      color: constant.text.color,
    },
    style
  );

  return (
    <Text onLayout={onLayout} style={styleDefault}>
      {text}
    </Text>
  );
};

export default memo(MyText);
