import React from 'react';
import { StyleSheet, View } from 'react-native';
import SignUpPage from './app/Containers/SignUpPage'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SignUpPage/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        // marginTop: 48,
        flex: 1
    },
});
