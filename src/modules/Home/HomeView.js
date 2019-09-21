import React, { Component } from 'react';
import {
  View,
  Alert,
  StatusBar
} from 'react-native';
import {
  Text,
  Button,
  HelperText,
  TextInput
} from 'react-native-paper';
import InAppBrowser from 'react-native-inappbrowser-reborn'
import { showMessage, hideMessage } from 'react-native-flash-message';

export default class HomeView extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {};
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

  render() {
    return (
      <View>
        <StatusBar barStyle='light-content' />
        <Button
          onPress={() => {
            showMessage({
              message: 'Hello World',
              description: 'This is our second message',
              type: 'success',
            });
          }}
          title='Request Details'
          color='#841584'
        />
        <Text>Home</Text>
        <Button onPress={this.openLink}>Test</Button>
        <TextInput
          style={{ backgroundColor: '#FFFFFF' }}
          label='Email'
        />
        <HelperText
          type='error'
        >
          Email address is invalid!
        </HelperText>
      </View>
    );
  }
}