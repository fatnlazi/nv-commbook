import React from 'react';
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

export default function TextInputView({
  styleView = {},
  styleText = {},
  placeholder = undefined,
  onEndEditing = undefined,
}: {
  styleView?: ViewStyle;
  styleText?: TextStyle;
  placeholder?: string | undefined;
  onEndEditing?:
    | ((event: NativeSyntheticEvent<TextInputEndEditingEventData>) => void)
    | undefined;
}) {
  const sty = StyleSheet.create({
    view: {
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center',
      ...styleView,
    },
    text: {
      height: '96%',
      width: '92%',
      ...styleText,
    },
  });

  const onLayoutView = (event: LayoutChangeEvent) => {
    const height = event.nativeEvent.layout.height;
    sty.text.fontSize = height;
  };

  return (
    <View style={sty.view} onLayout={onLayoutView}>
      <TextInput
        style={sty.text}
        placeholder={placeholder}
        onEndEditing={onEndEditing}
      />
    </View>
  );
}
