import AsyncStorage  from '@react-native-community/async-storage';
const PrefManager ={
    setValue:function(key,value){
        AsyncStorage.setItem(key,value)
    },
    getValue: async (key) =>{
        let value = '';
        try {
            value = await AsyncStorage.getItem(key) || false;
        } catch (error){
            console.log('PrefManager.js line 14',error)
        }
        return value;
    },
    removeValue: async (key) =>{
        await AsyncStorage.removeItem(key);
    }
}
export default PrefManager;