import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { images } from '../constants/data';
import { width } from '../constants/Layout';

const FlatListSlider = () => {
  return (
    <View style={styles.container}>
      <SwiperFlatList
        autoplay
        autoplayDelay={2}
        autoplayLoop
        index={2}
        data={images}
        renderItem={({ item,index }) => (
          <View style={[styles.child]}>
            <Image 
            style={{
              width: (width / 10) * 9,
              height: 200,
              borderRadius: 15,
              marginRight: 10,
              resizeMode: 'cover',
            }}
            key={index}
            source={{
              uri: item
            }}
            resizeMode='cover'
            />
          </View>
        )}

      />
    </View>
  )
}

export default FlatListSlider;
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