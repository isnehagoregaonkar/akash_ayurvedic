import React, { useState } from 'react'
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Colors from '../constants/Colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'

const CartItem = ({ item }: any) => {
  const [quantity, setQuantity] = useState(1);
  
  return (
    <View style={{
      flexDirection: 'row',
      marginTop: 10,
      marginBottom: 10,
      overflow: 'hidden',
    }}>
      <View style={{
        right: -5
      }}>
        <Image
          style={{
            width: 120,
            height: 130,
            borderRadius: 15,
          }}
          source={{ uri: item.img }} />
      </View>
      <View style={{
        flex: 1,
        borderRadius: 15,
        backgroundColor: '#f9f9f9',
        marginTop: 5,
        marginBottom: 5,
        paddingTop: 15,
        paddingLeft: 15,
        paddingRight: 25,
        zIndex: -1,
        right: 5,
        overflow: 'hidden',
      }}>
        <TouchableOpacity style={{ position: 'absolute', top: 1, right: 1, padding:3  }}>
          <AntDesign name='delete' size={25} style={{ color: '#f84d4d' }} />
        </TouchableOpacity>
        <Text
          numberOfLines={2}
          style={{
            fontWeight: 'bold',
            fontSize: 18,
            paddingTop: 10,
            paddingBottom: 5
          }}>Weight Loss</Text>
          <Text>Skin</Text>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', marginVertical:10}}>
          <Text style={{
            fontWeight: '600',
            fontSize: 18,
            color: Colors.primary
          }}>₹ 2000</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity style={{backgroundColor:Colors.primary,borderTopLeftRadius:10,borderBottomLeftRadius:10,padding:3}}>
              <MaterialCommunityIcons name='minus' size={25} color='#fff' />
            </TouchableOpacity>
            <View style={{ paddingVertical:5,paddingHorizontal:10,borderTopColor:Colors.primary,borderBottomColor:Colors.primary,borderBottomWidth:1,borderTopWidth:1}}>
            <Text style={{ color: Colors.primary, fontSize: 15, fontWeight: '500', }}>{quantity}</Text>
            </View>
            <TouchableOpacity style={{backgroundColor:Colors.primary,borderTopRightRadius:10,borderBottomRightRadius:10,padding:3}}>
              <MaterialCommunityIcons name='plus' size={25} color='#fff' />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

export default CartItem;

const styles = StyleSheet.create({

})