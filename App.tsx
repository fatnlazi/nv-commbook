import React from 'react';
import SafeAreaProvider from './src/components/SafeAreaProvider';
import Navigation from './src/navigation';

const App = () => {
  return (
    <SafeAreaProvider>
      <Navigation />
    </SafeAreaProvider>
  );
};

export default App;
