import React from 'react'
import { Button } from 'react-native'
import QRCode from 'react-native-qrcode-svg';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';

class J6 extends React.Component {
  static navigationOptions = {
    title: 'Phoenixjp',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.containermid} >
        <QRCode
          value="http://www.phoenixjp.net/news/fr/"
          logo={{ uri: 'https://centreparamedical-belair.lu/wp-content/uploads/2016/09/news-logo_318-38132.jpg' }}
          logoSize={52}
          size={300}
        />

      </View>
    );
  }
}

export default J6;

const styles = StyleSheet.create({

  containermid:
  {
    paddingTop: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0FFFF',
    flexDirection: 'column',
    height: '100%',
  },
});