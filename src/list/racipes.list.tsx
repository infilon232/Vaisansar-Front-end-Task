import React from "react";
import {
    StyleSheet,
    View, Image,
    Dimensions,
    Text,
    TouchableOpacity,
} from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange,
    removeOrientationListener,
} from "react-native-responsive-screen";
import { Colors } from '../enums';
import { LabelText } from '../components/labelText';
import { ImageView, Strings, Fonts, Dimens } from '../constants/appConstants';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const styles = StyleSheet.create({
    root: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle: {
        width: wp('100%'),
        paddingHorizontal: wp('6%'),
        paddingVertical: ('1%'),
        paddingTop: ('3%')
    }
});

type Props = {
    rowData: any,
    rowID: any,
    onPress: any,
    navigation?: any
}
export default class Arival extends React.PureComponent<Props> {
    componentDidMount() {
        listenOrientationChange(this);
    }
    render() {
        const { navigation } = this.props;
        const rowID = this.props.index;
        const rowData = this.props.item;
        return (
            <View style={styles.root}>
                <LabelText label={rowData.title} style={styles.textStyle} />
                <TouchableOpacity onPress={() => {
                    this.props.onPress(rowData);
                }}>
                    <Image resizeMode={'cover'}
                        style={{ height: height * 0.25, width: width * .9, borderRadius: 10 }}
                        source={{ uri: rowData.image }} />
                </TouchableOpacity>
            </View>
        );
    }
}