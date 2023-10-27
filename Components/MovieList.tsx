import { StyleSheet, Text, View,Image,Dimensions } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

const {width, height}= Dimensions.get('window')
const MovieList = () => {
    const records=[
        require('../assets/avengers.png'),
        require('../assets/avengers.png'),
        require('../assets/avengers.png')
    ]
  return (
    <ScrollView 
    horizontal
    showsHorizontalScrollIndicator={false}
    style={{flex:1}}>
        <View className="flex-row my-5 ">
            {
                records.map((img,ind)=>{
                    return (
                        <Image
                        source={img}
                        style={{width: width*0.3, height:height*0.2}}
                        className="mr-4 rounded-2xl"
                        key={ind}
                        />
                    )
                })
            }
            
        </View>
    </ScrollView>
  )
}

export default MovieList

const styles = StyleSheet.create({})