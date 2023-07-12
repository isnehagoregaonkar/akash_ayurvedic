import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CartList from '../component/CartList'

const Cart = () => {
  return (
    <View style={styles.container}>
     <CartList/>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
  container:{
    padding:10,
    backgroundColor:'#fff'
  }
})