import { StyleSheet, Text, View, FlatList, Image, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import { productList } from '../constants/data'
import ProductItem from './ProductItem'
import AppIconButton from './AppIconButton'
import Colors from '../constants/Colors'
import { width } from '../constants/Layout'
import { RouterProps } from '../utils/PropTypes';
import Ionicons from 'react-native-vector-icons/Ionicons'

const ProductList = ({ navigation }: RouterProps) => {
  return (
    <View>
      <FlatList
        data={productList}
        columnWrapperStyle={styles.row}
        renderItem={({ item, index }) => {
          return (
            <View style={{ flex: 1, maxWidth: '50%', margin: 5, borderRadius: 15, backgroundColor: '#f6f6f6', padding: 8 }}>
              <TouchableOpacity onPress={() => {
                navigation.navigate('ProductDetails')
              }}>
                <TouchableOpacity style={{position:'absolute',top:2,right:2,zIndex:100}}>
                  <Ionicons name={item.isWishlisted ? 'heart-sharp' : 'heart-outline'} size={30} style={{ color: Colors.primary }} />
                </TouchableOpacity>
                <Image
                  source={{
                    uri: item.image
                  }}
                  style={{
                    width: 150,
                    height: 90,
                    alignSelf: 'center'
                  }}
                />
                <Text
                  numberOfLines={1}
                  style={{
                    fontWeight: 'bold',
                    fontSize: 16,
                    paddingTop: 6,
                    paddingBottom: 5
                  }}>{item.title}</Text>
              </TouchableOpacity>
              <Text
                numberOfLines={2}
                ellipsizeMode='tail'
                style={{
                  fontSize: 10,
                  paddingTop: 5,
                  paddingBottom: 5,
                  color: Colors.text,
                  width: width * 0.4
                }}>{item.description}</Text>

              <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <View style={{
                  alignItems: 'flex-start'
                }}>
                  <Text style={{
                    fontWeight: '600',
                    fontSize: 16,
                    color: Colors.primary
                  }}>₹ {item.price}</Text>
                </View>
                <View style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  alignItems: 'center'
                }}>
                  <TouchableOpacity style={{backgroundColor:Colors.primary,borderRadius:5,padding:5}}>
                    <Text style={{color:'#fff',fontSize:12}}>Add to Cart</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )
        }}
        numColumns={2}
      />
    </View>
  )
}

export default ProductList

const styles = StyleSheet.create({
  row: {
    flex: 1,
    justifyContent: "space-around"
  }
})