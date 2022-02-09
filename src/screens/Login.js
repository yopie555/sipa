import React, { useEffect, useState } from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    ImageBackground
} from 'react-native';

import Logo from '../assets/logo1.png'
import Background from '../assets/BackGround2.png'
import { biometric } from '../helper/biometric';

import Icon from 'react-native-vector-icons/MaterialIcons';

const Login = ({ navigation }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    return (
        <View style={styles.container}>
            <ImageBackground
                source={Background}
                style={styles.background}
            >
                <View style={styles.container2}>
                    <Image
                        source={Logo}
                        style={styles.logo}
                    />
                    <Text style={styles.tag}>Nama Pengguna</Text>
                    <TextInput
                        style={styles.inputText}
                        onChangeText={(username) => setUsername(username)}
                        value={username}
                    />
                    <Text style={styles.tag}>Kata Sandi</Text>
                    <TextInput
                        style={styles.inputText}
                        secureTextEntry={true}
                        onChangeText={(password) => setPassword(password)}
                        value={password}
                    />
                    <View style={styles.containerBtn}>
                        <TouchableOpacity
                            style={styles.loginBtn}
                            onPress={() => navigation.navigate("Homepage")}
                        >
                            <Text style={styles.textLogin}>Login</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={biometric}
                            style={styles.finger}>
                            <Icon
                                name="fingerprint"
                                size={40}
                                color="white"
                            />
                        </TouchableOpacity>
                    </View>
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
        flex: 1,
        // backgroundColor: '#F9fafb',
        alignItems: 'center',
        // justifyContent: 'center',
    },
    container2: {
        alignItems: 'center',
        marginTop: 30,
    },
    background: {
        width: '100%',
        height: null,
        // alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    logo: {
        width: 110,
        height: 80,
        marginBottom: 40,
    },
    inputText: {
        width: '90%',
        padding: 3,
        // backgroundColor: '#545454',
        color: '#000',
        marginBottom: 10,
        borderColor: '#F59402',
        borderBottomWidth: 1,
    },
    tag: {
        color: '#0094E6',
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 3,
        width: '90%',
    },
    containerBtn: {
        flexDirection: 'row',
    },
    loginBtn: {
        width: '75%',
        backgroundColor: '#0094E6',
        alignItems: 'center'
    },
    finger: {
        backgroundColor: '#0094E6',
        marginLeft: 10
    },
    textLogin: {
        color: '#FFF',
        paddingVertical: 8,
        fontSize: 20,
        fontWeight: 'bold',
    },
    upt: {
        color: "#c9cacc",
        position: 'absolute',
        bottom: 15,
        fontSize: 9,
    }
})
export default Login;