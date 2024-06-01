import React from 'react';
import { Text, StyleSheet } from 'react-native';

const PedidoTotal = ({ total }) => {
  return (
    <Text style={styles.total}>Total: ${total}</Text>
  );
};

const styles = StyleSheet.create({
  total: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PedidoTotal;
