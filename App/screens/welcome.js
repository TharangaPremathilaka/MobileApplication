import React from 'react';
import {
  StyleSheet,
  Text,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

const Welcome = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../assets/Welcome.png')}
      style={styles.container}>
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginText}>Countinu</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  loginBtn: {
    width: '50%',
    backgroundColor: '#FB1B7C',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    marginBottom: 10,
  },
  loginText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default Welcome;
