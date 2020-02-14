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

class J1 extends React.Component {
    static navigationOptions = {
        title: 'LEPROGRES',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View  style={styles.containermid} >
                <QRCode
                    value="https://www.leprogres.fr/"
                    logo={{ uri: 'data:image/jpeg;base64,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' }}
                    logoSize={60}
                    size={300}
                />
               
            </View>
        );
    }
}

export default J1;

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