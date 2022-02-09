import React, { useEffect } from 'react';
import { Text, View, Image, StyleSheet, ImageBackground, StatusBar } from 'react-native';

import Logo from '../assets/logo2.png'
import Logo5 from '../assets/logo1.png'
import Logo2 from '../assets/umrah.png'
import Logo3 from '../assets/kemendikbud.png'
import Logo4 from '../assets/satuGurindam.png'
import Background from '../assets/Background1.png'

function SplashScreen({ navigation }) {
    setTimeout(() => {
        navigation.replace('LoginScreen');
    }, 3000);
    return (
        <View style={styles.container}>
            {/* <StatusBar hidden={true} /> */}
            <ImageBackground
                source={Background}
                style={styles.background}
            >
                <Image
                    source={Logo2}
                    style={styles.logo}
                />
                <Image
                    source={Logo3}
                    style={styles.logo2}
                />
                <Image
                    source={Logo4}
                    style={styles.logo3}
                />
                <View style={styles.subContainer}>

                    <Image style={styles.image1} source={Logo} />
                    <Image style={styles.image2} source={Logo5} />
                </View>
            </ImageBackground>
            <Text
                style={styles.upt}
            >
                Copyright @ UPT.PTIK UMRAH 2021
            </Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FAFAFF',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    subContainer: {
        top: '35%',
        position: 'absolute',
        width: '100%',
        alignItems: 'center',
    },
    image1: {
        width: 110,
        height: 110,
        marginBottom: 3,
    },
    image2: {
        width: 90,
        height: 70,
    },
    background: {
        width: '100%',
        height: null,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    text: {
        color: '#FFF',
        fontSize: 34,
        fontFamily: 'Poppins-Bold',
        // fontWeight: 'bold',
        textAlign: 'center',
        color: '#DAC34D'
    },
    logo: {
        position: 'absolute',
        width: 45,
        height: 55,
        top: 0,
        right: 8
    },
    logo2: {
        position: 'absolute',
        width: 45,
        height: 45,
        top: 8,
        right: 60
    },
    logo3: {
        position: 'absolute',
        width: 117,
        height: 71,
        top: 28,
        right: -5
    },
    upt: {
        color: "#c9cacc",
        position: 'absolute',
        bottom: 15,
        fontSize: 9,
    }
})

export default SplashScreen;