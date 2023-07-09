import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { images, productList } from '../constants/data';
import { width } from '../constants/Layout';
import ProductItem from './ProductItem';

const ProductListSwiper = () => {
  return (
    <View style={styles.container}>
      <SwiperFlatList
        autoplay={false}
        index={0}
        data={productList}
        renderItem={({ item,index }) => (
         <ProductItem index={index} item={item} />
        )}

      />
    </View>
  )
}

export default ProductListSwiper;
const styles = StyleSheet.create({
  container: {
    width:width,
    backgroundColor: 'white'
  },
  child: {
    width: width,
    justifyContent: 'center',
    borderRadius:15,
    height:200,
    overflow:'hidden'
  },

});