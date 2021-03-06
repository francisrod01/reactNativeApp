import React, { Component } from 'react'
import { View, Button, Text } from 'react-native'

import styles from '../Styles'


class ProfileScreen extends Component {
    // New options can be defined as a functon of the screen's props:
    static navigationOptions = ({ navigation }) => ({
        title: `Chat with ${navigation.state.params.name}`,
    })
    render() {
        const { navigate } = this.props.navigation
        // The screen's current route is passed in to `props.navigation.state`:
        const { params } = this.props.navigation.state
        return (
            <View style={styles.container}>
                <Text>Chat with { params.name }</Text>
            </View>
        )
    }
}

export default ProfileScreen
