import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import ClienteItem from '../components/ClienteItem';
import clientesData from '../../data/clientes.json';

const ClientesScreen = ({ navigation }) => {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    setClientes(clientesData);
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={clientes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ClienteItem
            cliente={item}
            onPress={(cliente) => navigation.navigate('Productos', { cliente })}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
});

export default ClientesScreen;
