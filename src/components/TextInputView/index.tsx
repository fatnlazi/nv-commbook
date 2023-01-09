import React, { useState } from 'react';
import {
  LayoutChangeEvent,
  NativeSyntheticEvent,
  StyleSheet,
  TextInput,
  TextInputEndEditingEventData,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import * as styles from '../../styles';

export default function TextInputView({
  styleView = {},
  styleText = {},
  placeholder = undefined,
  onEndEditing = undefined,
  onLayout = undefined,
}: {
  styleView?: ViewStyle;
  styleText?: TextStyle;
  placeholder?: string | undefined;
  onEndEditing?:
    | ((event: NativeSyntheticEvent<TextInputEndEditingEventData>) => void)
    | undefined;
  onLayout?: ((event: LayoutChangeEvent) => void) | undefined;
}) {
  const [fontSize, setFontSize] = useState(16);

  const style = StyleSheet.create({
    view: {
      ...styles.text.view,
      ...styleView,
    },
    text: {
      ...styles.text.text,
      ...styleText,
      fontSize: fontSize,
    },
  });

  // const onLayoutView = (event: LayoutChangeEvent) => {
  //   const height = event.nativeEvent.layout.height;
  //   setFontSize(height * 0.7);
  // };

  return (
    <View style={style.view} onLayout={onLayout}>
      <TextInput
        style={style.text}
        placeholder={placeholder}
        onEndEditing={onEndEditing}
      />
    </View>
  );
}
