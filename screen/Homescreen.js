import React from 'react'
import { notification, Notifications } from 'expo';
import *  as Permissions from 'expo-permissions';
import { Button } from 'react-native'
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    ScrollView,
    ImageBackground,
} from 'react-native';

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'NEWS PAPER QRCODE .',
        headerStyle: {
            backgroundColor: '#000000',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',

        },
    };

    async componentDidMount() {
        const { status: existingStatus } = await Permissions.getAsync(
            Permissions.NOTIFICATIONS
        );
        let finalStatus = existingStatus;
        if (existingStatus !== 'granted') {

            const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
            finalStatus = status;
        }

        if (finalStatus !== 'granted') {
            return;
        }
        let token = await Notifications.getExpoPushTokenAsync();
        console.log(token);

    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <ImageBackground source={{ uri: 'https://img.pixers.pics/pho_wat(s3:700/FO/51/03/36/14/700_FO51033614_35c5c3bbe580ceca73a5c5c74fea6f6a.jpg,700,467,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,480,417,jpg)/papiers-peints-fond-de-vieux-papier-journal-froisse.jpg.jpg' }} style={styles.backgroundImage} >
                <ScrollView >

                    <View style={styles.containermid}>
                        {/* <Text >Ceci est le lien 1</Text> */}
                        <View style={styles.espacefin}></View>
                        <TouchableOpacity style={styles.buttonStyles} onPress={() => navigate("J1")} >
                            <Text style={styles.buttonText} >🔗 Leprogres</Text>
                        </TouchableOpacity>
                        <View style={styles.espace}></View>
                        {/* <View style={styles.containermid}></View> */}
                        {/* <Text >Ceci est le lien 2</Text> */}
                        <TouchableOpacity style={styles.buttonStyles} onPress={() => navigate("J2")} >
                            <Text style={styles.buttonText}>🔗 YouTube</Text>
                        </TouchableOpacity>
                        <View style={styles.espace}></View>
                        {/* <Text >Ceci est le lien 3</Text> */}
                        <TouchableOpacity style={styles.buttonStyles} onPress={() => navigate("J3")} >
                            <Text style={styles.buttonText}>🔗 CNEWS</Text>
                        </TouchableOpacity>
                        <View style={styles.espace}></View>
                        {/* <Text >Ceci est le lien 4</Text> */}
                        <TouchableOpacity style={styles.buttonStyles} onPress={() => navigate("J4")} >
                            <Text style={styles.buttonText}>🔗 CES2020</Text>
                        </TouchableOpacity>
                        <View style={styles.espace}></View>
                        <TouchableOpacity style={styles.buttonStyles} onPress={() => navigate("J5")} >
                            <Text style={styles.buttonText}>🔗 Instagram</Text>
                        </TouchableOpacity>
                        <View style={styles.espace}></View>
                        <TouchableOpacity style={styles.buttonStyles} onPress={() => navigate("J6")} >
                            <Text style={styles.buttonText}>🔗 Phoenixjp</Text>
                        </TouchableOpacity>
                        <View style={styles.espacefin}></View>    
                        <TouchableOpacity style={styles.masked} onPress={() => navigate("Troll")} >
                            <Text>.</Text>
                        </TouchableOpacity>                  
                    </View>
                    
                </ScrollView>
            </ImageBackground>
        );
    }
}

export default HomeScreen;

const styles = StyleSheet.create({
    masked:{
        // backgroundColor: '#D3D3D3',
        width:10,
        margin:115 ,

    },
    espacefin: {
        backgroundColor: '#D3D3D3',
        height: 5,
    },
    espace:
    {
        backgroundColor: '#DCDCDC',
        height: 10,
    },
    containermid:
    {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        paddingTop: '25%',
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 18,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonStyles: {
        backgroundColor: '#790A0A',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },

    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
    }
});