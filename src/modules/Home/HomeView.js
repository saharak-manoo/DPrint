import React, { Component } from 'react';
import {
  View,
  Alert,
  StatusBar
} from 'react-native';
import {
  Appbar,
  Text,
  Button,
  HelperText,
  TextInput
} from 'react-native-paper';
import InAppBrowser from 'react-native-inappbrowser-reborn'
import { showMessage, hideMessage } from 'react-native-flash-message';
import { styles } from '../../components/styles'
import I18n from '../../components/i18n';
import ActionButton from 'react-native-action-button';

export default class HomeView extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {};
    this.goToAddGroupView = this.goToAddGroupView.bind(this);
  }

  onSearch = () => {
    Alert.alert(
      '',
      'ทดลอง',
      [
        {
          text: I18n.t('button.ok')
        }
      ],
      { cancelable: false }
    );
  }

  headerApp = () => {
    return (
      <Appbar.Header style={styles.homeComponent}>
        <Appbar.Content
          title='Home'
        />
        <Appbar.Action icon='search' onPress={this.onSearch} />
      </Appbar.Header>
    );
  }

  openInAppBrowser = async () => {
    try {
      const url = 'https://www.google.com'
      if (await InAppBrowser.isAvailable()) {
        const result = await InAppBrowser.open(url, {
          // iOS Properties
          dismissButtonStyle: 'cancel',
          preferredBarTintColor: '#278EF5',
          preferredControlTintColor: 'white',
          readerMode: false,
          animated: true,
          modalEnabled: true,
          // Android Properties
          showTitle: true,
          toolbarColor: '#278EF5',
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

  goToAddGroupView = () => {
    this.props.navigation.navigate('AddGroup');
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {this.headerApp()}
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
        <Button onPress={this.openInAppBrowser}>Test</Button>
        <TextInput
          style={{ backgroundColor: '#FFFFFF' }}
          label='Email'
        />
        <HelperText
          type='error'
        >
          Email address is invalid!
        </HelperText>
        <ActionButton
          buttonColor='#17E87C'
          onPress={this.goToAddGroupView}
        />
      </View>
    );
  }
}