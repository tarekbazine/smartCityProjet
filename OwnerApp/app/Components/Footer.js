import React, {Component} from 'react';
import {
    StyleSheet, Text, View
} from 'react-native';
import  TouchableOpacity from ""

export default class Offers extends Component {
    render() {
        return (
            <View style={styles.container}>
                {/*<View style={styles.leftButton}></View>*/}
                <View style={styles.specialButtonContainer}>
                    <TouchableOpacity style={styles.specialButton}>
                        <Text style={{alignSelf:'center',textColor:'#fff',fontSize:45}}>+</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.footerRight}></View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#0b2612'
    },

    specialButtonContainer:{
        width: 100,
        height: 100,
        borderRadius: 150/2,
        position:'absolute',
        alignSelf:'center',
        paddingTop:2,
        paddingRight:2,
        paddingBottom:2,
        paddingLeft:2,
        backgroundColor:'#fff',
        zIndex:20
    },
    specialButton:{
        width: 90,
        height: 90,
        backgroundColor:'#ca9358',
        marginBottom:200,
        borderRadius: 150/2
    }
});
