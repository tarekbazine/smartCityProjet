import React from 'react';
import {
    StyleSheet, Text, TextInput,
    Button, View, Image,
    TouchableOpacity,
    KeyboardAvoidingView
} from 'react-native';


export default class SignInPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const sign = () => {
            console.warn("press")
            this.props.navigation.navigate('HomePage')
        }

        return (
            <View style={styles.container}>

                <View style={styles.logo}>
                    <Image style={styles.logo_img}
                           source={require('../assets/img/logo.png')}/>

                </View>
                <View style={styles.inputsContainer}>

                    <View
                        style={{
                            width: '100%',
                            paddingTop: 15,
                            flex: 2
                        }}>
                        <TextInput
                            placeholder="User name"
                            underlineColorAndroid='transparent'
                            style={styles.TextInputName}/>
                        <TextInput
                            placeholder="Password"
                            secureTextEntry={true}
                            underlineColorAndroid='transparent'
                            style={styles.TextInputPass}/>
                    </View>

                    <View style={{
                        flex: 3,
                        alignItems: 'stretch'
                    }}>

                        <View style={styles.btnsContainer}>
                            <TouchableOpacity
                                style={{
                                    width: "45%",
                                    borderBottomLeftRadius: 100,
                                    borderTopLeftRadius: 100,
                                    borderColor: '#fff',
                                    borderWidth: 2,
                                    height:50
                                }}
                                onPress={() => this.props.navigation.navigate('HomeScreen')}
                            >
                                <Text style={{
                                    ...defaultStyle.text,
                                    height: '100%',
                                    fontSize: 20,
                                    textAlign: 'center',
                                    color: '#fff',
                                    textAlignVertical: 'center',
                                }}>Sign Up</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    width: "45%",
                                    borderBottomRightRadius: 100,
                                    borderTopRightRadius: 100,
                                    backgroundColor: '#ffbc00',
                                    borderColor: '#ffbc00',
                                    borderWidth: 2,
                                    height:50
                                }}
                                onPress={sign}
                            >
                                <Text style={{
                                    ...defaultStyle.text,
                                    height: '100%',
                                    fontSize: 20,
                                    color: '#fff',
                                    textAlignVertical: 'center',
                                    textAlign: 'center',
                                }}>Connexion</Text>
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity
                            style={styles.txtStyle}
                        >
                            <Text style={{
                                ...defaultStyle.text,
                                color: '#fff',
                                borderColor: '#fff',
                                textAlign: 'right',
                                paddingRight: 30
                            }}>Password forgotten?</Text>
                        </TouchableOpacity>

                    </View>

            </View>
    </View>
    )
        ;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#045249',
        justifyContent: 'center'
    },
    logo_img: {
        height: 302,
        width: 200
    },
    logo: {
        paddingTop: 10,
        flex: 1,
    },
    inputsContainer: {
        flex: 1,
    },
    btnsContainer: {
        marginLeft: 30,
        padding: 25,
        flex: 1,
        width: 300,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    txtStyle: {
        flex: 2,
        alignContent: 'flex-end'
    },
    TextInputName: {
        textAlign: 'center',
        height: 50,
        marginRight: 120,
        width: 230,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        backgroundColor: "#FFFFFF",
        marginBottom:15
    },
    TextInputPass: {
        textAlign: 'center',
        height: 50,
        marginLeft: 130,
        width: 230,
        borderBottomLeftRadius: 20,
        borderTopLeftRadius: 20,
        backgroundColor: "#FFFFFF"
    }
});

const defaultStyle = {
    text: {
        fontFamily: 'Exo'
    }
}
