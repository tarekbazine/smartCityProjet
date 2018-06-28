import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import SignInPage from './app/Containers/SignInPage'
import { Font } from 'expo'
import AgendaPage from './app/Containers/AgendaPage'
import Offers from './app/Containers/Offers'
export default class App extends React.Component {
import { createStackNavigator } from 'react-navigation';
import HomePage from './app/Containers/HomePage';


class __App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loading: true };
    }

    async componentWillMount() {
        await Font.loadAsync({
            Exo: require('./app/assets/font/Exo/Exo-Medium.ttf')
        });
        this.setState({ loading: false });
    }

    render() {
        if (this.state.loading){
            return(<Text>Loading</Text>)
        }
        return (
            <View style={styles.container}>
                <SignInPage/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#043b32',
        paddingTop: 25,
        flex: 1
    },
});


const App = createStackNavigator({
    Home: {
        screen: __App
    },
    HomeScreen: {
        screen: HomePage,
    },
    SignInScreen:SignInPage
},{
    headerMode: 'none',
});

export default App;