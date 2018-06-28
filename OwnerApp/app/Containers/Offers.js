import React from 'react';
import {
    StyleSheet, Text, View
} from 'react-native';
import Header from '../Components/Header';
import Body from '../Components/Body';


export default class Offers extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Header title={'Offers'}/>
                <Body title={'Explore '}>
                    <Text>test</Text>
                </Body>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#0b2612'
    },
    calendarContainer:{
        marginTop:75,
        paddingTop:15,
        backgroundColor:'#fff',
        flexDirection: 'column',
        // justifyContent:'space-between',
        flex:7,
        borderTopLeftRadius:15,
        borderTopRightRadius:15,
        overflow:'hidden'
    },
    footer:{
        flex:1,
        flexDirection: 'row',
        justifyContent:'center',
        marginBottom:40,
        maxHeight:20
    },
    scoreContainer:{

    },
    footerLeft:{
    },
    footerRight:{
    },
    addButtonContainer:{
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
    addButton:{
        width: 90,
        height: 90,
        backgroundColor:'#ca9358',
        marginBottom:200,
        borderRadius: 150/2
    }

});
