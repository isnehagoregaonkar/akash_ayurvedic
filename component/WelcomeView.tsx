import React from 'react'
import { Text, View } from 'react-native'

const WelcomeView = () => {
    return (
        <View style={{
            paddingLeft: 20,
            paddingRight: 20,
            marginTop: 15,
        }}>
            <Text style={{
                fontWeight: 'bold',
                fontSize: 22,
                marginBottom:5
            }}>Welcome Sneha!</Text>
            <Text style={{
                fontSize:12
            }}>We are happy to have you here. Explore 100% ayurvedic medicines for all your health issues.</Text>
        </View>
    )
}

export default WelcomeView