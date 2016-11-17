import {View, Text, StyleSheet, TextInput, TouchableHighlight, ActivityIndicatorIOS} from 'react-native'; 
import React, {Component} from 'React'; 

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1, 
		padding: 30, 
		marginTop: 65, 
		flexDirection: "column",
		justifyContent: "center",
		backgroundColor: "#48BBEC"
	}, 
	title: {
		marginBottom: 20, 
		fontSize: 25, 
		textAlign: "center", 
		color: "#fff"
	}, 
	searchInput: {
		height: 50, 
		padding: 4, 
		marginRight: 5, 
		fontSize: 23, 
		borderWidth: 1, 
		borderColor: "white", 
		borderRadius: 8, 
		marginBottom: 10, 
		marginTop: 10, 
		alignSelf: "stretch", 
		justifyContent: "center"
	}, 
	button: {
		height: 45,
		flexDirection: "row",
		backgroundColor: "white", 
		borderColor: "white", 
		borderWidth: 1, 
		borderRadius: 8, 
		marginBottom: 10, 
		marginTop: 10, 
		alignSelf: "stretch",
		justifyContent: "center"
	}
});

export default class Main extends Component{

	constructor(props){
		super(props);
		// if you want to access this.props in constructor, pass it props 
		this.state = {
			username: "",
			isLoading: false, 
			error: false
		}
	}

	handleChange(event){
		this.setState({
			username: event.nativeEvent.text
		});
	}

	handleSubmit(){
		// update indicator IOS spinner
		this.setState({
			isLoading: true
		});
		console.log("SUBMIT ", this.state.username); 
		// fetch data from github 
		// reroute us to the next route passing in github info 
	}

	render(){
		return(
			<View style={styles.mainContainer}>
				<Text style={styles.title}>Search for a Github User </Text>
				<TextInput 
					style={styles.searchInput}
					value={this.state.username}
					onChange={this.handleChange.bind(this)}/>

					<TouchableHighlight
						style={styles.button}
						onPress={this.handleSubmit.bind(this)}
						underlayColor="white">
							<Text style={styles.buttonText}> Search </Text>
					</TouchableHighlight>
			</View>
		)
		
	}
};
