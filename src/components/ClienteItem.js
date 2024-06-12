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
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#DC2F01',
    borderRadius: 8,
  },
  text: {
    color: '#FFF',
    fontSize: 18,
  },
});

export default ClienteItem;
