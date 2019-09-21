import React, { Component } from 'react';
import {
  BottomNavigation,
  Text,
} from 'react-native-paper';
import { styles } from '../../components/styles'
import HomeView from '../Home/HomeView';

const AlbumsRoute = () => <Text>Albums</Text>;
const RecentsRoute = () => <Text>Recents</Text>;

export default class NavigatorView extends Component {
  static displayName = 'NavigationView';

  state = {
    index: 0,
    routes: [
      { key: 'home', title: 'Home', icon: 'home', color: '#278EF5' },
      { key: 'chat', title: 'Chat', icon: 'chat', color: '#036A35' },
      { key: 'notifications', title: 'Notications', icon: 'notifications' },
      { key: 'menu', title: 'Menu', icon: 'menu' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    home: HomeView,
    chat: this.RecentsRoute,
    notifications: this.RecentsRoute,
    menu: this.RecentsRoute,
  });

  render() {
    return (
      <BottomNavigation
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
      />
    );
  }
}
