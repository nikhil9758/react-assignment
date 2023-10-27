import React from 'react';
import { TextInput, StyleSheet, View,Text } from 'react-native';

interface InputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  name: string,
  securetext: boolean
}

const Input: React.FC<InputProps> = ({ placeholder, value, onChangeText,name,securetext }) => {
  return (
    <View>
      <Text style={styles.inputtext}>
            {name}
      </Text>
    
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={securetext}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor='grey'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 240,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 15,
    marginBottom: 10,
    paddingHorizontal: 10,
    color: 'white',
    padding: 10,
    margin:10,
    fontSize:10,
    paddingLeft:30,
    zIndex:-1
  },
  inputtext:{
      color: 'white',
      position: 'absolute',
      left: 30,
      backgroundColor: 'black',
      padding: 5,
      fontSize:11,
  }
});

export default Input;
