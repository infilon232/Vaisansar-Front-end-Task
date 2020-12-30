import React from 'react';
import {
    View,
    TextInput,TextInputProps
} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import {Colors} from '../enums';


export type KeyboardType = 'default' | 'email-address' | 'numeric' | 'phone-pad' | 'number-pad' | 'decimal-pad';
export type KeyboardTypeIOS =
    | 'ascii-capable'
    | 'numbers-and-punctuation'
    | 'url'
    | 'name-phone-pad'
    | 'twitter'
    | 'web-search';
export type KeyboardTypeAndroid = 'visible-password';

export type KeyboardTypeOptions = KeyboardType | KeyboardTypeAndroid | KeyboardTypeIOS;

export interface Props {
    placeholder?: string;
    secureTextEntry?: boolean;
    editable?: boolean;
    autoFocus?: boolean;
    multiline?: boolean;
    onChangeText?: (text: string) => void;
    keyboardType?: KeyboardTypeOptions;
    maxLength?: number;
    ref?:any;
    placeholderTextColor?:string;
    top?:number;
    otherProps?:TextInputProps
    onSubmitEditing?:any;
    value?:any;
}

const TextInputView: React.FC<Props> = (props) => {

    return (
        <View>
            <TextInput
                style={{
                    color:Colors.dark_gray,
                    borderWidth:1,
                    borderColor: Colors.medium_gray,
                    width: wp('86%'),
                    paddingHorizontal:10,
                    height: 40,
                    borderRadius:6,
                    alignSelf:'center',
                   
                    marginTop:props.top?props.top:0
                }}
                onChangeText={props.onChangeText}
                keyboardType={props.keyboardType}
                autoFocus={props.autoFocus}
                placeholderTextColor={props.placeholderTextColor}
                selectionColor={'#000'}
                multiline={props.multiline}
                secureTextEntry={props.secureTextEntry}
                onSubmitEditing={props.onSubmitEditing}
                placeholder={props.placeholder}
                maxLength={props.maxLength}
                spellCheck={false}
                value={props.value}
                // ref={props.ref}
                blurOnSubmit={false}
                {...props.otherProps}
            />
        </View>
    );
};

export default TextInputView;