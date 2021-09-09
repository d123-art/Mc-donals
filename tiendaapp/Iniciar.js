import React from 'react';
import { StyleSheet, Text, View ,Button,Image,TouchableOpacity} from 'react-native';
import { Input } from 'react-native-elements';


class Iniciar extends React.Component {

    render() {
    return(

      
      <View style={style.container}>
     
        <br></br>
        <br></br>
        <br></br>

            <Text style={style.title}>Escribe tu país
            </Text>

            <br></br>
        <br></br>
            <Input 
        style={style.input1}
        
       
      />
            <br></br>
        <br></br>
        <br></br>
        
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <TouchableOpacity
        onPress={() =>
            this.props.navigation.navigate('Home')
          }

          style={style.buttonSend1}
        
        >
<       center>
            <Text  style={style.title}>Siguiente</Text>
            </center>

        </TouchableOpacity>
    
  
        </View>
         
       
    )


  }
}


const style=StyleSheet.create({
    container:{ 
        flex:1,
        justifyContent:"center",
        alignItems:'center',
        alignContent:'center',
        backgroundColor:'#FFFFFF'
    },
    title:{
        fontSize:15,
        margin: '20px',  
        fontFamily: "Arial Black",
    },
    input1:{
     
      backgroundColor:"#FFFFFF",
      width:400,
      height:8,
      borderRadius: 4, 
      borderBottomColor: '#030303',
    borderBottomWidth: StyleSheet.hairlineWidth
    },

 
    buttonSend1:{
        marginTop: 16,
        paddingVertical: 8,
        width:500, 
        height:50,
        backgroundColor: "#FECA09",
        color: "#FECA09",
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold"
    
    },
  

});

export default Iniciar;