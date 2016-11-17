import React, {Component} from 'react'; 
import {View, WebView, StyleSheet} from 'react-native'; 

var styles = StyleSheet.create({
	container: {
		flex: 1, 
		backgroundColor: "#F6F6EF", 
		flexDirection: "column"
	}
});


export default class WEB_VIEW extends Component {
	render(){
		return (
			<View style = {styles.container}>
				<WebView url={this.props.url} />
			</View>
		)
	}
}


WEB_VIEW.propTypes = {
	url: React.PropTypes.string.isRequired
}