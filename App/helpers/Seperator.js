import {View, StyleSheet} from "react-native"; 
import React, {Component} from "react"; 

var styles = StyleSheet.create({
	seperator: {
		height: 1, 
		backgroundColor: "#E4E4E4",
		flex: 1, 
		marginLeft: 15
	}
});


export default class Seperator extends Component {
	render(){
		return (
			<View style={styles.seperator} />
			)
	}
};
