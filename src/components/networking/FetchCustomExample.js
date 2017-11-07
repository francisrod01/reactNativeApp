import React, {Component} from 'react'
import {ActivityIndicator, ListView, Text, View} from "react-native";

export default class FetchCustomExample extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoading: true
        }
    }

    componentDidMount() {
        let urlString = 'https://facebook.github.io/react-native/movies.json'
        let options = {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        }
        return fetch(urlString, options)
            .then((response) => response.json())
            .then((responseJson) => {
                console.log('success', responseJson)

                let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
                this.setState({
                    isLoading: false,
                    dataSource: ds.cloneWithRows(responseJson.movies),
                }, function () {
                    // do something with new state.
                })
            })
            .catch((error) => {
                console.error('error', error)
            })
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={{flex: 1, paddingTop: 20}}>
                    <ActivityIndicator/>
                </View>
            )
        }

        return (
            <View>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => <Text>{rowData.title}, {rowData.releaseYear}</Text>}
                />
            </View>
        )
    }
}
