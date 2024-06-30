import { Image, StyleSheet, Platform, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

export default function HomeScreen() {
  const handlePress = (number) => {
    console.log(number);
  };

  const [value, setValue] = useState(0)

  return (
    <View style={styles.container}>

      <Text style={styles.title}>value</Text>

      <View style={styles.numberPad}>
        {Array.from({ length: 9 }, (_, i) => (
          <TouchableOpacity key={i + 1} style={styles.button} onPress={() => handlePress(i + 1)}>
            <Text style={styles.buttonText}>{i + 1}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity style={styles.button} onPress={() => handlePress('.')}>
          <Text style={styles.buttonText}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress(0)}>
          <Text style={styles.buttonText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('submit')}>
          <Text style={styles.buttonText}>X</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    marginVertical: 10,
    width: '80%',
    padding: 20,
    backgroundColor: '#ddd',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  numberPad: {
    width: '80%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  button: {
    width: '30%',
    marginVertical: 10,
    padding: 20,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    color: '#333',
  },
});