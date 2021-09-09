import React from 'react';
import { StyleSheet, Text, View ,Button,Image} from 'react-native';




class Informacion extends React.Component {

    render() {
    return(
        <View>
        <Text style={style.title}>hola</Text>
        </View>

       
    )


  }
}

const style=StyleSheet.create({
  title:{fontSize: 30}

});

export default Informacion;