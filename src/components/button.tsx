import React, { PropsWithChildren } from 'react';
import { Text, TouchableOpacity, StyleSheet, ViewStyle,ActivityIndicator } from 'react-native';
import { Colors } from '../enums/index';
import { Fonts,Dimens } from '../constants/appConstants';
import { IButtonProps } from './types/components';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient'

const pageStyle = StyleSheet.create({
    container:{
      borderRadius:5,
      shadowColor: "#878787",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.2,
      shadowRadius: 2.0,
      // elevation: 2,
      backgroundColor:Colors.white,
      alignItems:'center',
      padding: hp("2%"),
    },
    textBtn:{
      fontFamily:Fonts.SemiBold,
      fontSize:Dimens.ExtraMedium,
      color:Colors.white
    },
  });
  
export default function Button(props: PropsWithChildren<IButtonProps 
    & {containerStyle?: ViewStyle}>) {
  const {onClick,text,containerStyle,visible} = props;
  return (
     <TouchableOpacity style={{}} activeOpacity={visible ?1:0.6} 
      onPress={visible?null:onClick}>
      <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
         colors={['#64b903', '#64b903', '#64b903']}
         style={[pageStyle.container,props.containerStyle]}>
           {visible ?
            <ActivityIndicator
            size="small"          
            color={'white'}
          />:
          <Text style={pageStyle.textBtn}>
            {text}
           </Text>}        
      </LinearGradient>
     </TouchableOpacity>
  );
}
