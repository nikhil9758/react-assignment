import React, { useState } from 'react';
import { View, StyleSheet,Text } from 'react-native';
import Input from '../Components/Input';
import Button from '../Components/Button';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../FirebaseConfig'
import { TouchableOpacity } from 'react-native-gesture-handler';
interface propTypes{
  navigation: any;
}

const LoginScreen: React.FC<propTypes> = (props) => {
  const navigation= props?.navigation
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password,setPassword]=useState('')
  const handleLogin = () => {
    console.log('here.......................',email,password)
    // Implement your login logic here
    signInWithEmailAndPassword(auth,email,password).then(()=>{
      console.log("susscefully logged in")
      navigation.navigate('Profile')
    }).catch((error)=>{
        console.log(error)
    })
  };

  const handleSignup=()=>{
    createUserWithEmailAndPassword(auth,email,password).then(()=>{
      console.log("created.........")
    }).catch((error)=>{
      console.log(error)
    })
  }
  return (
    <View style={styles.container}>
      <Text style={styles.display}>
         Log In
      </Text>
      {/* <Input
        placeholder="Enter your Name"
        value={name}
        onChangeText={setName}
        name='Name'
      /> */}
      <Input
        placeholder="Enter your Email"
        value={email}
        onChangeText={setEmail}
        name='Email'
        securetext={false}
      />
      <Input
        placeholder="Enter your Password"
        value={password}
        onChangeText={setPassword}
        name='Password'
        securetext={true}
      />
      <Button title="Log In" onPress={handleLogin} />
      {/* <View style={styles.signuptext}>
        <Button title="sign up" onPress={handleSignup} />
      </View> */}
      <Text style={styles.logintext}>
        Don't have an account ?  
        <TouchableOpacity onPress={handleSignup}>
            <Text style={{color: 'white'}}>
                Sign Up
            </Text>
        </TouchableOpacity>
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
  },
  signuptext:{
    position: 'absolute',
    bottom: 20
  }
});

export default LoginScreen;
