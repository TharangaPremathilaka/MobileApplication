import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Login = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../assets/Login.png')}
      style={styles.container}>
      <Text style={styles.logo}>LogIn</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email Address"
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
      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.signText}>SignUp</Text>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: 40,
        }}>
        <TouchableOpacity style={styles.iconTouchable}>
          <View style={styles.iconView}>
            <Icon name="google" color="#fafafa" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconTouchable}>
          <View style={styles.iconView}>
            <Icon name="facebook-square" color="#fafafa" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconTouchable}>
          <View style={styles.iconView}>
            <Icon name="twitter" color="#fafafa" />
          </View>
        </TouchableOpacity>
      </View>
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
  forgot: {
    color: '#FB1B7C',
    fontSize: 15,
  },
  loginBtn: {
    width: '50%',
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
    fontSize: 16,
  },
  signText: {
    color: '#FB1B7C',
    fontWeight: 'bold',
    fontSize: 15,
  },
  iconTouchable: {
    borderRadius: 10,
    backgroundColor: '#2e2e2e',
    elevation: 5,
    shadowOffset: {
      width: -8,
      height: -8,
    },
    shadowOpacity: 1,
    shadowRadius: 6,
    shadowColor: '#1d1d1d',
    marginHorizontal: 12,
  },
  iconView: {
    backgroundColor: '#2e2e2e',
    borderRadius: 10,
    shadowOffset: {
      width: 8,
      height: 8,
    },
    shadowOpacity: 1,
    shadowRadius: 6,
    shadowColor: '#3f3f3f',
    padding: 14,
  },
});

export default Login;
