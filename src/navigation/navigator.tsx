import React from 'react';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import { AppRoute } from './routes';
import {launchScreen} from '../screen/launchScreen';
import {Home} from '../screen/home';
import {Details} from '../screen/home/racipes.details';
const Stack = createStackNavigator();
export const AppNavigator = (props): React.ReactElement => (
  <Stack.Navigator {...props} headerMode='none'>
    <Stack.Screen name={AppRoute.LANDING} component={launchScreen}/>
    <Stack.Screen name={AppRoute.HOME} component={Home}/>
    <Stack.Screen name={AppRoute.DETAILS} component={Details}/>
  </Stack.Navigator>
);