import {Text, View,StyleSheet} from 'react-native'; 
import React,{Component} from 'react'; 


var styles = StyleSheet.create({

	container: {
		marginTop: 65, 
		flex: 1
	}, 
	image: {
		height: 350
	}, 
	buttonText: {
		fontSize: 24, 
		color: "white", 
		alignSelf: "center"
	}
});

export default class Dashboard extends Component {
	render(){
		return (

			<View style={styles.container}>
				<Text> This is the dashboard </Text>
				<Text> {JSON.stringify(this.props.userInfo)} </Text>
			</View>

		)
	}
}