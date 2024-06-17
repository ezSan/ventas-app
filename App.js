import React from "react";
import { View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ClientesScreen from "./src/screens/ClientesScreen";
import ProductosScreen from "./src/screens/ProductosScreen";
import PedidoScreen from "./src/screens/PedidoScreen";
import HistorialScreen from "./src/screens/HistorialScreen";
import { AppProvider } from "./src/context/AppContext";

const Stack = createStackNavigator();

const App = () => {
  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Clientes" component={ClientesScreen} />
          <Stack.Screen name="Productos" component={ProductosScreen} />
          <Stack.Screen name="Pedido" component={PedidoScreen} />
          <Stack.Screen name="Historial" component={HistorialScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
};

/* const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff3f5",
  },
}); */

export default App;
