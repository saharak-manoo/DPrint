import React, { Component } from 'react';
import {
  BottomNavigation,
  Text,
} from 'react-native-paper';
import { styles } from '../../components/styles'
import HomeView from '../Home/HomeView';
import AddView from '../Add/AddView';

const AlbumsRoute = () => <Text>Albums</Text>;
const RecentsRoute = () => <Text>Recents</Text>;

export default class NavigatorView extends Component {
  static displayName = 'NavigationView';

  state = {
    index: 0,
    routes: [
      { key: 'home', title: 'Home', icon: 'home', color: '#278EF5' },
      { key: 'add', title: 'Add', icon: 'add', color: '#036A35' },
      { key: 'recents', title: 'Recents', icon: 'history' },
      { key: 'user', title: 'User', icon: 'people' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    home: HomeView,
    add: AddView,
    recents: this.RecentsRoute,
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
