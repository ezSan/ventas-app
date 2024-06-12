import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { fixResult } from '../utils/numberUtils';

const PedidoTotal = ({ total }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Total: ${fixResult(total)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#FFF',
    alignItems: 'center',
    borderRadius: 8,
    marginVertical: 8,
  },
  texto: {
    fontSize: 18,
    color: '#DC2F02',
    fontWeight: 'bold',
  },
});

export default PedidoTotal;
