import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { Screen } from 'react-native-screens';
import Home from '../screens/HomeSreen/Home';
import Add from '../screens/AddScreen/Add';

const Stack = createNativeStackNavigator()

const Navigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='Home' component={Home} options={{
                title:{},
                headerBackTitle:false,
                headerShown:false
            }}/>
            <Stack.Screen name='Add' component={Add}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation

const styles = StyleSheet.create({})