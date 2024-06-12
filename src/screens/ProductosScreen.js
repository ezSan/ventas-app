import React, { useState, useEffect } from "react";
import {
  View,
  FlatList,
  TextInput,
  Button,
  StyleSheet,
} from "react-native";
import ProductoItem from "../components/ProductoItem";
import PedidoTotal from "../components/PedidoTotal";
import productosData from "../../data/productos.json";

const ProductosScreen = ({ route, navigation }) => {
  const { cliente } = route.params;
  const [productos, setProductos] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [productosFiltrados, setProductosFiltrados] = useState([]);
  const [pedido, setPedido] = useState({});
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

  const agregarProducto = (producto, cantidad) => {
    setPedido((prevPedido) => {
      const newPedido = { ...prevPedido, [producto.id]: { ...producto, cantidad } };
      calcularTotal(newPedido);
      return newPedido;
    });
  };

  const quitarProducto = (producto, cantidad) => {
    setPedido((prevPedido) => {
      const newPedido = { ...prevPedido };
      if (cantidad === 0) {
        delete newPedido[producto.id];
      } else {
        newPedido[producto.id] = { ...producto, cantidad };
      }
      calcularTotal(newPedido);
      return newPedido;
    });
  };

  const calcularTotal = (pedido) => {
    const newTotal = Object.values(pedido).reduce((sum, { precio, cantidad }) => sum + (precio * cantidad), 0);
    setTotal(newTotal);
  };

  const confirmarPedido = () => {
    navigation.navigate("Pedidos", { pedido,total });
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
          <ProductoItem
            producto={item}
            onAdd={agregarProducto}
            onRemove={quitarProducto}
          />
        )}
      />
      <View>
        <PedidoTotal total={total} />
        <Button title="RESUMEN DE PEDIDO" onPress={confirmarPedido} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
  },
});

export default ProductosScreen;
