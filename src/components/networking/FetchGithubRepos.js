import React, {Component} from 'react'
import {ActivityIndicator, ListView, StyleSheet, Text, View} from "react-native";

export default class FetchGithubRepos extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoading: true
        }
    }

    componentDidMount() {
        let urlString = 'https://api.github.com/users/francisrod01/repos'
        let options = {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }
        return fetch(urlString, options)
            .then((response) => response.json())
            .then((responseJson) => {
                console.log('success', responseJson)

                let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
                this.setState({
                    isLoading: false,
                    dataSource: ds.cloneWithRows(responseJson),
                }, function () {
                    // do something with new state.
                })
            })
            .catch((error) => {
                console.error(error)
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

                <Text style={styles.textTitle}>My Github Repos</Text>

                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => {
                        return (
                            <View style={{flex: 1, paddingTop: 20}}>
                                <Text>Name: {rowData.name}</Text>
                                <Text>Url: {rowData.git_url}</Text>
                                <Text>Language: {rowData.language}</Text>
                                <Text>Forks: {rowData.forks}</Text>
                                <Text>Default branch: {rowData.default_branch}</Text>
                            </View>
                        )
                    }}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textTitle: {
        fontSize: 30
    }
})
