import React, { useState } from 'react'
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View, Image, Alert } from 'react-native'
import { background, logo } from '../assets/assets';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AppTextInput from '../component/AppTextInput';
import PrimaryButton from '../component/PrimaryButton';
import AppTextButton from '../component/AppTextButton';
import { height } from '../constants/Layout';
import { RouterProps } from '../utils/PropTypes';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { auth, firebaseConfig } from '../utils/firebase';
import { firebase } from '@react-native-firebase/auth';

const Login = ({ navigation }: RouterProps) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        if (email !== "" && password !== "") {
            try {
                await signInWithEmailAndPassword(auth, email, password);
                navigation.navigate('Home')

            } catch (error) {
                Alert.alert("Login Error", error + '',
                [
                    {
                        text:'Ok',
                        onPress:()=>{},
                        style:'cancel'
                    },
                    {
                        text:'Sign Up',
                        onPress:()=>navigation.navigate('Register'),
                        style:'default'
                    }
                ])
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
                    <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                        <Text>Don't have an account?
                            <Text style={styles.registerText}> Register Now</Text>
                        </Text>
                    </TouchableOpacity>

                    <View style={styles.formView}>
                        <View>
                            {/* <Text style={styles.labelText}>Email</Text> */}
                            <AppTextInput placeholder='Email' autoCapitalize={'none'} textContentType='emailAddress' onChangeText={(value) => setEmail(value)} autoFocus={true} value={email} />
                        </View>
                        <View>
                            {/* <Text style={styles.labelText}>Password</Text> */}
                            <AppTextInput placeholder='Password' secureTextEntry={true} autoCapitalize={'none'} textContentType='password' onChangeText={(value) => setPassword(value)} autoFocus={false} value={password} />
                        </View>
                    </View>
                    <View style={styles.forgetPassView}>
                        {/* <View style={{ flex: 1, flexDirection:'row', justifyContent:'center',alignItems:'center',alignSelf:'center'}}>
                            <AppCheckbox />
                            <Text style={{ color: '#8f9195', alignSelf: 'flex-start' }}> Remember Me</Text>
                        </View> */}
                        <View style={{ flex: 1, }}>
                            <AppTextButton title='Forgot Password?' />
                        </View>
                    </View>

                    <View style={styles.loginButtonsView}>
                        <PrimaryButton title='Login' disabled={false} onPress={handleLogin} />
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

export default Login;
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