import React from 'react';
import { NavigationProp } from '@react-navigation/native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import PrefManager from '../utils/prefManager';
import Helper from '../utils/Helper';
import {Colors} from '../enums/index';
import {ImageView} from '../constants/appConstants';
import {Fonts} from '../constants/appConstants';
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';
export function launchScreen({
  navigation,
}: {
  navigation: NavigationProp<any>;
}) {
  setTimeout(() => {
    navigation.dispatch(Helper.Home)
  }, 2000);

  return (
    <React.Fragment>
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
    <Image source={ImageView.logo} 
      resizeMode={'center'}
      style={{ height: hp('20%'), alignSelf: 'center', width: wp('60%'), marginTop: 30 }}/>
    </View>  
  </React.Fragment>
 );
}
