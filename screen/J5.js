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

class J5 extends React.Component {
  static navigationOptions = {
    title: 'Instagram',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.containermid} >
        <QRCode
          value="https://www.instagram.com/kip_artmusic/"
          logo={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSItcYDCXWrvQe6oKpmpOBfq7vKFV6BqczNU0g_FLGohOgXxCUH' }}
          logoSize={52}
          size={300}
        />

      </View>
    );
  }
}

export default J5;

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