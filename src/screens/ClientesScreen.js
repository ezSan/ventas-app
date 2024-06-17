import React, { useState, useEffect, useContext } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import ClienteItem from "../components/ClienteItem";
import clientesData from "../../data/clientes.json";
import { AppContext } from "../context/AppContext";

const ClientesScreen = ({ navigation }) => {
  const [clientes, setClientes] = useState([]);
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    setClientes(clientesData);
  }, []);

 /*  useEffect(() => {
    console.log("State:", state);
  }, [state]); */

  return (
    <View style={styles.container}>
      <FlatList
        data={clientes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ClienteItem
            cliente={item}
            onPress={(cliente) => {
              navigation.navigate("Productos", { cliente });
              dispatch({type:"SET_CLIENTE", payload:cliente})
            }}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
});

export default ClientesScreen;
