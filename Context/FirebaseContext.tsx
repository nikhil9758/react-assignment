import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import {createContext} from 'react'

export const AuthContext=createContext(null)

interface firebaseProps{
    children: any
}
const FirebaseContext: React.FC<firebaseProps> = ({children}) => {
const[currentUser,seCurrentUser]=useState('')
  return (
    <AuthContext.Provider value={currentUser}>
        {children}
    </AuthContext.Provider>
  )
}

const styles = StyleSheet.create({})

export default FirebaseContext
