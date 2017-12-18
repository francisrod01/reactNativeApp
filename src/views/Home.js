import React, { Component } from 'react'
import { StyleSheet, View, Button } from 'react-native'

import styles from '../Styles'


export default class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Welcome',
    }
    render() {
        const { navigate } = this.props.navigation
        return (
            <View style={styles.container}>
                <Button
                    title={"Go to App screen"}
                    onPress={() => {
                        return navigate('App')
                    }}
                />
                <Button
                    title={"Go to Jane's profile"}
                    onPress={() => {
                        return navigate('Profile', { name: 'Jane' })
                    }}
                />
            </View>
        )
    }
}

