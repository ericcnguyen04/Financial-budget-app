import { Image, StyleSheet, Platform, Text, View, TouchableOpacity, Animated, PanResponder } from 'react-native';
import React, { useState, useRef } from 'react';

export default function HomeScreen() {
  const handlePress = (num) => {
    setValue(prevValue => prevValue + num.toString());
    console.log(num);
  };

  const handleBackspace = () => {
    setValue(prevValue => prevValue.slice(0, -1));
  }

  const [value, setValue] = useState('')

  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event(
        [null, { dx: pan.x, dy: pan.y }],
        { useNativeDriver: false }
      ),
      onPanResponderRelease: () => {
        Animated.spring(pan, { toValue: { x: 0, y: 0 }, useNativeDriver: false }).start();
      },
    })
  ).current;

  return (
    <View style={styles.container}>
      {/* <Animated.View
        {...panResponder.panHandlers}
        style={[pan.getLayout(), styles.swipeableTitle]}
      > */}
      <Text style={styles.title}>{value ? value : 'Insert Value'}</Text>
      {/* </Animated.View> */}

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
        <TouchableOpacity style={styles.button} onPress={() => handleBackspace()}>
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