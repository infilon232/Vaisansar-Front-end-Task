import { Dimensions, Platform } from 'react-native';
const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;
export const APP_TITLE = 'Nova';
export const IS_ANDROID = Platform.OS === 'android';
export const IS_IOS = Platform.OS === 'ios';
export const IS_IPHONE_X = SCREEN_HEIGHT === 812 || SCREEN_HEIGHT === 896;
export enum Screen {
  tabBarHeight = 50,
  height = SCREEN_HEIGHT,
  width = SCREEN_WIDTH,
  fontScale = Dimensions.get('window').fontScale,
  scale = Dimensions.get('window').scale,
  charHeight = SCREEN_HEIGHT / 4,
}
export const realWidth = Screen.height > Screen.width ? Screen.width : Screen.height;
export enum Colors {
  white= '#fff',
  black='#000',
  blacklight='rgb(67, 67, 67)',
  red='red',
  primary='rgb(57, 183, 110)',
  acent='rgb(247, 239, 236)',
  secondary='rgb(86, 101, 132)',
  green='rgb(57, 183, 110)',
  pink="rgb(142, 38, 132)",
  viewBox="#f8f8f8",
  medium_gray="rgba(125, 125, 130, 0.5)",
  dark_gray="#7C7C80",
  cool_gray="rgba(125, 125, 130, 0.7)",
  light_gray="rgba(125, 125, 130, 0.1)",
  light="rgb(240, 240, 240)",
  rgb='#231535'

  // #231536 	
}