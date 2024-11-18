import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { HomeScreenProps } from '../Tipos/Types';

export default function HomeScreen({ navigation }: HomeScreenProps) {
  return (
    <ImageBackground
      source={require('../../assets/unicornio.png')}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Não tem nada aqui!</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)', 
  },
  title: {
    fontSize: 32,
    color: '#fff',
  },
});
