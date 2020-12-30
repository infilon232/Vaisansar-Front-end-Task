import React from 'react';
import { Text, TextStyle } from 'react-native';
import { Fonts } from '../constants/appConstants';


export interface LabelTextProps {
    label: string;
    style?: TextStyle
}

export function LabelText({ label, style = {} }: LabelTextProps) {
  return <Text style={{ fontFamily: Fonts.Bold,textAlign:'left', ...style }}>{label}</Text>;
}
