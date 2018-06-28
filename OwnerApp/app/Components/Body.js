import React, {Component} from 'react';
import {
    StyleSheet, Text, View
} from 'react-native';

export default class Offers extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.subHeader}>{this.props.title}</Text>
                {this.props.children}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 7,
        backgroundColor:'#ccc',
        padding:15,
        flexDirection: 'column',
        borderTopLeftRadius:15,
        borderTopRightRadius:15,
        overflow:'hidden',
        justifyContent:'center'
    },
    subHeader: {
        color:'darkgray'
    }
});
