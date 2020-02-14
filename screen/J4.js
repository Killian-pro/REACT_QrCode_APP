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

class J4 extends React.Component {
    static navigationOptions = {
        title: '#CES2020',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.containermid} >
                <QRCode
                    value="https://twitter.com/hashtag/ces2020?src=rela"
                    logo={{ uri: 'data:image/png;base64,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' }}
                    logoSize={50}
                    size={300}
                />

            </View>
        );
    }
}

export default J4;

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