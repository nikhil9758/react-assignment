import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Tabs from '../Components/Tabs'
import CurrentMovies from '../Components/CurrentMovies'
import {useState} from 'react'
import MovieList from '../Components/MovieList'
import { ScrollView } from 'react-native-gesture-handler'
// import { StatusBar } from 'expo-status-bar';
import MovieIcon from 'react-native-vector-icons/MaterialCommunityIcons'
// movie
import SearchIcon from 'react-native-vector-icons/AntDesign'
// search1
import UserIcon from 'react-native-vector-icons/FontAwesome'
import { TouchableOpacity } from 'react-native-gesture-handler'
const categoryList=['Popular','Upcoming','Classics','Top10']
const HomeScreen= (props) => {
    const[current,setCurrent]=useState([1,2,3])
    const navigation=props?.navigation
  return (
    <View className="flex-1 bg-neutral-800 ">
      <ScrollView style={{marginBottom:40}}>
        <Text className="text-white text-lf">satrting my app</Text>
        {/* <StatusBar style="auto" /> */}
        <View className="flex-row border-1 border-white mt-5">
                    {
                        categoryList.map((category,ind)=>{
                            return <Tabs category={category} key={ind}/>
                        })
                    }
        </View>
        <Text className='text-white text-[20px] mt-4'>
            Now Playing
        </Text>
        <CurrentMovies data={current}/>
        <Text className='text-white text-[20px] mt-4'>
            Popular
        </Text>
        <MovieList/>
        <Text className='text-white text-[20px] mt-4'>
            Upcoming
        </Text>
        <MovieList/>
      </ScrollView>
      <View className="w-full h-[50px] absolute bottom-0 bg-neutral-800" >
            <View className="flex-row justify-between mt-2 mx-20">
                <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
                    <MovieIcon name='movie' size={25} color='white'/>
                </TouchableOpacity >
                <TouchableOpacity onPress={()=>navigation.navigate('Search')}>
                    <SearchIcon name='search1' size={25} color='white'/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('Movie')}>
                    <UserIcon name='user-circle' size={25} color='white'/>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})