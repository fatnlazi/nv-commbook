import { useCallback, useState } from 'react';
import { LayoutChangeEvent, LayoutRectangle } from 'react-native';

const useLayout = () => {
  const [layout, setLayout] = useState<LayoutRectangle>({} as LayoutRectangle);

  const onLayout = useCallback((event: LayoutChangeEvent) => {
    const layout: LayoutRectangle = event.nativeEvent.layout;
    setLayout(layout);
  }, []);

  return [layout, onLayout] as const;
};

export default useLayout;
