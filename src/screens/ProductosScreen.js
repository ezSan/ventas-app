import React, { useState, useEffect } from 'react';
import { View, FlatList, TextInput, Button, StyleSheet, Alert } from 'react-native';
import ProductoItem from '../components/ProductoItem';
import PedidoTotal from '../components/PedidoTotal';
import productosData from '../../data/productos.json';

const ProductosScreen = ({ route }) => {
  const { cliente } = route.params;
  const [productos, setProductos] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [productosFiltrados, setProductosFiltrados] = useState([]);
  const [pedido, setPedido] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setProductos(productosData);
    setProductosFiltrados(productosData);
  }, []);

  const buscarProducto = (texto) => {
    setBusqueda(texto);
    const filtrados = productos.filter((producto) =>
      producto.nombre.toLowerCase().includes(texto.toLowerCase())
    );
    setProductosFiltrados(filtrados);
  };

  const agregarProducto = (producto) => {
    setPedido((prevPedido) => [...prevPedido, producto]);
    setTotal((prevTotal) => prevTotal + producto.precio);
  };

  const confirmarPedido = () => {
    Alert.alert('Pedido confirmado', `Total: $${total}`, [
      { text: 'OK', onPress: () => console.log('Pedido confirmado') }
    ]);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Buscar producto"
        value={busqueda}
        onChangeText={buscarProducto}
      />
      <FlatList
        data={productosFiltrados}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ProductoItem producto={item} onPress={agregarProducto} />
        )}
      />
      <PedidoTotal total={total} />
      <Button title="Confirmar Pedido" onPress={confirmarPedido} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
  },
});

export default ProductosScreen;
