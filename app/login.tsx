import { useNavigation } from '@react-navigation/core';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { auth } from '../config/firebase';

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
      <TextInput
        value={email}
        onChange={(e) => setEmail(e.nativeEvent.text)}
        style={styles.textInput}
        placeholder='Enter your email'
      />
      <TextInput
        value={password}
        onChange={(e) => setPassword(e.nativeEvent.text)}
        style={styles.textInput}
        secureTextEntry
        placeholder='Enter your password'
      />
      <Pressable onPress={handleLogin} style={styles.buttonsContainer}>
        <View style={styles.button}>
          <Text style={{ color: 'white' }}>Login</Text>
        </View>
      </Pressable>
      <Pressable onPress={handleSignUp} style={styles.buttonsContainer}>
        <View style={styles.secondaryButton}>
          <Text style={{ color: 'blue' }}>Register</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'black',
    marginVertical: 8,
    padding: 8,
    fontSize: 16,
    width: '80%',
  },
  buttonsContainer: {
    width: '80%',
  },
  button: {
    backgroundColor: 'blue',
    borderRadius: 4,
    padding: 8,
    marginVertical: 8,
    alignItems: 'center',
  },
  secondaryButton: {
    backgroundColor: 'white',
    borderRadius: 4,
    borderColor: 'blue',
    borderWidth: 1,
    padding: 8,
    marginVertical: 8,
    alignItems: 'center',
  },
});
