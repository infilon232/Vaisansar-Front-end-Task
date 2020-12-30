import React, { useEffect, useState } from 'react';
import { StyleSheet, Dimensions, View, ActivityIndicator, FlatList,TouchableOpacity,Text } from 'react-native'
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
import DataList from '../../list/racipes.list';
import TextInputView from '../../components/textInput';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
const styles = StyleSheet.create({
})
var Data = [] as any;
export function Home({
  navigation
}: {
  navigation: NavigationProp<any>;
}) {
  const [spinner, setSpinner] = useState(true);
  const [isloading, setLoading] = useState(false);
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(10);
  const getData = async () => {
    if (Data.includes(page)) {
    } else {
      if (Data.length < 1) {
        setLoading(true);
      }
      else {
        setLoading(Data.length >= page ? true : false);
      }
      Data.push(page);
      console.log(HttpService.random);
      NetInfo.fetch().then(state => {
        if (state.isConnected) {
          Timeout(
            15000,
            fetch(HttpService.random + 'number=' + page, {
              method: "GET",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
              },
            })
              .then(res => res.json())
              .then(res => {
                console.log(res);
                if (res.code == 200) {
                  setSpinner(false);
                  setPage(page + 10)
                  setFilteredDataSource(res.recipes);
                  setMasterDataSource(res.recipes);
                }
                else if (res.status = 'failure') {
                  Toast.show(res.message, Toast.SHORT);
                  setSpinner(false);
                }
                else {
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
  }
  useEffect(() => {
    setTimeout(() => {
      getData()
    }, 2000);
  }, []);
  const renderFooter = () => {
    return (
      <View style={{ padding: 30, bottom: 10 }}>
        {filteredDataSource.length < 1 ? null :
          <>
            {isloading ?
              <ActivityIndicator size="large" color={Colors.primary} />
              : null}
          </>
        }
      </View>
    );
  };
  const searchFilterFunction = (text) => {
    if (text) {
      const newData = masterDataSource.filter(
        function (item) {
          const itemData = item.title
            ? item.title.toUpperCase()
            : ''.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
        });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };
  return (
    <AppRoot>
      <View style={{ flex: 1, backgroundColor: Colors.viewBox }}>
        <Header
          text={'Home'}
        />
        <View style={{ paddingBottom: hp('2%'), width: width * 1, backgroundColor: Colors.white }}>
          <TextInputView
            placeholderTextColor={Colors.dark_gray}
            onChangeText={(text) => searchFilterFunction(text)}
            placeholder={'Search here'}
          />
        </View>
        <Spinner loading={spinner} />
        <FlatList
          style={{ flex: 1, backgroundColor: Colors.viewBox }}
          data={filteredDataSource}
          ListFooterComponent={renderFooter}
          onEndReached={() => getData()}
          onEndReachedThreshold={0.01}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <DataList
              item={item}
              index={index}
              onPress={() => {
                navigation.navigate('Details', { data: item })
              }}
            />
          )}
          keyExtractor={(item, index) => String(index)}
        />
      </View>
    </AppRoot>
  )
}