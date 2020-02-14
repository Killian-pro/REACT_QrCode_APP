import React from 'react'
import { Button } from 'react-native'
import QRCode from 'react-native-qrcode-svg';
import {
    StyleSheet,
    ImageBackground
} from 'react-native';

class Troll extends React.Component {
    static navigationOptions = {
        title: 'TROLL ZONE',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <ImageBackground source={{ uri: 'https://media1.giphy.com/media/lT4N7JiPGATIhVwR91/giphy.gif' }} style={styles.containermid} >

            </ImageBackground>
        );
    }
}

export default Troll;

const styles = StyleSheet.create({

    containermid:
    {
        flex: 1,
        width: null,
        height: null,
        paddingLeft:500
    },
});