import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const ClienteItem = ({ cliente, onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress(cliente)} style={styles.item}>
      <Text>{cliente.nombre}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default ClienteItem;
