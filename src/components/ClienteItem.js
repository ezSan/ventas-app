import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

const ClienteItem = ({ cliente, onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress(cliente)} style={styles.item}>
      <View>
        <Text style={styles.nombreDelLocal}>{cliente.nombreDelLocal}</Text>
        <Text style={styles.direccion}>{cliente.direccion}</Text>
        <Text style={styles.nombre}>{cliente.nombre} {cliente.apellido}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#2196F3', // Material UI Blue
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  nombreDelLocal: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  direccion: {
    color: '#BBDEFB',
    fontSize: 16,
    marginBottom: 4,
  },
  nombre: {
    color: '#FFF',
    fontSize: 18,
  },
});

export default ClienteItem;
