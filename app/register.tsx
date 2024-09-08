import { useRouter } from 'expo-router';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
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
  const router = useRouter();
  const user = auth.currentUser;

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log('User is signed in');
        router.push('/(tabs)');
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
        router.push('/home');
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
      <Text style={styles.title}>Please create account to continue</Text>
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
          onPress={handleSignUp}
          style={styles.button}
        >
          <Text style={{ color: 'white' }}>Register</Text>
        </Pressable>
      </View>
      <View style={{ flexDirection: 'row', marginTop: 40 }}>
        <Text>Already have an account? </Text>
        <Pressable onPress={() => router.push('/')}>
          <Text style={{ color: Colors.primaryColor, fontWeight: 'bold' }}>
            Sign In
          </Text>
        </Pressable>
      </View>
      {/* Media icons */}
      <View style={styles.mediaIcons}>
        <Pressable>
          <Image source={require('../assets/images/facebook.png')} />
        </Pressable>
        <Pressable>
          <Image source={require('../assets/images/instagram.png')} />
        </Pressable>
        <Pressable>
          <Image source={require('../assets/images/twitter.png')} />
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
    backgroundColor: Colors.bgColor,
  },
  title: {
    fontSize: 14,
    marginBottom: 10,
    color: 'gray',
    alignSelf: 'flex-start',
    marginLeft: 40,
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
    marginBottom: 70,
  },
  mediaIcons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    marginTop: 100,
  },
});
