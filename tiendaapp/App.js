
import * as React from 'react';
import { View, Text,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import FriendsScreen from './FriendsScreen';
import Iniciar from './Iniciar';

import Inicio from './Inicio';
import Entrada from './Entrada';
import Informacion from './Informacion';
import Menu from './Menu';
import Hamburguesas from'./Hamburguesas';
import Pollo from './Pollo';
import Acompañamientos from './Acompañamientos';
import Bebidas from './Bebidas';
import Postres from './Postres';
import Desayunos from './Desayunos';
import Pedido from './Pedido';
import Login from './Login';
import Cupones from './Cupones';

const Stack = createNativeStackNavigator();


class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>

        <Stack.Screen
            name="Inicio"
            component={Iniciar}
          />
          <Stack.Screen
            name="Home"
            component={Inicio}
          />
          <Stack.Screen
            name="Friends"
            component={FriendsScreen}
          />

        <Stack.Screen
            name="Entrada1"
            component={Entrada}
            
            
          />

<Stack.Screen
            name="Entrada2"
            component={Informacion}
            
            
          />

<Stack.Screen
            name="Menu"
            component={Menu}
            
            
          />

<Stack.Screen
            name="Hamburguesas"
            component={Hamburguesas}
            
            
          />

<Stack.Screen
            name="Pollo"
            component={Pollo}
            
            
          />

<Stack.Screen
            name="Acompañamientos"
            component={Acompañamientos}
            
            
          />


<Stack.Screen
            name="Bebidas"
            component={Bebidas}
            
            
          />

<Stack.Screen
            name="Postres"
            component={Postres}
            
            
          />

<Stack.Screen
            name="Desayunos"
            component={Desayunos}
            
            
          />

<Stack.Screen
            name="Pedido"
            component={Pedido}
            
            
          />

<Stack.Screen
            name="Login"
            component={Login}
            
            
          />

<Stack.Screen
            name="Cupones"
            component={Cupones}
            
            
          />

        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}



export default App;