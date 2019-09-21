import React, { Component } from 'react';
import {
  View,
  Alert,
} from 'react-native';
import {
  BottomNavigation,
  Text,
  Button
} from 'react-native-paper';
import InAppBrowser from 'react-native-inappbrowser-reborn'
import { showMessage, hideMessage } from 'react-native-flash-message';

const AlbumsRoute = () => <Text>Albums</Text>;
const RecentsRoute = () => <Text>Recents</Text>;

export default class NavigatorView extends Component {
  static displayName = "NavigationView";

  MusicRoute = () => {
    return (
      <View>
        <Button
          onPress={() => {
            /* HERE WE GONE SHOW OUR FIRST MESSAGE */
            showMessage({
              message: 'Hello World',
              description: 'This is our second message',
              type: 'success',
            });
          }}
          title='Request Details'
          color='#841584'
        />
        <Text>Musicdd</Text>
        <Button onPress={this.openLink}>Test</Button>
      </View>
    );
  }

  openLink = async () => {
    try {
      const url = 'https://www.google.com'
      if (await InAppBrowser.isAvailable()) {
        const result = await InAppBrowser.open(url, {
          // iOS Properties
          dismissButtonStyle: 'cancel',
          preferredBarTintColor: '#453AA4',
          preferredControlTintColor: 'white',
          readerMode: false,
          animated: true,
          modalEnabled: true,
          // Android Properties
          showTitle: true,
          toolbarColor: '#6200EE',
          secondaryToolbarColor: 'black',
          enableUrlBarHiding: true,
          enableDefaultShare: true,
          forceCloseOnRedirection: false,
          // Specify full animation resource identifier(package:anim/name)
          // or only resource name(in case of animation bundled with app).
          animations: {
            startEnter: 'slide_in_right',
            startExit: 'slide_out_left',
            endEnter: 'slide_in_left',
            endExit: 'slide_out_right'
          },
          headers: {
            'my-custom-header': 'my custom header value'
          },
          waitForRedirectDelay: 0
        })
        Alert.alert(JSON.stringify(result))
      }
      else Linking.openURL(url)
    } catch (error) {
      Alert.alert(error.message)
    }
  }

  state = {
    index: 0,
    routes: [
      { key: 'music', title: 'Music', icon: 'queue-music' },
      { key: 'albums', title: 'Albums', icon: 'album' },
      { key: 'recents', title: 'Recents', icon: 'history' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    music: this.MusicRoute,
    albums: this.AlbumsRoute,
    recents: this.RecentsRoute,
  });

  render() {
    return (<BottomNavigation
      navigationState={this.state}
      onIndexChange={this._handleIndexChange}
      renderScene={this._renderScene}
    />);
  }
}
