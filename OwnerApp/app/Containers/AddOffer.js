import React from 'react';
import {
    StyleSheet, Text, TextInput,
    Button, View, Image
} from 'react-native';
import Header from '../Components/Header'


export default class AddOffer extends React.Component {
    render() {
        const sign = () => {
            console.warn("press")
        }

        return (
            <View style={styles.container}>
                <Header/>

                <View style={styles.inputsContainer}>
                    <View>
                        <TextInput style={styles.inputStyle}/>
                        <TextInput style={styles.inputStyle}/>
                        <TextInput style={styles.inputStyle}/>
                        <TextInput style={styles.inputStyle}/>
                        <TextInput style={styles.inputStyle}/>
                        <TextInput style={styles.inputStyle}/>
                    </View>
                </View>

                {/*<Footer/>*/}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop:75,
        paddingBottom:75,
        flex: 1,
        backgroundColor: '#fff',
        // flexDirection: 'column'
    },
    inputsContainer: {
        // flex: 1,

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

