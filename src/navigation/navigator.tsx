import React from 'react';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
// routing 
import { AppRoute } from './routes';
import {LaunchScreen} from '../screen/launchScreen';
import {Home} from '../screen/home';
import {Details} from '../screen/home/details';
// screen navigation
const Stack = createStackNavigator();
export const AppNavigator = (props): React.ReactElement => (
  <Stack.Navigator {...props} headerMode='none'>
    <Stack.Screen name={AppRoute.LANDING} component={LaunchScreen}/>
    <Stack.Screen name={AppRoute.HOME} component={Home}/>
    <Stack.Screen name={AppRoute.DETAILS} component={Details}/>
  </Stack.Navigator>
);