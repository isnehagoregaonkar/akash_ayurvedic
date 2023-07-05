import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native';

const BestSellerProductItem = ({item}:any) => {
  return (
    <View style={{
      flexDirection:'row',
      marginTop:10,
      marginBottom:10,
      overflow:'hidden',
    }}>
      <View style={{
      }}>
        <Image
        style={{
          width:120,
          height:150,
          borderRadius:15,
        }}
        source={{uri:item.img}} />
      </View>
      <View style={{
        borderRadius:15,
        backgroundColor:'#f6f6f6',
        marginTop:5,
        marginBottom:5,
        paddingTop:15,
        paddingLeft:25,
        paddingRight:25,
        right:10,
        zIndex:-1,
        overflow:'hidden',
      }}>
        <Text>Weight Loss</Text>
        <Text>A navigation bar which can easily be integrated with React Navigation's Bottom Tabs Navigator.</Text>
        <Text>Weight Loss</Text>
      </View>
    </View>
  )
}

export default BestSellerProductItem;

const styles=StyleSheet.create({
    
})