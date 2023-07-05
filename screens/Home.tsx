import React from 'react'
import { ScrollView, StyleSheet, View, Text} from 'react-native'
import AppBar from '../component/AppBar'
import AppListView from '../component/AppListView'
import Colors from '../constants/Colors'
import { categoryList } from '../constants/data';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import FlatListSlider from '../component/FlatListSlider';
import ProductListSwiper from '../component/ProductListSwiper';

const Home = () => {
  return (
    <SafeAreaProvider>
      <AppBar title='Home' />
      {/* <WelcomeView /> */}
      <ScrollView nestedScrollEnabled={true} style={styles.container} showsVerticalScrollIndicator={false}>
      <FlatListSlider />
        <View style={styles.productsView}>
          <Text style={styles.headerText}>Explore by Categories</Text>
          <AppListView data={categoryList} />
          <ProductListSwiper />
        </View>
        <View style={styles.productsView}>
          <Text style={styles.headerText}>Combos</Text>
        </View>
      </ScrollView>
    </SafeAreaProvider>
  )
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  productsView: {
    marginTop: 20
  },
  headerText: {
    color: Colors.darkText,
    fontWeight: 'bold',
    marginBottom:5,
    fontSize:16
  },
  spacing:{
    marginBottom:10,
  }
})