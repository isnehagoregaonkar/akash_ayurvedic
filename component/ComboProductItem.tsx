import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { combo1 } from '../assets/assets'
import Colors from '../constants/Colors'
import { width } from '../constants/Layout'
import { white } from 'react-native-paper/lib/typescript/src/styles/themes/v2/colors'

const ComboProductItem = ({item}:any) => {
  return (
    <TouchableOpacity style={styles.container}>
            <View style={{width:'40%', justifyContent:'flex-start'}}>
                <Image source={combo1} style={styles.comboImage}  />
            </View>
            <View style={{width:'55%',margin:10}}>
                <Text style={{position:'absolute', right:1, top:-18, color:Colors.primary,backgroundColor:'white'}} numberOfLines={1} ellipsizeMode='tail'>Bestseller</Text>
                <Text style={styles.titleText} numberOfLines={1} ellipsizeMode='tail'>{item.title}</Text>
                <Text style={styles.descriptionText} numberOfLines={3} ellipsizeMode='tail'>{item.description}</Text>
                <Text style={styles.priceText}>₹{item.price}</Text>
            </View>
    </TouchableOpacity>
  )
}

export default ComboProductItem

const styles = StyleSheet.create({
  container:{
    height:width*0.45,
    marginVertical:10,
    borderRadius:15,
    flexDirection:'row',
    borderColor:Colors.primary,
    borderWidth:0.3,
    elevation:5,
  },
    comboProductView:{
        flexDirection:'row',
    },
    comboImage:{
      height:'100%',
      width:'100%',
      resizeMode:'cover',
      borderBottomLeftRadius:15,
      borderTopLeftRadius:15
    },
    titleText:{
      fontWeight:'800',
      fontSize:20,
      color:Colors.primary,
      marginVertical:5
    },
    descriptionText:{
      marginVertical:5
    },
    priceText:{
      fontSize:23,
      fontWeight:'700',
      marginVertical:10,
      color:Colors.primary
    }
})