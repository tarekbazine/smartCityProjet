import React from 'react';
import {
    StyleSheet, Text, View, TouchableOpacity
} from 'react-native';
import { Calendar,CalendarList } from 'react-native-calendars';
import Icon from 'react-native-vector-icons/FontAwesome';

import {createStackNavigator} from "react-navigation";
import AddOffer from "./AddOffer";
import defaultStyle from '../assets/style/DefaultStyles';
import Header from '../Components/Header';


class __AgendaPage extends React.Component {
    render() {
        const addOffer = () => {
            console.warn("press00")
        }

        return (
            <View style={styles.container}>
                {/*<Header title='Mon Agenda'/>*/}
                <View style={styles.calendarContainer}>
                    <Text style={{color:'#9c9c9c', fontFamily:'Exo', marginLeft:25, fontSize:17, marginBottom:20}}>Explore Your Offers</Text>
                    {/*calendar*/}
                    <CalendarList
                        markedDates={
                            {   '2018-06-27': {textColor: 'green'},
                                '2018-06-30': {startingDay: true, color: 'green'},
                                '2018-07-01': {selected: true, endingDay: true, color: 'green', textColor: 'gray'},
                                '2018-07-04': {disabled: true, startingDay: true, color: 'green', endingDay: true}
                            }
                        }
                        markingType={'period'}
                        onDayPressed = {(day) => {console.warn('selected day', day)}}
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
                        </TouchableOpacity>
                    </View>
                    <View style={styles.footerRight}>
                        <TouchableOpacity style={styles.eadgIconRight}>
                            <View style={{justifyContent:'flex-end',flexDirection: 'row'}}>
                                <Icon name="th-list" style={styles.icons}/>
                                <Text style={{color:'#fff',marginTop:5,...defaultStyle.text}}>Labors</Text>
                            </View>
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
        alignSelf:'flex-start',
        width:'50%',
    },
    footerRight:{
        alignSelf:'flex-end',
        width:'50%',
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
        color : '#fff',
        zIndex:20
    },
    middleIcone:{
        alignSelf:'center'
    },
    eadgIconLeft:{
        marginBottom:-75,
        paddingLeft:15,
        paddingTop:15
    },
    eadgIconRight:{
        marginBottom:-75,
        paddingTop:14
    }
});

const defaultStyle = {
    text: {
        fontFamily: 'Exo'
    }
}




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