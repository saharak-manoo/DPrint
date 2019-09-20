import React, { Fragment } from 'react';
import NavigatorView from './Navigator/NavigatorView';
import { Appbar } from 'react-native-paper';
import { MenuProvider } from "react-native-popup-menu";

const App = () => {
  _goBack = () => alert('Went back');
  _onSearch = () => alert('Searching');
  _onMore = () => alert('Shown more');

  return (
    <MenuProvider>
      <Appbar.Header>
        <Appbar.BackAction
          onPress={this._goBack}
        />
        <Appbar.Content
          title="Title"
          subtitle="Subtitle"
        />
        <Appbar.Action icon="search" onPress={this._onSearch} />
        <Appbar.Action icon="more-vert" onPress={this._onMore} />
      </Appbar.Header>
      <NavigatorView />
    </MenuProvider>
  );
};

export default App;
