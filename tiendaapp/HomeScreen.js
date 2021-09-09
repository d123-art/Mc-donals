import React from 'react';
import { StyleSheet, Text, View ,Button} from 'react-native';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={style.container}>
        <Text>You have (undefined) friends.</Text>



        <Button
          title="Add some friends"
          onPress={() =>
            this.props.navigation.navigate('Friends')
          }
        />
      </View>
    );
  }
}

const style=StyleSheet.create({
  container:{width:200, height:200}

});

export default HomeScreen;