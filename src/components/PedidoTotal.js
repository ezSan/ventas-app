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
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    borderRadius: 8,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 1,
  },
  texto: {
    fontSize: 18,
    color: '#F44336', // Material UI Red
    fontWeight: 'bold',
  },
});

export default PedidoTotal;
