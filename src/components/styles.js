import { Dimensions, StyleSheet, Platform } from 'react-native';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const cardHeight = Platform.isPad
  ? ((width - width / 3) * 10) / 18 + 20
  : ((width - width / 3.2) * 10) / 16 + 20;
const IS_ANDROID = Platform.OS === 'android';

export const styles = StyleSheet.create({
  colorBlue: {
    color: '#278EF5'
  },

  homeComponent: {
    backgroundColor: '#278EF5'
  },

  colorGreen: {
    color: '#036A35'
  },

  addComponent: {
    backgroundColor: '#036A35'
  },

  settingsComponent: {
    backgroundColor: '#DA044B'
  },

  profileComponent: {
    backgroundColor: '#167EFA'
  },
});