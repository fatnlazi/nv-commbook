import { useCallback, useState } from 'react';
import { LayoutChangeEvent, LayoutRectangle } from 'react-native';

export const useLayout = () => {
  const [layout, setLayout] = useState<LayoutRectangle>({} as LayoutRectangle);

  const onLayout = useCallback((event: LayoutChangeEvent) => {
    setLayout(event.nativeEvent.layout);
  }, []);

  return [layout, onLayout] as const;
};

export const useFontSize = () => {
  const [fontSize, setFontSize] = useState<number>(16);

  const onLayout = useCallback((event: LayoutChangeEvent) => {
    setFontSize(event.nativeEvent.layout.height * 0.7);
  }, []);

  return [fontSize, onLayout] as const;
};
