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

export default class AppView extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  headerApp = () => {
    return (
      <Appbar.Header style={styles.addComponent}>
        <Appbar.Content
          title='Add'
        />
      </Appbar.Header>
    );
  }

  render() {
    return (
      <View>
        {this.headerApp()}
        <StatusBar barStyle='light-content' />
      </View>
    )
  }
}