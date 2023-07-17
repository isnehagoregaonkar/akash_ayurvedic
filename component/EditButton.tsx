import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, IconButton } from 'react-native-paper'
import Colors from '../constants/Colors'
import AntDesign from 'react-native-vector-icons/AntDesign'

const EditButton = () => {
    return (
        <Button
        icon={({ size, color }) => (
            <AntDesign name="edit" size={20} color="#fff" />
        )}
            onPress={() => console.log('Pressed')}
            mode='contained'
            style={{
                borderColor:Colors.primary,
                width:'30%'
            }}
            buttonColor={Colors.primary}
            >
            Edit
        </Button>
    )
}

export default EditButton

const styles = StyleSheet.create({})