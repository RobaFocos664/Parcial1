import React from 'react';
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const id = '123';
  const name = 'Brian';
  const email = 'Email@.com';
  const phone = '664-123-4567';

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('./assets/Welcome1.png')} />

      <Text>ID:</Text>
      <TextInput
        style={styles.input}
        value={id}
        editable={true}
      />
      <Text>Nombre:</Text>
      <TextInput
        style={styles.input}
        value={name}
        editable={true}
      />
      <Text>Email:</Text>
      <TextInput
        style={styles.input}
        value={email}
        editable={true}
      />
      <Text>Phone:</Text>
      <TextInput
        style={styles.input}
        value={phone}
        editable={true}
      />
      <Button title="Submit" onPress={() => { }} />
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
});
