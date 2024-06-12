import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ClientesScreen from './src/screens/ClientesScreen';
import ProductosScreen from './src/screens/ProductosScreen';
import PedidosScreen from './src/screens/PedidosScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Clientes" component={ClientesScreen} />
        <Stack.Screen name="Productos" component={ProductosScreen} />
        <Stack.Screen name="Pedidos" component={PedidosScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
