import React, { Component } from 'react';
import {
  View,
  Alert,
  StatusBar,
  Dimensions,
  FlatList
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
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class HomeView extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      groups: []
    };
    this.goToAddGroupView = this.goToAddGroupView.bind(this);
  }

  componentWillMount = () => {
    this.state.groups = [{ name: 'Netfilx' }, { name: 'Spotify' }, { name: 'Disney +' }, { name: 'Apple TV +' }, { name: 'Apple Arcade' }]
  };

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

  reloadCard = () => {
    this.setState({ refreshing: false })
  }

  renderListCard = data => {
    return (
      <FlatList
        style={{ flex: 1 }}
        data={data}
        showsVerticalScrollIndicator={false}
        extraData={this.state}
        refreshing={this.state.refreshing}
        onRefresh={() => this.reloadCard()}
        renderItem={({ item, index }) => {
          return (
            <View key={index} style={styles.card}>
              <View style={{ width: 50, height: 50, backgroundColor: '#FB3718' }}>
                <Text>{item.name}</Text>
              </View>
              <View style={{ width: 50, height: 50, backgroundColor: '#F4F3F3' }}>
                <Text>{item.name}</Text>
              </View>
            </View>
          );
        }
        }
        keyExtractor={item => item.name}
      />
    )
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {this.headerApp()}
        <StatusBar barStyle='light-content' />
        <View style={styles.listCard}>
          {this.renderListCard(this.state.groups)}
        </View>
        {/* <Button
          onPress={() => {
            showMessage({
              message: 'Hello World',
              description: 'This is our second message',
              type: 'success',
            });
          }}
          title='Request Details'
          color='#000'
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
        </HelperText> */}
        <ActionButton
          buttonColor='#17E87C'
          onPress={this.goToAddGroupView}
        />
      </View>
    );
  }
}