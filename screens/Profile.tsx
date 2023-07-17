import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import AppTextInput from '../component/AppTextInput'
import AppTextButton from '../component/AppTextButton'
import PrimaryButton from '../component/PrimaryButton'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { background, logo } from '../assets/assets'
import { RouterProps } from '../utils/PropTypes'
import { height } from '../constants/Layout'
import EditButton from '../component/EditButton'
import { Button } from 'react-native-paper'
import Colors from '../constants/Colors'
import AntDesign from 'react-native-vector-icons/AntDesign'

const Profile = ({ navigation }: RouterProps) => {
  const [editEnabled, setEditEnabled] = useState(false);
  return (
    <View
      style={styles.container}>
      <ImageBackground
        source={background}
        style={styles.bgImage}>
        <View style={styles.brandView}>
          <Image source={logo} resizeMode='cover' style={{ width: 200, height: 200, marginBottom: 10 }} />
        </View>
      </ImageBackground>
      <View style={styles.bottomView}>
        <View style={{ padding: 40 }}>
          <View style={styles.formView}>
            <Button
              icon={({ size, color }) => (
                <AntDesign name="edit" size={20} color="#fff" />
              )}
              onPress={() => setEditEnabled(!editEnabled)}
              mode='contained'
              style={{
                borderColor: Colors.primary,
                width: '30%'
              }}
              buttonColor={Colors.primary}
            >
              Edit
            </Button>
            <View>
              <AppTextInput placeholder='Full Name' editable={editEnabled} value='Sneha Goregaonkar' />
            </View>
            <View>
              <AppTextInput placeholder='Email' editable={editEnabled}  />
            </View>
            <View>
              <AppTextInput placeholder='Mobile No.' editable={editEnabled} />
            </View>
          </View>
          <View style={styles.forgetPassView}>
            <View style={{ flex: 1, }}>
              <AppTextButton title='Change Password?' />
            </View>
          </View>

          <View style={styles.loginButtonsView}>
            <PrimaryButton title='Submit' navigation={navigation} disabled={!editEnabled} />
          </View>
        </View>
      </View>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  bgImage: {
    height: height / 4
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