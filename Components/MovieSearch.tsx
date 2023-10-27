import { StyleSheet, Text, View, Image,Dimensions } from 'react-native'
import React from 'react'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import {useEffect,useState} from 'react'

const data=[
    {id:1,source:require('../assets/avengers.png'),moviename:'avengers'},
    {id:2,source:require('../assets/avengers.png'),moviename:'avengers'},
    {id:3,source:require('../assets/avengers.png'),moviename:'johnwick'},
    {id:4,source:require('../assets/avengers.png'),moviename:'avengers'},
    {id:5,source:require('../assets/avengers.png'),moviename:'avengers'},
    {id:6,source:require('../assets/avengers.png'),moviename:'avengers'}
]
const {width, height}=Dimensions.get('window')
const MovieSearch = ({searchText}) => {
    const[filterData,setFilterData]=useState([])
    useEffect(()=>{
        console.log("datachanged",searchText)
        const res=data.filter((item)=>{
            return item.moviename.toUpperCase().includes(searchText.toUpperCase())
        })
        console.log(res)
        setFilterData(res)
    },[searchText])
  return (
    <View>
        <FlatList
        data={filterData}
        renderItem={({item})=>(
            <View >
                <Image 
                source={item.source} 
                style={{width:width*0.4, height: height*0.35}}
                className="m-3 rounded-3xl"/>
            </View>
        )
        }
        keyExtractor={(item)=>item.id.toString()}
        numColumns={2}
        />
    </View>
  )
}

export default MovieSearch

const styles = StyleSheet.create({})