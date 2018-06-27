import React from 'react';
import {
    StyleSheet, Text, TextInput,
    Button, View, Image,
    TouchableOpacity
} from 'react-native';

export default class SignInPage extends React.Component {
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

                    <View style={{flex:2}}>
                        <TextInput

                            // Adding hint in Text Input using Place holder.
                            placeholder="Enter Text in TextInput"

                            // Making the Under line Transparent.
                            underlineColorAndroid='transparent'

                            // Calling the custom TextInputStyleClass.
                            style={styles.TextInputStyleClass}/>
                        <TextInput/>
                    </View>

                    <View style={{
                        flex:2,
                        alignItems:'stretch'
                    }}>

                        <View style={styles.btnsContainer}>
                            <TouchableOpacity
                                style={{
                                    width:"45%",
                                    borderBottomLeftRadius:100,
                                    borderTopLeftRadius:100,
                                    borderColor: '#fff',
                                    borderWidth: 2
                                }}
                                onPress={sign}
                            >
                                <Text style={{
                                    height:'100%',
                                    fontSize: 20,
                                    textAlign:'center',
                                    color:'#fff',
                                    textAlignVertical:'center',
                                }}>Sign Up</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    width:"45%",
                                    borderBottomRightRadius:100,
                                    borderTopRightRadius:100,
                                    backgroundColor: '#ffbc00',
                                    borderColor: '#ffbc00',
                                    borderWidth: 2
                                }}
                                onPress={sign}
                            >
                                <Text style={{
                                    height:'100%',
                                    fontSize: 20,
                                    color:'#fff',
                                    textAlignVertical:'center',
                                    textAlign:'center',
                                }}>Connexion</Text>
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity
                            style={styles.txtStyle}
                        >
                            <Text style={{
                                color:'#fff',
                                borderColor: '#fff',
                                textAlign:'right',
                                marginRight:30
                            }}>Password forgotten?</Text>
                        </TouchableOpacity>

                    </View>

                </View>
            </View>
        );
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
        paddingTop:10,
        flex: 1,

        // height: 50,
        // width: 100
    },
    inputsContainer: {
        flex: 1,
        // height: '100%',
        // width: 100,
        // flexDirection: 'column',
        // justifyContent: 'space-around'
    },
    btnsContainer:{
        padding:25,
        flex:1,
        width:300,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    txtStyle:{
        flex:1,
        alignContent:'flex-end'
    },
    TextInputStyleClass:{

// Setting up Hint Align center.
        textAlign: 'center',

// Setting up TextInput height as 50 pixel.
        height: 50,

// Set border width.
        borderWidth: 2,

        // Set border Hex Color Code Here.
        borderColor: '#FF5722',

// Set border Radius.
        borderRadius: 20 ,

//Set background color of Text Input.
        backgroundColor : "#FFFFFF"

    }
});
