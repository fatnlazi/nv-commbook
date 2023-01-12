import React, { memo } from 'react';
import {
  LayoutChangeEvent,
  Image,
  ImageStyle,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import * as styles from '../../styles';

export type ImageViewProps = {
  styleView?: ViewStyle;
  styleImage?: ImageStyle;
  uri?: string;
  onLayout?: ((event: LayoutChangeEvent) => void) | undefined;
};

const ImageView = ({
  styleView = {},
  styleImage = {},
  uri = '',
  onLayout = undefined,
}: ImageViewProps) => {
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
    <View style={style.view} onLayout={onLayout}>
      <Image style={style.image} source={{ uri }} />
    </View>
  );
};

export default memo(ImageView);
