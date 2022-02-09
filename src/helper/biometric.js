import { NavigationContainer, useNavigation } from '@react-navigation/native'
import ReactNativeBiometrics from 'react-native-biometrics'


const navigation = useNavigation();
export const biometric = () => {
    ReactNativeBiometrics.isSensorAvailable()
        .then((resultObject) => {
            const { available, biometryType } = resultObject

            if (available && biometryType === ReactNativeBiometrics.TouchID) {
                console.log('TouchID is supported')
            } else if (available && biometryType === ReactNativeBiometrics.FaceID) {
                console.log('FaceID is supported')
            } else if (available && biometryType === ReactNativeBiometrics.Biometrics) {
                console.log('Biometrics is supported')
            } else {
                console.log('Biometrics not supported')
            }
        })


    ReactNativeBiometrics.createKeys('Confirm fingerprint')
        .then((resultObject) => {
            const { publicKey } = resultObject
            console.log(publicKey)
            // sendPublicKeyToServer(publicKey)
        })

    ReactNativeBiometrics.biometricKeysExist()
        .then((resultObject) => {
            const { keysExist } = resultObject

            if (keysExist) {
                console.log('Keys exist')
            } else {
                console.log('Keys do not exist or were deleted')
            }
        })

    // ReactNativeBiometrics.deleteKeys()
    //     .then((resultObject) => {
    //         const { keysDeleted } = resultObject

    //         if (keysDeleted) {
    //             console.log('Successful deletion')
    //         } else {
    //             console.log('Unsuccessful deletion because there were no keys to delete')
    //         }
    //     })

    let epochTimeSeconds = Math.round((new Date()).getTime() / 1000).toString()
    let payload = epochTimeSeconds + '1234567'

    ReactNativeBiometrics.createSignature({
        promptMessage: 'Sign in',
        payload: payload
    })
        .then((resultObject) => {
            const { success, signature } = resultObject

            if (success) {
                console.log(signature)
                // verifySignatureWithServer(signature, payload)
                Alert.alert('Success', 'Signature created successfully')
            }
        })

    ReactNativeBiometrics.simplePrompt({ promptMessage: 'Confirm fingerprint' })
        .then((resultObject) => {
            const { success } = resultObject

            if (success) {
                console.log('successful biometrics provided')
                navigation.navigate('Homepage');
            } else {
                console.log('user cancelled biometric prompt')
            }
        })
        .catch(() => {
            console.log('biometrics failed')
        })
}
