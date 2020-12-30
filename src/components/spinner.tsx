import React, { PropsWithChildren } from 'react';
import { Modal, ActivityIndicator, StyleSheet, View,Text } from 'react-native';
import { Colors } from '../enums';
import { Fonts,Dimens } from '../constants/appConstants';
import { ISpinner } from './types/components';
import {Strings} from '../constants/appConstants';
const pageStyle = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.8)'
  },
  textStyle:{
    fontFamily:Fonts.Regular,
    fontSize:14,
    textAlign:'center'
  }
});

// spinner 
export default function Button(props: PropsWithChildren<ISpinner>) {
  const { loading,text} = props;
  return (
    <Modal
      transparent={true}
      animationType={'none'}
      visible={loading}
      onRequestClose={() => { console.log('close modal') }}>
      <View style={pageStyle.modalBackground}>
        <ActivityIndicator color={Colors.black} size={'large'} />
        <Text style={pageStyle.textStyle}>{text ?text:Strings.loading}</Text>
      </View>
    </Modal>
  );
};