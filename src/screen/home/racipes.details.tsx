import React, { useEffect, useState } from 'react';
import { StyleSheet, Dimensions, View, ActivityIndicator, FlatList } from 'react-native'
import { Colors } from '../../enums';
import AppRoot from '../../components/appRoot';
import Header from '../../components/header';
import Spinner from '../../components/spinner';
import Toast from 'react-native-simple-toast';
import NetInfo from '@react-native-community/netinfo';
import Helper from '../../utils/Helper';
import HttpService from '../../utils/httpService';
import Timeout from '../../utils/timeout';
import { NavigationProp } from '@react-navigation/native';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
const styles = StyleSheet.create({
})
export function Details({
  navigation,
  route,
}: {
  navigation: NavigationProp<any>;
  route: any;
}) {
  const text = route?.params?.title || 'Details';
  const [spinner, setSpinner] = useState(true);
  const getData = async () => {
      console.log(HttpService.random);
      NetInfo.fetch().then(state => {
        if (state.isConnected) {
          Timeout(
            15000,
            fetch(HttpService.random + '&number=' + 19, {
              method: "GET",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
              },
            })
              .then(res => res.json())
              .then(res => {
                if (res.recipes.length > 1) {
                  setSpinner(false);
                  console.log(res.recipes);
                } else {
                  setSpinner(false);
                  Toast.show(res.message, Toast.SHORT);
                }
              })
              .catch(e => {
                setSpinner(false);
                NetInfo.fetch().then((state) => {
                  if (state.isConnected) {
                    Toast.show("Something went wrong...", Toast.SHORT);
                  }
                })
              })
          ).catch(e => {
            setSpinner(false);
            navigation.dispatch(Helper.Home)
            Toast.show("Request Timed Out", Toast.SHORT);
          });
        } else {
          setSpinner(false);
          Toast.show("Please Check your internet connection", Toast.SHORT);
        }
      });
  }
  useEffect(() => {
    setTimeout(() => {
      getData()
    }, 2000);
  }, []);
  return (
    <AppRoot>
      <View style={{ flex: 1, backgroundColor: Colors.viewBox }}>
        <Header
          text={text}
          back={navigation.goBack()}
        />
        <Spinner loading={spinner} />
        </View>
    </AppRoot>
  )
}