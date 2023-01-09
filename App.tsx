import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  TextInputEndEditingEventData,
  View,
} from 'react-native';
import ButtonView from './src/components/ButtonView';
import TextInputView from './src/components/TextInputView';

export default function App() {
  const [text, setText] = useState('');

  console.log('App render... with text =', JSON.stringify(text));

  const onEndEditingTextInput = (
    event: NativeSyntheticEvent<TextInputEndEditingEventData>
  ) => {
    setText(event.nativeEvent.text);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Open up App.js to start working on your app!</Text>

      <TextInputView
        styleView={{
          height: 64,
          width: 256,
          borderWidth: 1,
          borderRadius: 8,
          margin: 8,
        }}
        styleText={{
          fontSize: 64 * 0.6,
        }}
        onEndEditing={onEndEditingTextInput}
      />

      <ButtonView
        styleView={{
          height: 64,
          width: 256,
          borderWidth: 1,
          borderRadius: 8,
          margin: 8,
        }}
      >
        <Text>{'Hello World'}</Text>
      </ButtonView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
