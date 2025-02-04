import React, { useState } from 'react';
import { Button, Image, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native';


export default function MyForm() {
  const [ID, setIDText] = useState("");
  const [nombre, setNombreText] = useState("");
  const [email, setEmailText] = useState("");
  const [telefono, setTelefonoText] = useState("");
  const [displayText, setDisplayText] = useState("");

  const handlePress = () => {
    setDisplayText(`ID: ${ID}, Nombre: ${nombre}, Email: ${email}, Teléfono: ${telefono}`);
    setIDText('');
    setNombreText('');
    setEmailText('');
    setTelefonoText('');
  };


  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('./assets/Welcome1.png')} />

      <TextInput
        style={styles.input}
        placeholder="ID"
        value={ID}
        onChangeText={setIDText}
      />
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombreText}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmailText}
      />
      <TextInput
        style={styles.input}
        placeholder="Teléfono"
        value={telefono}
        onChangeText={setTelefonoText}
      />

      <Button title="Registrarme" onPress={handlePress} />
      <Text>{displayText}</Text>
      <StatusBar style="auto" />

      <Image style={styles.image} source={require('./assets/NFL.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
    width: '100%',
  },
  resultContainer: {
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
});
