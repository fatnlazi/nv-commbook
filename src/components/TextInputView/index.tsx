import React, { memo, useState } from 'react';
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

export type TextInputViewProps = {
  styleView?: ViewStyle;
  styleText?: TextStyle;
  placeholder?: string | undefined;
  onEndEditing?:
    | ((event: NativeSyntheticEvent<TextInputEndEditingEventData>) => void)
    | undefined;
  onLayout?: ((event: LayoutChangeEvent) => void) | undefined;
};

const TextInputView = ({
  styleView = {},
  styleText = {},
  placeholder = undefined,
  onEndEditing = undefined,
  onLayout = undefined,
}: TextInputViewProps) => {
  const [fontSize, setFontSize] = useState(16);

  const style = StyleSheet.create({
    view: {
      ...styles.text.view,
      ...styleView,
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
      <TextInput
        style={style.text}
        placeholder={placeholder}
        onEndEditing={onEndEditing}
      />
    </View>
  );
};

export default memo(TextInputView);
