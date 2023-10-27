import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'
import { useState } from 'react'
import SearchIcon from 'react-native-vector-icons/AntDesign'
import MovieSearch from '../Components/MovieSearch'
const SearchScreen = () => {
const[search,setSearch]=useState('')

const onChangeText=()=>{
    // console.log(e.target)
    // setSearch(e.target.value)
}
  return (
      <View className='flex-1 bg-neutral-800 items-center'>
        <View className="relative ">
            <TextInput
                placeholder="Search"
                value={search}
                onChangeText={setSearch}
                placeholderTextColor='grey'
                style={{ marginTop:20}}
                className="border-[1px] border-gray-50 p-2 pl-4 w-[280px] rounded-2xl text-white"
            />
            <View className="absolute right-2 top-8 z-10 bg-neutral-800">
                <SearchIcon name='search1' size={25} color='white'/>
            </View>
        </View>
        <View className="mt-3">
            <MovieSearch searchText={search}/>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({})

export default SearchScreen
