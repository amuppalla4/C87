import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import firebase from "firebase";
export default class logout extends Component {
  componentDidMount(){
firebase.auth().signOut()
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>logout</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});