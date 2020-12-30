import React, { useEffect, useState } from 'react';
import { Dimensions, View, ActivityIndicator, FlatList, Text } from 'react-native'
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
import DataList from '../../list/recipes.list';
import TextInputView from '../../components/textInput';

// get device height and width
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

// get height and width in percentage
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

// define fonts
import { Fonts } from '../../constants/appConstants';

// store values for lazy load
var Data = [] as any;

// function for home screen
export function Home({
  navigation
}: {
  navigation: NavigationProp<any>;
}) {
  const [spinner, setSpinner] = useState(true);
  const [isloading, setLoading] = useState(false);
  const [filteredDataSource, setFilteredDataSource] = useState([] as any);
  const [masterDataSource, setMasterDataSource] = useState([] as any);
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
      NetInfo.fetch().then(state => {
        if (state.isConnected) {
          Timeout(
            15000,
            fetch(HttpService.random + '&number=' + 10, {
              method: "GET",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
              },
            })
              .then(res => res.json())
              .then(res => {
                console.log(res);
                if (res.recipes) {
                  setSpinner(false);
                  setFilteredDataSource([...filteredDataSource, ...res.recipes]);
                  setMasterDataSource([...masterDataSource, ...res.recipes]);
                  setPage(page + 10)
                }
                if (res.status = 'failure' && res.message) {
                  Toast.show(res.message, Toast.SHORT);
                  setSpinner(false);
                }
                else {
                  setSpinner(false);
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
    getData()
  }, []);

  // footer loader
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

  //  search fuction
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
  const EmptyListMessage = ({ item }) => {
    return (
      <View style={{ height: '100%', justifyContent: 'center', alignItems: 'center' }}>
        {filteredDataSource.length < 1 && spinner == false ?
          <Text style={{ fontFamily: Fonts.Bold }}>No racipes available</Text>
          : null}
      </View>
    );
  };

  // home page design
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
        
        {/*  recipe list */}
        <FlatList  
          style={{ flex: 1, backgroundColor: Colors.viewBox }}
          data={filteredDataSource}
          ListEmptyComponent={EmptyListMessage}
          ListFooterComponent={renderFooter}
          onEndReached={() => getData()}
          disableVirtualization={true}
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
