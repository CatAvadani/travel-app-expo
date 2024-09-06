import { useNavigation } from '@react-navigation/core';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { auth } from '../config/firebase';
import Colors from '../constants/Colors';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const user = auth.currentUser;

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log('User is signed in');
        navigation.navigate('(tabs)');
      } else {
        console.log('User is signed out');
      }
    });
    return unsubscribe;
  }, []);

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../assets/images/logo-2.png')}
      />
      <TextInput
        value={email}
        onChange={(e) => setEmail(e.nativeEvent.text)}
        style={styles.textInput}
        placeholder="Enter your email"
      />
      <TextInput
        value={password}
        onChange={(e) => setPassword(e.nativeEvent.text)}
        style={styles.textInput}
        secureTextEntry
        placeholder="Enter your password"
      />
      <View style={styles.buttonsContainer}>
        <Pressable
          android_ripple={{ color: Colors.rippleEffectColor }}
          onPress={handleLogin}
          style={styles.button}
        >
          <Text style={{ color: 'white' }}>Login</Text>
        </Pressable>
      </View>

      <View style={styles.buttonsContainer}>
        <Pressable
          android_ripple={{ color: '#e7b19a' }}
          onPress={handleSignUp}
          style={styles.secondaryButton}
        >
          <Text style={{ color: Colors.primaryColor }}>Register</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d7edf7',
  },
  textInput: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: Colors.shadowColor,
    color: Colors.black,
    marginVertical: 8,
    padding: 8,
    fontSize: 16,
    width: '80%',
  },
  buttonsContainer: {
    width: '80%',
  },
  button: {
    backgroundColor: Colors.primaryColor,
    borderWidth: 1,
    borderColor: Colors.primaryColor,
    borderRadius: 4,
    padding: 8,
    marginVertical: 8,
    alignItems: 'center',
  },
  secondaryButton: {
    backgroundColor: Colors.bgColor,
    borderRadius: 4,
    borderColor: Colors.shadowColor,
    borderWidth: 1,
    padding: 8,
    marginVertical: 8,
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
});
