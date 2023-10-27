import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RightIcon from 'react-native-vector-icons/AntDesign'
import PersonIcon from 'react-native-vector-icons/Octicons'
import MovieIcon from 'react-native-vector-icons/MaterialCommunityIcons'
// movie
import SearchIcon from 'react-native-vector-icons/AntDesign'
// search1
import UserIcon from 'react-native-vector-icons/FontAwesome'
import Button from '../Components/Button'
import { auth } from '../FirebaseConfig'
import { TouchableOpacity } from 'react-native-gesture-handler'
const ProfileScreen = (props) => {
    const navigation= props?.navigation
    const handleSignOut=()=>{
        console.log("signout........")
        auth.signOut().then(()=>{
            navigation.navigate('Login')
        })
    }
  return (
    <View style={styles.profile__container}>

      <Text style={styles.display}>My Profile</Text>
      <View style={styles.avatar}>
            
      </View>
      <Text style={styles.name}>John Doe</Text>
      <View style={{ flex: 0.1,flexDirection:'row',justifyContent:'space-between', borderColor:'white', width: 300, marginTop: 30}}>
        <View style={{ flex: 1,flexDirection:'row'}}>
            <PersonIcon name="person" size={25} color='white'/>
            <View style={{paddingLeft:15}}>
                <View >
                    <Text style={{color:'white'}}>Account</Text>
                    <Text style={{color:'grey',fontSize:8}}>Edit Profile</Text>
                    <Text style={{color:'grey',fontSize:8}}>Change Password</Text>
                </View>
            </View>
        </View>
        <RightIcon name='right' size={25} color='white'/>
      </View>
      
      <View style={{ flex: 0.2,flexDirection:'row',justifyContent:'space-between', borderColor:'white', width: 300, marginTop: 30}}>
        <View style={{ flex: 1,flexDirection:'row'}}>
            <PersonIcon name="person" size={25} color='white'/>
            <View style={{paddingLeft:15}}>
                <View >
                    <Text style={{color:'white'}}>Settings</Text>
                    <Text style={{color:'grey',fontSize:8}}>Themes</Text>
                    <Text style={{color:'grey',fontSize:8}}>Permissions</Text>
                </View>
            </View>
        </View>
        <RightIcon name='right' size={25} color='white'/>
      </View>
        <View style={{flex:1,width: 260,position:'absolute', bottom: 25 }}>
            <View style={styles.logintext}>
                <Button title="Log Out" onPress={handleSignOut} />
            </View>
            <View style={{flex:1,flexDirection:'row',justifyContent:'space-between'}}>
                <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
                    <MovieIcon name='movie' size={25} color='white'/>
                </TouchableOpacity>
                <SearchIcon name='search1' size={25} color='white'/>
                <UserIcon name='user-circle' size={25} color='white'/>
            </View>
            
        </View>
      
      
    </View>
  )
}


const styles = StyleSheet.create({
    profile__container:{
        flex:1,
        
        backgroundColor: 'black',
        alignItems: 'center',        
    },
    display:{
        color: 'white',
        margin:30,
        fontSize:20
    },            
    avatar:{
        color: 'white',
        borderWidth: 2,
        borderColor: 'white',
        objectFit: 'contains',
        height:45,
        width: 45,
        borderRadius: 25,
        marginTop:15
    },
    name:{
        fontSize:13,
        color:'white',
        marginTop:10
    },
    logintext:{
        color: 'white',
        marginBottom: 40,
    },
    
})

export default ProfileScreen

