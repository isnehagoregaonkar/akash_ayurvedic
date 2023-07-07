import React from 'react'
import { ScrollView, StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import AppBar from '../component/AppBar'
import AppListView from '../component/AppListView'
import Colors from '../constants/Colors'
import { categoryList } from '../constants/data';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import FlatListSlider from '../component/FlatListSlider';
import ProductListSwiper from '../component/ProductListSwiper';

const Home = () => {
  return (
    <SafeAreaProvider style={{ backgroundColor: '#fff' }}>
      {/* <AppBar title='Home' /> */}
      {/* <WelcomeView /> */}
      <ScrollView nestedScrollEnabled={true} style={styles.container} showsVerticalScrollIndicator={false}>
        <FlatListSlider />
        <View style={styles.productsView}>
          <Text style={styles.headerText}>Explore by Categories</Text>
          <AppListView data={categoryList} />
          <ProductListSwiper />
        </View>
        <View style={styles.productsView}>
          <View style={styles.headerTextView}>
            <Text style={styles.headerText}>Combos</Text>
            <TouchableOpacity>
              <Text style={styles.viewAllText}>View All</Text>
            </TouchableOpacity>
          </View>
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
  headerTextView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  headerText: {
    color: Colors.darkText,
    fontWeight: 'bold',
    marginBottom: 5,
    fontSize: 16,
  },
  viewAllText: {
    color: Colors.primary,
    fontSize: 12,
    // borderRadius: 5,
    // borderColor: Colors.primary,
    // borderWidth: .5,
    padding: 3,
    margin:3,
    fontWeight:'500'
  },
  spacing: {
    marginBottom: 10,
  },
})