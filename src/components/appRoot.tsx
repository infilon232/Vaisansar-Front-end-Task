import React, { PropsWithChildren } from 'react';
import {
  SafeAreaView, StyleSheet, StatusBar, View,
  TouchableOpacity, Image
} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { ImageView } from '../constants/appConstants';
import { Colors } from "../enums";
import { IAppRoot } from "./types/components";
const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: Colors.acent
  },
  bottom: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    paddingVertical: 15,width:'100%',paddingHorizontal:20,backgroundColor:Colors.viewBox
  }
});
export default function AppRoot(props: PropsWithChildren<IAppRoot>) {
const {onClick2,children} = props;
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle='dark-content' hidden={false} backgroundColor={Colors.viewBox} />
        <View style={{ flex: 1, backgroundColor: Colors.white }}>
          {children}
        </View>
      </SafeAreaView>
    );
  }