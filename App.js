import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Teks di tengah layar */}
      <Text style={styles.text}>Teks di Tengah Layar</Text>

      {/* Kotak di kiri dan kanan */}
      <View style={styles.boxContainer}>
        <View style={styles.box1}></View>
        <View style={styles.box2}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d3d3d3', // Latar belakang abu-abu terang
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    color: 'blue',
    fontWeight: 'bold',
    marginBottom: 50, // Memberikan jarak dari kotak
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%', // Atur lebar agar kotak memiliki jarak merata
  },
  box1: {
    width: 100,
    height: 100,
    backgroundColor: '#ff6347', // Warna bebas (Tomato)
  },
  box2: {
    width: 100,
    height: 100,
    backgroundColor: '#1e90ff', // Warna bebas (DodgerBlue)
  },
});
