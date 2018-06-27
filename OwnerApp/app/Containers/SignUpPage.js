import React from 'react';
import {
    StyleSheet, Text, TextInput,
    Button, View, Image
} from 'react-native';

export default class SignUpPage extends React.Component {
    render() {

        const sign = () => {
            console.warn("press")
        }

        return (
            <View style={styles.container}>

                <View style={styles.logo}>
                    <Image style={styles.logo_img}
                           source={require('../assets/img/logo.png')}/>

                </View>
                <View style={styles.inputsContainer}>

                    <View>
                        <TextInput/>
                        <TextInput/>
                    </View>

                    <View>
                        <View>
                            <Button
                                onPress={sign}
                                title="Learn More"
                                color="#841584"
                                accessibilityLabel="Learn more about this purple button"
                            />
                            <Button
                                onPress={sign}
                                title="Learn More"
                                color="#841584"
                                accessibilityLabel="Learn more about this purple button"
                            />
                        </View>
                    </View>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#045249',
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
});
