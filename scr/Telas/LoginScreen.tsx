import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { LoginScreenProps } from '../Tipos/Types';
import { Ionicons } from '@expo/vector-icons';

export default function LoginScreen({ navigation }: LoginScreenProps) {
  return (
    <ImageBackground
      source={require('../../assets/unicornio.png')}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <View style={styles.creditContainer}>
          <Text style={styles.creditText}>Plano de fundo de</Text>
          <Text style={styles.creditTextBold}>kubinnie</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.titulo}>tumblr</Text>
          <View style={styles.subtituloContainer}>
            <Text style={styles.subtitulo}>Boas-vindas ao seu{"\n"}cantinho na internet.</Text>
            <Text style={styles.subtitulo}>Tédio nunca mais.</Text>
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <Text style={styles.entrada}>Cadastre-se ou entre:</Text>
          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Image source={require('../../assets/IconeGoogle.png')} style={styles.iconGoogle} />
            <Text style={styles.buttonText}>Continuar com o Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
            <Ionicons name="mail-outline" size={24} color="black" style={styles.icon} />
            <Text style={styles.buttonText}>Continuar com e-mail</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)', 
    justifyContent: 'space-between',
    padding: 20,
  },
  creditContainer: {
    alignItems: 'flex-start',
    marginTop: 30,
  },
  creditText: {
    color: 'white',
    fontSize: 14,
  },
  creditTextBold: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  container: {
    alignItems: 'center',
  },
  titulo: {
    fontSize: 50,
    marginTop: -20,
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'Roboto',
  },
  subtituloContainer: {
    alignItems: 'center',
    marginVertical: 55,
  },
  subtitulo: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 5,
  },
  entrada: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
  bottomContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  button: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 13, 
    borderRadius: 25,
    marginVertical: 5,
    alignItems: 'center',
    width: '90%',
  },
  buttonText: {
    fontSize: 17,
    textAlign: 'center',
    flex: 1,
  },
  iconGoogle: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  icon: {
    marginRight: 10,
  },
});
