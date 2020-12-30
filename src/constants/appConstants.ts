// API Integration
export const API_BASE_URL = 'https://api.spoonacular.com/recipes/';
export const apiKey = '527556603cd245deb9089f96ea607872';

// Define Font family
export enum Fonts {
    Bold = "OpenSans-Bold",
    BoldItalic ='OpenSans-BoldItalic',
    ExtraBold='OpenSans-ExtraBold',
    ExtraBoldItalic='OpenSans-ExtraBoldItalic',
    Italic='OpenSans-Italic',
    Light='OpenSans-Light',
    LightItalic='OpenSans-LightItalic',
    Regular='OpenSans-Regular',
    SemiBold='OpenSans-SemiBold',
    SemiBoldItalic='OpenSans-SemiBoldItalic'
}

// Define Font size 
export enum Dimens {
    ExtraSmall=12,
    Small=14,
    ExtraMedium=16,
    SizeMedium=18,
    SizeLarge=20,
    SizeExtraLarge=25,
}
 
// Splash logo
export enum ImageView{ 
    logo = require('../assets/react.png'),
}

// Define parameters 
export enum Strings{
    loading= 'Loading...', 
    protein='Protein:',
    fat='Fat:',
    calories='Calories:'
}