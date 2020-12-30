import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppNavigator } from './navigation/navigator';
import { AppRoute } from './navigation/routes';
export default (): React.ReactFragment => {
  return (
    <React.Fragment>
        <SafeAreaProvider>
          <NavigationContainer>
            <AppNavigator/>
          </NavigationContainer>
        </SafeAreaProvider>
    </React.Fragment>
  );
};
