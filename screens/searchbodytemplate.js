import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Text, Image } from 'react-native';

export default class SearchBodyTemplate extends Component {

    render() {
    return (
        <ScrollView style = {styles.container}>
            <View style = {styles.imageView}>
                <View style = {styles.dataView}>
                    
                    <Text>ID:{this.props.data.id}name:{this.props.data.name} </Text>
                    <Image source = {{uri: this.props.data.sprites.front_default}}/>
                    <Text>jhfukfgkthf</Text>
                </View>
            </View>

        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'green',
        height:400,
        width: 400
    },
    imageView: {
        flex: 1,
        backgroundColor: 'red'
    },
    dataView: {
        flex: 3,
        backgroundColor: 'green'
    }
})