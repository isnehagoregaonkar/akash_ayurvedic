import { StyleSheet } from 'react-native'
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



const Tab = createBottomTabNavigator();
const Stack=createStackNavigator();

const AuthStackNavigation=()=>{
  return(
    <Stack.Navigator>
    <Stack.Screen name='Home' component={Home}  />
      <Tab.Screen name="Consult" component={ConsultDoctor} />
    </Stack.Navigator>
  )
}

const UnAuthStackNavigation=()=>(
  <Stack.Navigator
   screenOptions={{
    headerShown:false
  }}>
    <Stack.Screen name='Login' component={Login} />
    <Stack.Screen name='Register' component={Register} />
    <Stack.Screen name='Home' component={Home}  />
  </Stack.Navigator>
);

function BottomTabs() {
  return (
    <Tab.Navigator backBehavior='history' initialRouteName='Home' screenOptions={{tabBarActiveTintColor:Colors.active}}>
      <Tab.Screen name="Products" component={Products} />
      <Tab.Screen name="Consult" component={ConsultDoctor} />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

const Navigation = () => {
  const [loggedIn,setLoggedin]=useState(false)
  return (
    <NavigationContainer>
      {
        loggedIn ? <AuthStackNavigation/> : <UnAuthStackNavigation/>
      }
    </NavigationContainer>
  )
}

export default Navigation;

const styles = StyleSheet.create({})