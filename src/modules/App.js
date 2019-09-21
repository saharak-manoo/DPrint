import React, { Component } from 'react';
import NavigatorView from './Navigator/NavigatorView';
import { MenuProvider } from 'react-native-popup-menu';
import FlashMessage from 'react-native-flash-message';

export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <MenuProvider>
        <NavigatorView />
        <FlashMessage position='top' />
      </MenuProvider >
    );
  }
};
