import React from 'react';
import {
    StyleSheet, Text, View, TouchableOpacity
} from 'react-native';
import { Calendar,CalendarList } from 'react-native-calendars';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createStackNavigator} from "react-navigation";
import AddOffer from "./AddOffer";
import defaultStyle from '../assets/style/DefaultStyles';

class __AgendaPage extends React.Component {

    render() {
        const addOffer = () => {
            console.warn("press00")
        }

        return (
            <View style={styles.container}>
                <View style={styles.calendarContainer}>
                    <Text style={{color:'#9c9c9c', fontFamily:'Exo', marginLeft:25, fontSize:17, marginBottom:20}}>Explore Your Offers</Text>
                    {/*calendar*/}
                    <CalendarList
                        markedDates={
                            {   '2018-06-27': {textColor: 'green'},
                                '2018-06-30': {startingDay: true, color: 'green'},
                                '2018-07-1': {selected: true, endingDay: true, color: 'green', textColor: 'gray'},
                                '2018-07-04': {disabled: true, startingDay: true, color: 'green', endingDay: true}
                            }
                        }
                    />
                </View>
                <View style={styles.footer}>
                    <View style={styles.footerLeft}>
                        <TouchableOpacity style={styles.eadgIconLeft}>
                            <Icon name="power-off" style={styles.icons}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.addButtonContainer}>
                        <TouchableOpacity
                            onPress={()=>addOffer()}
                            style={styles.addButton}>
                            <Icon name="plus" style={[styles.icons, styles.middleIcone]}/>
                            {/*<Text style={{alignSelf:'center',color:'#fff',fontSize:45}}>+</Text>*/}
                        </TouchableOpacity>
                    </View>
                    <View style={styles.footerRight}>
                        <TouchableOpacity style={styles.eadgIconRight}>
                            <Icon name="power-off" style={styles.icons}/>
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
        backgroundColor:defaultStyle.green
    },
    calendarContainer:{
        marginTop:75,
        paddingTop:15,
        backgroundColor:'#fff',
        flexDirection: 'column',
        flex:6,
        borderTopLeftRadius:15,
        borderTopRightRadius:15,
        overflow:'hidden'
    },
    footer:{
        flex:1,
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'flex-end',
        marginBottom:65,
        maxHeight:5,

    },
    scoreContainer:{

    },
    footerLeft:{

    },
    footerRight:{
    },
    addButtonContainer:{
        width: 95,
        height: 95,
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
        padding: 28,
        maxHeight:85,
        maxWidth:85,
        backgroundColor:defaultStyle.yellow,
        borderRadius: 150/2,
        position:'absolute',
        alignSelf:'center',
        marginBottom:120
    },
    icons: {
        fontSize : 35,
        color : '#000',
        zIndex:20
    },
    middleIcone:{
        alignSelf:'center'
    },
    eadgIconLeft:{
        alignSelf:'flex-start',
        marginBottom:200,
    },
    eadgIconRight:{
        alignSelf:'flex-end',
        position:'absolute',
        bottom:5,
        marginBottom:200,
    }
});



const AgendaPage = createStackNavigator({
    AgendaScreen:__AgendaPage,
    OffersScreen: {
        screen: AddOffer,
    },
},{
    initialRouteName: 'AgendaScreen',
    headerMode: 'none',
});

export default AgendaPage;