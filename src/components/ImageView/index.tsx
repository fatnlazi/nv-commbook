import React from 'react';
import { Image, ImageStyle, StyleSheet, View, ViewStyle } from 'react-native';
import * as styles from '../../styles';

export default function ImageView({
  styleView = {},
  styleImage = {},
  uri = '',
}: {
  styleView?: ViewStyle;
  styleImage?: ImageStyle;
  uri?: string;
}) {
  const style = StyleSheet.create({
    view: {
      ...styles.image.view,
      ...styleView,
    },
    image: {
      ...styles.image.image,
      ...styleImage,
    },
  });

  return (
    <View style={style.view}>
      <Image style={style.image} source={{ uri: uri }} />
    </View>
  );
}
