import React from 'react';
import { StyleSheet, Text, View ,Button,Image,TouchableOpacity} from 'react-native';
import imagen1 from './assets/imagen1.jpeg';
import entrada1 from './assets/entrada1.jpeg';
import entrada2 from './assets/entrada2.jpeg'
import entrada3 from './assets/entrada3.jpeg'
import entrada4 from './assets/entrada4.jpeg'
import entrada5 from './assets/entrada5.jpeg'
import entrada6 from './assets/entrada6.jpeg'
import entrada7 from './assets/entrada7.jpeg';


class Entrada extends React.Component {

    render() {
    return(

      
        
        
        <View style={style.container}>

            
            <br></br>
        <Text style={style.title}>Un McDonald's en tu mano</Text>
        <br></br>
        

        <Image 
          style={style.imagen} 
          source={entrada1}
          href="http://www.aulafacil.com" 
          class="rounded float-end figure-img img-fluid rounded border border-5"
          width="400" height="400" 
          />


<TouchableOpacity
        onPress={() =>
            this.props.navigation.navigate('Entrada1')
          }

          style={style.buttonSend}
        
        >
<Text>Entrar</Text>
</TouchableOpacity>

        <br></br>
        <br></br>
        <br></br>
        

        <Text style={style.title}>Pide,nosotros te lo llevamos</Text>

        <br></br>

        <Image 
        
        style={style.imagen} source={entrada2} />

<TouchableOpacity
        onPress={() =>
            this.props.navigation.navigate('Pedido')
          }

          style={style.buttonSend}
        
        >
<Text>Entrar</Text>
</TouchableOpacity>

        <br></br>
        <br></br>
        <br></br>
        

        <Text style={style.title}>Cupones</Text>

        <br></br>

        <Image 
        
        style={style.imagen} source={entrada3} />

<TouchableOpacity
        onPress={() =>
            this.props.navigation.navigate('Cupones')
          }

          style={style.buttonSend}
        
        >
<Text>Entrar</Text>
</TouchableOpacity>



        <br></br>
        <br></br>
        <br></br>
        

        <Text style={style.title}>Club Vip</Text>

        <br></br>

        <Image 
        
        style={style.imagen} source={entrada4} />


        <br></br>
        <br></br>
        <br></br>
        

        <Text style={style.title}>Mis Cupones</Text>

        <br></br>

        <Image 
        
        style={style.imagen} source={entrada5} />

<TouchableOpacity
        onPress={() =>
            this.props.navigation.navigate('Login')
          }

          style={style.buttonSend}
        
        >
<Text>Entrar</Text>
</TouchableOpacity>
        <br></br>
        <br></br>
        <br></br>
        

        <Text style={style.title}>Stickers</Text>

        <br></br>

      
        
        <Image 
          style={style.imagen} 
          source={entrada6}
          href="http://www.aulafacil.com" 
          class="rounded float-end figure-img img-fluid rounded border border-5"
          width="400" height="400" 
          />


<TouchableOpacity
        onPress={() =>
            this.props.navigation.navigate('Entrada1')
          }

          style={style.buttonSend}
        
        >
<Text>Entrar</Text>
</TouchableOpacity>



        <br></br>
        <br></br>
        <br></br>
        

        <Text style={style.title}>Menu</Text>

        <br></br>

          <center>
        <Image 
          style={style.imagen} 
          source={entrada7}
          
          />
</center>

<TouchableOpacity
        onPress={() =>
            this.props.navigation.navigate('Menu')
          }

          style={style.buttonSend}
        
        >
<Text>Entrar</Text>
</TouchableOpacity>

    <br></br>
        <br></br>
        <br></br>
 
     
      
        </View>

        

    )


  }
}


const style=StyleSheet.create({
  container:{ 

    justifyContent:"center",
    alignItems:'center',
    alignContent:'center',
    backgroundColor:'#FFFFFF'
},
title:{
  fontSize: 25,
  fontFamily: "Arial Black",
  margin: '20px', 
},
  imagen:{
    width:480,
     height:187,
     marginTop: 16,
     borderRadius: 6,
    

     },
  buttonSend:{color:'#f44336'}

});

export default Entrada;