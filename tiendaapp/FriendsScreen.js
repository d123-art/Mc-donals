import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';

class FriendsScreen extends React.Component {
  render() {
    return (
      <View style={style.container}>
        <Text>Add friends here!</Text>

        <Button
          title="Back to home"
          onPress={() =>
            this.props.navigation.navigate('Home')
          }
        />
      </View>
    );
  }
}
const style=StyleSheet.create({
  container:{width:200, height:200}

});



export default FriendsScreen;