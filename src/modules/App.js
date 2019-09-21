import React, { Component } from 'react';
import NavigatorView from './Navigator/NavigatorView';
import { Appbar } from 'react-native-paper';
import { MenuProvider } from 'react-native-popup-menu';
import FlashMessage from 'react-native-flash-message';

export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _goBack = () => alert('Went back');
  _onSearch = () => alert('Searching');
  _onMore = () => alert('Shown more');

  render() {
    return (
      <MenuProvider>
        <Appbar.Header>
          <Appbar.BackAction
            onPress={this._goBack}
          />
          <Appbar.Content
            title='Title'
            subtitle='Subtitle'
          />
          <Appbar.Action icon='search' onPress={this._onSearch} />
          <Appbar.Action icon='more-vert' onPress={this._onMore} />
        </Appbar.Header>
        <FlashMessage position='top' />
        <NavigatorView />
      </MenuProvider >
    );
  }
};
