import React, { useState, useEffect, useContext } from "react";
import { View, FlatList, StyleSheet, Button } from "react-native";
import ClienteItem from "../components/ClienteItem";
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebaseConfig.js';
import { AppContext } from "../context/AppContext";

const ClientesScreen = ({ navigation }) => {
  const [clientes, setClientes] = useState([]);
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    const fetchClientes = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'clients'));
        const clientsList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setClientes(clientsList);
      } catch (e) {
        console.error('Error fetching clients: ', e);
      }
    };

    fetchClientes();
  }, []);

  const handleNavigateToAddClient = () => {
    navigation.navigate("AddClient");
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={clientes}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) =>
          <ClienteItem
            cliente={item}
            onPress={cliente => {
              navigation.navigate("Productos", { cliente });
              dispatch({ type: "SET_CLIENTE", payload: cliente });
            }}
          />}
      />
      <Button title="Agregar Cliente" onPress={handleNavigateToAddClient} />
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
