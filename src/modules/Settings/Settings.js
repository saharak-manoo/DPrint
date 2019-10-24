import React, { Component } from 'react';
import {
  View,
  Alert,
  StatusBar,
  TouchableOpacity,
  Text
} from 'react-native';
import {
  Appbar
} from 'react-native-paper';
import { styles } from '../../components/styles'
import I18n from '../../components/i18n';
import { ListItem } from 'react-native-elements'
import LineLogin from 'react-native-line-sdk';

export default class AppGroupView extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  headerApp = () => {
    return (
      <Appbar.Header style={styles.settingsComponent}>
        <Appbar.Content
          title='Settings'
        />
      </Appbar.Header>
    );
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {this.headerApp()}
        <StatusBar barStyle='light-content' />
        <View style={{ flex: 1 }}>
          <ListItem
            title='Saharak Manoo'
            leftAvatar={{
              source: { uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg' },
              title: 'Test'
            }}
            bottomDivider
            chevron
          />
        </View>
        <TouchableOpacity
          style={
            {
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              paddingLeft: "10%"
            }
          }
          onPress={() => {
            LineLogin.loginWithPermissions(["profile", "openid", "email"])
              .then(user => {
                this.lineLogin(user);
              })
              .catch(err => {
                console.log(err);
              });
          }}
        >
          <Text style={styles.buttonTextFb}>
            <Text>{I18n.t("button.signinWith")}</Text>
            <Text style={{ fontWeight: "bold" }}> LINE</Text>
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}