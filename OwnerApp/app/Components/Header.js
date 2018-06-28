import React, {Component} from 'react';
import {
    StyleSheet, Text, View
} from 'react-native';
import defaultStyle from "../assets/style/DefaultStyles";

export default class Header extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.txtStyle}>{this.props.title}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        position:'absolute',
        top:0,
        zIndex:2,
        height:75,
        backgroundColor:'#0b2612',
    },
    txtStyle:{
        ...defaultStyle.text,
        height: '100%',
        fontSize: 20,
        paddingLeft:20,
        textAlign: 'center',
        color: '#fff',
        textAlignVertical: 'center',
    }
});
