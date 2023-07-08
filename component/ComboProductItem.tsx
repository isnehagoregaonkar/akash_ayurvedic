import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { combo1 } from '../assets/assets'

const ComboProductItem = () => {
  return (
    <View>
      <TouchableOpacity>
        <View style={styles.comboProductView}>
            <View>
                <Image source={combo1} />
            </View>
            <View>
                <Text>Dibetes combo</Text>
                <Text>Dibetes combo</Text>
            </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default ComboProductItem

const styles = StyleSheet.create({
    comboProductView:{
        flexDirection:'row',

    }
})