import React, { PropsWithChildren } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    View,
    Text,
    Image,
    TextInput
  } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Colors } from '../enums/index';
import { Fonts,Dimens } from '../constants/appConstants';
import {ImageView} from '../constants/appConstants';
import { IBackHeaderProps } from './types/components';
const pageStyle = StyleSheet.create({
    root: {
      paddingVertical: hp('2%'),
      backgroundColor: Colors.white,flexDirection:'row',
      width:"100%",paddingHorizontal:14,
      alignItems:'center',justifyContent:'space-between',
    },
    textstyle: {
      textAlign: 'left',
      marginLeft:10,
      paddingBottom:5,
      fontFamily: Fonts.SemiBold,
      fontSize: Dimens.SizeLarge
    },
    btnstyle: {
      height: 30,
      justifyContent: 'center',
      alignItems: 'center',
      width: 30,
      borderRadius: 18
    },
  });
export default function BackHeader(props: PropsWithChildren<IBackHeaderProps>) {
    const { goback,text,Search,OpenCart } = props;
      return (
        <View style={pageStyle.root}>
          
          <View style={{flex:0.88,alignItems:'center',flexDirection:'row'}}>
          <TouchableOpacity style={pageStyle.btnstyle} onPress={goback}>
               <Image
                resizeMode={'cover'}
                style={{ height: '90%', width: '90%', marginBottom: 5 }}
                source={require('../assets/back.png')} />
            </TouchableOpacity>
  
            {text?
            <Text style={pageStyle.textstyle}>{text}</Text>
            :
             <Image resizeMode={'stretch'}
              source={ImageView.appName}
              style={{height:30,width:50,marginHorizontal:10}}
             /> 
            }  
          </View>
  
  
          <View style={{flex:0.12,alignSelf:'flex-end'}}>
          {/* {Search ?  
          <TouchableOpacity style={pageStyle.btnstyle} onPress={Search}>
               <Image
                resizeMode={'center'}
                style={{ height: '80%', width: '80%',tintColor:'black' }}
                source={require('../assets/search.png')} />           
            </TouchableOpacity>
           :null}   */}
            <TouchableOpacity style={pageStyle.btnstyle} onPress={OpenCart}>
            <Image
                resizeMode={'center'}
                style={{ height: '80%', width: '80%',tintColor:'black' }}
                source={require('../assets/cart.png')} />           
            </TouchableOpacity>
          </View>
  
          </View>
      );
    }