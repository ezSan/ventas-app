import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import ClientesScreen from "../screens/ClientesScreen";
import ProductosScreen from "../screens/ProductosScreen";
import PedidoScreen from "../screens/PedidoScreen";
import VentasScreen from "../screens/VentasScreen";
import FirestoreTest from "../components/FirestoreTest";
import AddClientScreen from "../screens/AddClientScreen";

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: "#2196F3" }]}
        onPress={() => navigation.navigate("Clientes")}
      >
        <Text style={styles.buttonText}>Clientes</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: "#F44336" }]}
        onPress={() => navigation.navigate("Ventas")}
      >
        <Text style={styles.buttonText}>Ventas</Text>
      </TouchableOpacity>
    </View>
  );
};

const HomeNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ cardStyle: { backgroundColor: "#E3F2FD" } }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Clientes" component={ClientesScreen} />
      <Stack.Screen name="AddClient" component={AddClientScreen} />
      <Stack.Screen name="Productos" component={ProductosScreen} />
      <Stack.Screen name="Pedido" component={PedidoScreen} />
      <Stack.Screen name="Ventas" component={VentasScreen} />
      <Stack.Screen name="FirestoreTest" component={FirestoreTest} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E3F2FD",
    padding: 16,
  },
  button: {
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});

export default HomeNavigator;
