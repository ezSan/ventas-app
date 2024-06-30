import React, { useState, useEffect, useContext } from "react";
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
import { AppContext } from "../context/AppContext";

const ProductosScreen = ({ route, navigation }) => {
  const { cliente } = route.params;
  const { dispatch } = useContext(AppContext);
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
      const newPedido = {
        ...prevPedido,
        [producto.id]: { ...producto, cantidad },
      };
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
    const newTotal = Object.values(pedido).reduce(
      (sum, { precio, cantidad }) => sum + precio * cantidad,
      0
    );
    setTotal(newTotal);
  };

  const irAPedidoScreen = () => {
    dispatch({ type: "SET_PEDIDO", payload: { pedido, total } });
    navigation.navigate("Pedido");
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
        <View style={styles.buttonContainer}>
          <Button title="VER PEDIDO" onPress={irAPedidoScreen} color="#4285F4" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,    
    padding: 16,
    backgroundColor: "#ffffff",
  },
  input: {
    height: 40,
    borderColor: "#D8D8D8",
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
    borderRadius: 4,
  },
  buttonContainer: {
    marginTop: 10,
  },
});

export default ProductosScreen;
