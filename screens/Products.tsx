import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProductList from '../component/ProductList'
import AppListView from '../component/AppListView'
import { categoryList } from '../constants/data'
import { RouterProps } from '../utils/PropTypes'

const Products = ({ navigation }: RouterProps) => {
  return (
    <>
      <AppListView data={categoryList} />
      <ScrollView nestedScrollEnabled={true} style={styles.container} showsVerticalScrollIndicator={false}>
        <ProductList navigation={navigation} />
      </ScrollView>
    </>
  )
}

export default Products

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15
  }
})