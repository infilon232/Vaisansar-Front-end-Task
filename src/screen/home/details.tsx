import React from 'react';
import { StyleSheet, Dimensions, View, Image } from 'react-native'
import { Colors } from '../../enums';
import { Fonts } from '../../constants/appConstants';
import AppRoot from '../../components/appRoot';
import Header from '../../components/header';
import HTML from "react-native-render-html";
import { NavigationProp } from '@react-navigation/native';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
const htmlStyles = {
  body: {
    color: Colors.black,
    textAlign: "justify",
  },
  p: {
    fontSize: 14,
    color: Colors.blacklight,
    fontFamily: Fonts.Regular,
    textAlign: "justify",
    alignSelf: "center",
  },
  b: {
    fontFamily: Fonts.Bold,
  }
};

// fetch description data from home page
export function Details({
  navigation,
  route,
}: {
  navigation: NavigationProp<any>;
  route: any;
}) {
  return (
    <AppRoot>
      <View style={{ flex: 1, backgroundColor: Colors.viewBox }}>
        <Header
          text={route.params.data.title}
          back={() => navigation.goBack()}
        />
        <Image resizeMode={'cover'}
          style={{ height: height * 0.25, width: width * 1 }}
          source={{ uri: route.params.data.image }} />
        <View style={{ paddingHorizontal: wp('4%'),paddingTop:hp('2%') }}>
          <HTML tagsStyles={htmlStyles} html={route.params.data.summary } />
        </View>
      </View>
    </AppRoot>
  )
}