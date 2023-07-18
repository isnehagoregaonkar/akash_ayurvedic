import React, { useState } from 'react'
import { Image, ImageBackground, StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import { background, logo } from '../assets/assets';
import AppTextInput from '../component/AppTextInput';
import PrimaryButton from '../component/PrimaryButton';
import { height } from '../constants/Layout';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { RouterProps } from '../utils/PropTypes';
import { createUserWithEmailAndPassword } from 'firebase/auth'
import firestore from '@react-native-firebase/firestore';
import { app, auth, firebaseConfig } from '../utils/firebase';
import { initializeApp } from 'firebase/app';
import { firebase } from '@react-native-firebase/auth';

const Register = ({ navigation }: RouterProps) => {
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegistration = async () => {
        if (mobile !== "" && email !== "" && password !== "") {
            try {
            initializeApp(firebaseConfig)
            const authUser=await createUserWithEmailAndPassword(auth, email, password);
            // const userCollection=firestore().collection('users').doc(email);
            // userCollection.set({
            //     owner_uid: authUser.user.uid,
            //     email:email,
            //     mobile:mobile,
            //     password:password
            // })
            navigation.navigate('Home')
            } catch (error) {
                Alert.alert("Failed to register", error+"");
                console.log(error)
            }
        }
    }
    return (
        <View
            style={styles.container}>
            <ImageBackground
                source={background}
                style={styles.bgImage}>
                <View style={styles.brandView}>
                    <Image source={logo} resizeMode='cover' style={{ width: 300, height: 300 }} />
                </View>
            </ImageBackground>
            <View style={styles.bottomView}>
                <View style={{ padding: 40 }}>
                    <Text style={styles.welcomeText}>Welcome</Text>
                    <Text>Don't have an account?
                        <Text style={styles.registerText}> Login Now</Text>
                    </Text>
                    <View style={styles.formView}>
                        <View>
                            <AppTextInput placeholder='Email' keyboardType='email-address' editable={true} onChangeText={(text) => setEmail(text)} value={email} autoFocus={true} textContentType='emailAddress' />
                        </View>
                        <View>
                            <AppTextInput placeholder='Mobile' keyboardType='phone-pad' onChangeText={(text) => setMobile(text)} value={mobile} />
                        </View>
                        <View>
                            <AppTextInput placeholder='Password' secureTextEntry={true} right='eye' onChangeText={(text) => setPassword(text)} value={password} />
                        </View>
                    </View>

                    <View style={styles.loginButtonsView}>
                        <PrimaryButton title='Register' disabled={false} onPress={handleRegistration} />
                    </View>
                    <View style={{ justifyContent: 'center' }}>
                        <Text style={{ textAlign: 'center', color: '#8f9195', margin: 5 }}>or Login with</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                            <TouchableOpacity style={{ backgroundColor: '#db4a39', borderRadius: 20, width: 60, justifyContent: 'center', alignItems: 'center' }}>
                                <MaterialCommunityIcons name='google-plus' color={'#fff'} size={32} />
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
            </View>
        </View>
    )
}

export default Register;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    bgImage: {
        height: height / 2.5
    },
    brandView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    brandViewText: {
        color: '#43a132',
        fontWeight: 'bold',
        fontSize: 36,
        textTransform: 'uppercase'
    },
    bottomView: {
        flex: 1.5,
        backgroundColor: '#fff',
        bottom: 50,
        borderTopStartRadius: 60,
        borderTopEndRadius: 60
    },
    welcomeText: {
        color: '#43a132',
        fontSize: 34
    },
    registerText: {
        color: 'red',
        fontStyle: 'italic'
    },
    formView: {
        marginTop: 30,
    },
    labelText: {
        color: '#67686b',
        fontWeight: '400',
        fontSize: 15
    },
    textInput: {
        borderBottomColor: '#67686b',
        color: '#000'
    },
    focusedTextInput: {
        borderBottomColor: '#43a132',
        color: '#000'
    },
    forgetPassView: {
        flexDirection: 'row',
    },
    loginButtonsView: {
        marginTop: 15,
        marginBottom: 5,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
})