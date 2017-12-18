/**
 * Sample React Native App
 * https://facebook.github.io/react-native/docs/navigation.html
 * @flow
 */

import React, { Component } from 'react'
import { StackNavigator } from 'react-navigation'

import AppScreen from './views/AppScreen'
import HomeScreen from './views/Home'
import ProfileScreen from './views/Profile'


const RoutesApp = StackNavigator({
    Home: { screen: HomeScreen },
    App: { screen: AppScreen },
    Profile: { screen: ProfileScreen },
})

export default RoutesApp
