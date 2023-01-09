import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  TextInputEndEditingEventData,
  View,
} from 'react-native';
import TextView from './src/components/TextView';
import ButtonView from './src/components/ButtonView';
import TextInputView from './src/components/TextInputView';
import * as styles from './src/styles';

export default function App() {
  const [text, setText] = useState('');

  console.log('App render... with text =', JSON.stringify(text));

  const onEndEditingTextInput = (
    event: NativeSyntheticEvent<TextInputEndEditingEventData>
  ) => {
    setText(event.nativeEvent.text);
  };

  return (
    <View style={styleView.container}>
      <StatusBar style="auto" />
      <Text>Open up App.js to start working on your app!</Text>

      <TextInputView
        styleView={{
          height: 32,
          width: 256,
          margin: 8,
        }}
        onEndEditing={onEndEditingTextInput}
      />

      <ButtonView
        styleView={{
          height: 32,
          width: 256,
          margin: 8,
        }}
        text={'HELLO'}
      ></ButtonView>

      <TextView
        styleView={{
          height: 32,
          width: 256,
          margin: 8,
          ...styles.border.on,
        }}
        text={'HELLO'}
      />
    </View>
  );
}

const styleView = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
