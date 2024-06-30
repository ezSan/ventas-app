import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebaseConfig.js';

const AddClientScreen = ({ navigation }) => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [nombreDelLocal, setNombreDelLocal] = useState('');
  const [telefono, setTelefono] = useState('');
  const [direccion, setDireccion] = useState('');
  const [cuit, setCuit] = useState('');
  const [localidad, setLocalidad] = useState('');

  const handleAddClient = async () => {
    try {
      await addDoc(collection(db, 'clients'), {
        nombre,
        apellido,
        nombreDelLocal,
        direccion,
        telefono,
        cuit,
        localidad
      });
      navigation.goBack();
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}
        style={styles.input}
      />
      <TextInput
        placeholder="Apellido"
        value={apellido}
        onChangeText={setApellido}
        style={styles.input}
      />
      <TextInput
        placeholder="Nombre del Local"
        value={nombreDelLocal}
        onChangeText={setNombreDelLocal}
        style={styles.input}
      />
      <TextInput
        placeholder="Dirección"
        value={direccion}
        onChangeText={setDireccion}
        style={styles.input}
      />
      <TextInput
        placeholder="Teléfono"
        value={telefono}
        onChangeText={setTelefono}
        style={styles.input}
      />
      <TextInput
        placeholder="CUIT"
        value={cuit}
        onChangeText={setCuit}
        style={styles.input}
      />
      <TextInput
        placeholder="Localidad"
        value={localidad}
        onChangeText={setLocalidad}
        style={styles.input}
      />
      <Button title="Agregar Cliente" onPress={handleAddClient} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    backgroundColor: '#fff3f5',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 8,
  },
});

export default AddClientScreen;

