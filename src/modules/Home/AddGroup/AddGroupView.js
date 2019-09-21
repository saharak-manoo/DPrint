import React, { Component } from 'react';
import {
  View,
  Alert,
  StatusBar
} from 'react-native';
import {
  Appbar
} from 'react-native-paper';
import { styles } from '../../../components/styles'
import I18n from '../../../components/i18n';

export default class AppGroupView extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {};
    this.goBack = this.goBack.bind(this);
  }

  goBack = () => {
    this.props.navigation.navigate('Home');
  }

  headerApp = () => {
    return (
      <Appbar.Header style={styles.addComponent}>
        <Appbar.BackAction
          onPress={this.goBack}
        />
        <Appbar.Content
          title='Add Group'
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