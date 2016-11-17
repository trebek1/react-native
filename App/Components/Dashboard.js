import {Text, View,StyleSheet, Image, TouchableHighlight} from 'react-native'; 
import React,{Component} from 'react'; 
import Profile from "./Profile";


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
	makeBackground(btn){
		var obj = {
			flexDirection: "row",
			alignSelf: "stretch",
			justifyContent: "center",
			flex: 1
		}

		if(btn ===0){
			obj.backgroundColor="#48BBEC";
		}else if (btn === 1){
			obj.backgroundColor="#E77AAE";
		}else{
			obj.backgroundColor="#758BF4";
		}
		return obj;
	}
	goToProfile(){
		this.props.navigator.push({
            component: Profile,
            title: 'Profile Page',
            passProps: {userInfo: this.props.userInfo}
        });

	}
	goToRepos(){
		console.log("going to repos");
	}
	goToNotes(){
		console.log("going to notes");
	}
	render(){
		return (

			<View style={styles.container}>
				<Image source={{uri: this.props.userInfo.avatar_url}} style={styles.image} />
				<TouchableHighlight
					style={this.makeBackground(0)}
					onPress={this.goToProfile.bind(this)}
					underlayColor="#88D4F5">
						<Text style={styles.buttonText}> View Profile </Text>
				</TouchableHighlight>
				<TouchableHighlight
					style={this.makeBackground(1)}
					onPress={this.goToRepos.bind(this)}
					underlayColor="#88D4F5">
						<Text style={styles.buttonText}> Repos </Text>
				</TouchableHighlight>
				<TouchableHighlight
					style={this.makeBackground(2)}
					onPress={this.goToNotes.bind(this)}
					underlayColor="#88D4F5">
						<Text style={styles.buttonText}> Notes </Text>
				</TouchableHighlight>
				
			</View>

		)
	}
}