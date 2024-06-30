import React, { useContext, useState, useEffect } from "react";
import { View, FlatList, Text, StyleSheet, Button, Platform } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import { AppContext } from "../context/AppContext";

const VentasScreen = () => {
  const { state, fetchOrdersByDate } = useContext(AppContext);
  const { historialPedidos } = state;
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  useEffect(() => {
    fetchOrdersByDate(selectedDate);
  }, [selectedDate]);

  const onDateChange = (event, date) => {
    const newDate = date || selectedDate;
    setShowDatePicker(Platform.OS === 'ios');
    setSelectedDate(newDate);
  };

  const renderItem = ({ item }) => (
    <View style={styles.pedido}>
      <Text style={styles.cliente}>{item.cliente.nombre}</Text>
      <Text style={styles.invoiceType}>{item.invoiceType}</Text>
      <FlatList
        data={Object.values(item.pedido)}
        keyExtractor={(producto) => producto.id.toString()}
        renderItem={({ item: producto }) => (
          <Text style={styles.producto}>
            {producto.nombre} - {producto.cantidad} - ${producto.precio * producto.cantidad}
          </Text>
        )}
      />
      <Text style={styles.total}>Total: ${item.total.toFixed(2)}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Button title="Seleccionar Fecha" onPress={() => setShowDatePicker(true)} />
      {showDatePicker && (
        <DateTimePicker
          value={selectedDate}
          mode="date"
          display="default"
          onChange={onDateChange}
        />
      )}
      {historialPedidos.length > 0 ? (
        <FlatList
          data={historialPedidos}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
        />
      ) : (
        <Text style={styles.noVentas}>Aún no has realizado ninguna venta</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  pedido: {
    marginBottom: 20,
    padding: 16,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
  },
  cliente: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  invoiceType: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#888",
    marginBottom: 8,
  },
  producto: {
    fontSize: 16,
    marginBottom: 4,
  },
  total: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 8,
  },
  noVentas: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
});

export default VentasScreen;
