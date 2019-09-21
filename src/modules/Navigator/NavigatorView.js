import React, { Component } from 'react';
import {
  BottomNavigation,
  Text,
} from 'react-native-paper';
import { styles } from '../../components/styles'
import HomeView from '../Home/HomeView';
import { View } from 'react-native';
import NavigatorStack from './Navigator';

const AlbumsRoute = () => <Text>Albums</Text>;
const RecentsRoute = () => <Text>Recents</Text>;

export default class NavigatorView extends Component {
  static displayName = 'NavigationView';

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <NavigatorStack />
        </View>
      </View>
    );
  }
}
