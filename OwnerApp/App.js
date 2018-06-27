import React from 'react';
import {StyleSheet, View} from 'react-native';
import SignInPage from './app/Containers/SignInPage'

export default class App extends React.Component {
    render() {
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
