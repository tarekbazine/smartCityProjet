import React, {Component} from 'react';
import {
    StyleSheet, Text, View
} from 'react-native';

export default class Offers extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>{this.props.title}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#0b2612',
        alignSelf: "flex-end"
    },
});
