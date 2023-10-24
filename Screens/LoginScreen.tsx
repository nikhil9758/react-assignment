import React, { useState } from 'react';
import { View, StyleSheet,Text } from 'react-native';
import Input from '../Components/Input';
import Button from '../Components/Button';
import { useNavigation } from '@react-navigation/native';

interface propTypes{
  navigation: any;
}

const LoginScreen: React.FC<propTypes> = (props) => {
  const navigation= props?.navigation
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    console.log('here.......................')
    // Implement your login logic here
    navigation.navigate('Profile')
  };

  return (
    <View style={styles.container}>
      <Text style={styles.display}>
         Log In
      </Text>
      <Input
        placeholder="Enter your Name"
        value={name}
        onChangeText={setName}
        name='Name'
      />
      <Input
        placeholder="Enter your Email"
        value={email}
        onChangeText={setEmail}
        name='Email'
      />
      <Button title="Log In" onPress={handleLogin} />
      <Text style={styles.logintext}>
        Don't have an account ?  Sign Up
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    // paddingHorizontal: 160,
    backgroundColor: 'black',
    
  },
  display:{
      marginTop:140,
      color: 'white',
      margin:30,
      fontSize:20
  },
  logintext:{
    color: 'white',
    marginTop: 40,
    fontSize: 10
  }
});

export default LoginScreen;
