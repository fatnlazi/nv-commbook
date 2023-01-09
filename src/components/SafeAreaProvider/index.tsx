import React, { memo } from 'react';
import { SafeAreaProvider as OrgSafeAreaProvider } from 'react-native-safe-area-context';

const SafeAreaProvider = ({
  children = undefined,
}: {
  children?: React.ReactNode | undefined;
}) => {
  return <OrgSafeAreaProvider>{children}</OrgSafeAreaProvider>;
};

export default memo(SafeAreaProvider);
