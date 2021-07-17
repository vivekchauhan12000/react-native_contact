import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import MyContact from "./Screen/MyContacts"
import Profile from './Screen/MyProfile'
import CreateContact from './Screen/CreateContact'

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Contact List">
        <Stack.Screen name="Contact List" component={MyContact}/>
        <Stack.Screen name="Profile" component={Profile}/>
        <Stack.Screen name="CreateContact" component={CreateContact}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})
