import React from 'react';
import {
    StyleSheet, Text, TextInput,
    Button, View, Image
} from 'react-native';

export default class AddOffer extends React.Component {
    render() {
        const sign = () => {
            console.warn("press")
        }

        return (
            <View style={styles.container}>

                <View style={styles.inputsContainer}>
                    <View>
                        <TextInput style={styles.inputStyle}/>
                        <TextInput style={styles.inputStyle}/>
                        <TextInput style={styles.inputStyle}/>
                        <TextInput style={styles.inputStyle}/>
                        <TextInput style={styles.inputStyle}/>
                        <TextInput style={styles.inputStyle}/>
                    </View>
                    <View style={styles.footerContainer}>
                        <View style={styles.leftContainer}></View>
                        <View style={styles.middleContainer}></View>
                        <View style={styles.rightContainer}></View>
                    </View>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0b2612',
        // flexDirection: 'column'
    },
    logo_img:{
        height: 80,
        width: 50
    },
    logo: {
        flex: 1,
        // height: 50,
        // width: 100
    },
    inputsContainer: {
        flex: 1,
        // height: '100%',
        // height: 50,
        // width: 100,
        // flexDirection: 'column',
        // justifyContent: 'space-around'
    },
    inputStyle: {

    },
    footerContainer:{
        backgroundColor: '#0b2612',
    },
    leftContainer: {

    },
    middleContainer:{

    },
    rightContainer:{

    }
});

