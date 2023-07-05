import React from 'react'
import { FlatList } from 'react-native';
import { data1 } from '../constants/data';
import BestSellerProductItem from './BestSellerProductItem';

const BestSellerList = () => {
  return (
    <FlatList
      data={data1}
      renderItem={({ item, index }) => <BestSellerProductItem item={item} key={index} />}
      alwaysBounceVertical={true}
      showsVerticalScrollIndicator={false}
      style={{
        width:'100%',
        marginRight: 10,
        overflow:'hidden'
      }}
    />
  )
}

export default BestSellerList