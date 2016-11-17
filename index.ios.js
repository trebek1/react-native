import Main from "./App/Components/Main";
//const Main = require(); 

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, NavigatorIOS, View } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: "#111111"
  }
});

export default class githubNotetaker extends Component {
  render() {
    return (
      <NavigatorIOS
      style={styles.container}
      initialRoute={{
        title: "Github Notetaker",
        component: Main
      }}/>
    );
  }
}

AppRegistry.registerComponent('githubNotetaker', () => githubNotetaker);
