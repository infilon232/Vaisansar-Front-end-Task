import React, { PropsWithChildren } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Image
} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Colors } from '../enums/index';
import { Fonts, Dimens } from '../constants/appConstants';
import { IBackHeaderProps } from './types/components';
const pageStyle = StyleSheet.create({
  root: {
    paddingVertical: hp('2%'),
    backgroundColor: Colors.white, flexDirection: 'row',
    width: "100%", paddingHorizontal: 14,
    alignItems: 'center', justifyContent: 'space-between',
  },
  textstyle: {
    textAlign: 'left',
    marginLeft: 10,
    paddingBottom: 5,
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

// detail page header
export default function BackHeader(props: PropsWithChildren<IBackHeaderProps>) {
  const { goback, text,} = props;
  return (
    <View style={pageStyle.root}>
      <View style={{ flex: 0.88, alignItems: 'center', flexDirection: 'row' }}>
        <TouchableOpacity style={pageStyle.btnstyle} onPress={goback}>
          <Image
            resizeMode={'cover'}
            style={{ height: '90%', width: '90%', marginBottom: 5 }}
            source={require('../assets/back.png')} />
        </TouchableOpacity>

        {text ?
          <Text style={pageStyle.textstyle}>{text}</Text>
          : null}
      </View>
      <View style={{ flex: 0.12, alignSelf: 'flex-end' }} />
    </View>
  );
}