import { StyleSheet, Text, View,Dimensions,Image } from 'react-native'
import React from 'react'
import Carousel from 'react-native-snap-carousel';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';


const {width,height}=Dimensions.get('window')
const CurrentMovies = ({data}) => {
    const records=[
        require('../assets/johnwick.png'),
        require('../assets/johnwick.png'),
        require('../assets/johnwick.png')
    ]
  return (
    <View >
        {/* //className='flex-row mx-4 justify-between items-center' */}
        <Carousel 
        sliderWidth={width}
        first={2}
        itemWidth={width*0.62}
        data={records}
        renderItem={Movie}
        inactiveSlideOpacity={0.40}
        SlideStyle={{display: 'flex', alignItems: 'center'}}
        />
    </View>
  )
}

const Movie=({item})=>{
    return(
        <TouchableWithoutFeedback>
            <Image 
            source={item} 
            style={{width: width*0.6, height: height*0.4}}
            className='rounded-3xl'/>
        </TouchableWithoutFeedback>
    )
}

export default CurrentMovies

const styles = StyleSheet.create({})