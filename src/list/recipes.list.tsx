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
    listenOrientationChange
} from "react-native-responsive-screen";
import { Fonts, Strings } from '../constants/appConstants';
import { Colors } from '../enums';
import HTML from "react-native-render-html";
import { LabelText } from '../components/labelText';
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
        paddingTop: ('2%')
    },
    innerFlex: {  alignItems: 'center', width: '100%', flexDirection: 'row',alignSelf:'flex-start' }
});
const htmlStyles = {
    body: {
        color: Colors.dark_gray,
        fontSize: 14,
        textAlign: "left",
    },
    b: {
        textAlign: "left",
        color: Colors.dark_gray,
        fontFamily: Fonts.Bold,
    }
};
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

                {rowData.summary ?rowData.summary.match(/<b>(.*?)<\/b>/g).map((item) => {
                        return (
                            <View style={{ paddingHorizontal: wp('7%'), paddingTop: hp('1%'), alignSelf: 'flex-start' }}>
                                {item.includes('fat') ?
                                    <View style={styles.innerFlex}>
                                        <LabelText label={Strings.fat} style={{textAlign:'left',flex:0.25,textDecorationLine:'underline'}} />
                                        <HTML tagsStyles={htmlStyles} html={"<body>" + item.replace('of fat', "") + "</body>"} />
                                    </View>

                                    : null}
                                {item.includes('calories') ?
                                    <View style={styles.innerFlex}>
                                        <LabelText label={Strings.calories} style={{textAlign:'left',flex:0.25,textDecorationLine:'underline'}}/>
                                        <HTML tagsStyles={htmlStyles} html={"<body>" + item.replace('calories', "") + "</body>"} />
                                    </View>
                                    : null}
                                {item.includes('protein') ?
                                    <View style={styles.innerFlex}>
                                        <LabelText label={Strings.protein} style={{textAlign:'left',flex:0.25,textDecorationLine:'underline'}}/>
                                        <HTML tagsStyles={htmlStyles} html={"<body>" + item.replace('of protein', "") + "</body>"} />
                                    </View>
                                    : null}
                            </View>
                        )
                    })
                :null}
                <View style={{ width: wp('100%'), height: 4, backgroundColor: Colors.light_gray, bottom: hp('1%') }}></View>
            </View>
        );
    }
}
