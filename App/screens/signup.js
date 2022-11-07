import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const Signup = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../assets/Login.png')}
      style={styles.container}>
      <Text style={styles.logo}>SignUp</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email Address or UserName"
          placeholderTextColor="#A8A7A7"
          onChangeText={(text) => this.setState({email: text})}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          secureTextEntry
          style={styles.inputText}
          placeholder="Password"
          placeholderTextColor="#A8A7A7"
          onChangeText={(text) => this.setState({password: text})}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          secureTextEntry
          style={styles.inputText}
          placeholder="Confirm Password"
          placeholderTextColor="#A8A7A7"
          onChangeText={(text) => this.setState({password: text})}
        />
      </View>
      <TouchableOpacity
        style={styles.signBtn}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.loginText}>SignUp</Text>
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
  logo: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#FB1B7C',
    marginBottom: 40,
  },
  inputView: {
    width: '80%',
    backgroundColor: '#dfe4ea',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: 'black',
  },

  signBtn: {
    width: '70%',
    backgroundColor: '#FB1B7C',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Signup;
