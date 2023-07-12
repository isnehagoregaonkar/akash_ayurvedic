import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Profile from '../screens/Profile';
import Products from '../screens/Products';
import ConsultDoctor from '../screens/ConsultDoctor';
import Cart from '../screens/Cart';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../constants/Colors';
import { BottomNavigation } from 'react-native-paper';
import { width } from '../constants/Layout';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const AuthStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={Home} />
      <Tab.Screen name="Consult" component={ConsultDoctor} />
    </Stack.Navigator>
  )
}

const UnAuthStackNavigation = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name='Login' component={Login} />
    <Stack.Screen name='Register' component={Register} />
    <Stack.Screen name='Home' component={Home} />
  </Stack.Navigator>
);

function BottomTabs() {
  return (
    <Tab.Navigator
      backBehavior='history'
      initialRouteName='Home'
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size, focused }) => (
            <View style={focused ? styles.activeTabIconView : {}} >
              <MaterialCommunityIcons
                name="home"
                color={color}
                size={size} />
            </View>
          )
        }}
      />
      <Tab.Screen
        name="Products"
        component={Products}
        options={{
          tabBarLabel: 'Products',
          tabBarIcon: ({ color, size, focused }) => (
            <View style={focused ? styles.activeTabIconView : {}} >
              <MaterialCommunityIcons
                name="view-grid"
                color={color}
                size={size} />
            </View>
          )
        }} />

      <Tab.Screen
        name="Consult"
        component={ConsultDoctor}
        options={{
          tabBarLabel: 'Consult',
          tabBarIcon: ({ color, size, focused }) => (
            <View style={focused ? styles.activeTabIconView : {}} >
              <MaterialCommunityIcons
                name="comment-plus"
                color={color}
                size={size} />
            </View>
          )
        }} />

      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({ color, size, focused }) => (
            <View style={focused ? styles.activeTabIconView : {}} >
              <MaterialCommunityIcons
                name="cart"
                color={color}
                size={size} />
            </View>
          )
        }} />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size, focused }) => (
            <View style={focused ? styles.activeTabIconView : {}} >
              <MaterialCommunityIcons
                name="account-circle"
                color={color}
                size={size} />
            </View>
          )
        }} />
    </Tab.Navigator>
  );
}

const Navigation = () => {
  const [loggedIn, setLoggedin] = useState(false)
  return (
    <NavigationContainer>
      {
        // loggedIn ? <BottomTabs/> : <UnAuthStackNavigation/>
        <BottomTabs />
      }
    </NavigationContainer>
  )
}

export default Navigation;

const styles = StyleSheet.create({
  activeTabIconView: {
    padding: 5,
    margin: 2,
  }
})