import { StyleSheet, Text, View,Image, Dimensions } from 'react-native'
import React from 'react'
import {Video} from 'expo-av'
import { ScrollView } from 'react-native-gesture-handler'

const name="John Wick: Chapter 4"
const time= new Date()
const movieType= ['Action', 'Thriller','crime']
const newtime= time.getHours()+'h '+time.getMinutes()+'m'
const str="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde odio consequatur ut animi atque quidem optio, tempore eum tenetur obcaecati dolores corporis corrupti sit, provident placeat laborum facilis voluptate nemo suscipit rem dignissimos nisi accusantium aspernatur inventore. Laudantium ab aspernatur voluptatum. Quasi officia perspiciatis provident excepturi sapiente illo temporibus ullam ab, expedita, optio tempora, ipsum consectetur esse unde. Est ipsum, nesciunt, quod a aliquid deserunt commodi cumque eum modi facilis quisquam molestiae officiis illum sed obcaecati rerum itaque sequi nulla reprehenderit minima magni vero asperiores exercitationem consectetur. Nobis tempore corrupti iusto aspernatur perspiciatis, assumenda eaque sint, asperiores laboriosam fugiat dolorum?"
const cast=[
    {source:require('../assets/johnwickcast.png'),name:'keanu Reeves'},
    {source:require('../assets/johnwickcast.png'),name:'keanu Reeves'},
    {source:require('../assets/johnwickcast.png'),name:'keanu Reeves'},
    {source:require('../assets/johnwickcast.png'),name:'keanu Reeves'},
    {source:require('../assets/johnwickcast.png'),name:'keanu Reeves'}
]
const {width,height}= Dimensions.get('window')
const MovieScreen = () => {
  return (
    <View className="flex-1 bg-neutral-800">
        <ScrollView >
            {/* <Text>MovieScreen</Text> */}
            <View className=''>

                <Video
                source={{uri:'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'}}
                style={{width:'100%', height: height*0.3}}
                useNativeControls
                isLooping
                //   shouldPlay={true}
                resizeMode='cover'
                />
                <Text className="text-white mt-10 text-2xl">
                    {name}
                </Text>
                <Text className="text-white ml-5">
                    {newtime}
                </Text>
                <View className='flex-row mt-5'>
                    <Text className="text-white ml-5 rounded-2xl border-[1px] border-white p-2">
                        Download
                    </Text>
                    <Text className="text-white ml-5 rounded-2xl border-[1px] border-white p-2">
                        My List
                    </Text>
                </View>
                
                <View className='flex-row mt-10 '>
                    {
                        movieType.map((movie,ind)=>{
                            return (
                                <Text className="text-white ml-5 ro unded-2xl border-[1px] border-white p-2" key={ind}>
                                    {movie}
                                </Text>
                            )
                        })
                    }
                </View>

                <View className='flex-row mt-5 mx-5'>
                    <Text className="text-white">
                        {str.length>500?str.substring(0,500)+'....':str}
                        <Text className='text-amber-400'>{str.length>500?'readmore':''}</Text>
                    </Text>
                </View>

                <View className=' mt-5 mx-5 mb-[40px]'>
                    <Text className="text-white text-3xl mb-3">
                        Top Cast
                    </Text>
                    <ScrollView className='flex-row' horizontal showsHorizontalScrollIndicator={false}>
                        {
                            cast.map((item,ind)=>{
                                return(
                                <View key={ind} className='items-center'>
                                    <Image 
                                    source={item.source} 
                                    style={{width:width*0.3,height: height*0.2}} 
                                    className='rounded-[40px] mr-5'
                                    />
                                    <Text className="text-white mr-3">{item.name}</Text>
                                </View>)
                            })
                        }
                    </ScrollView>
                </View>
            </View>
        </ScrollView>
    </View>
        
  )
}

const styles = StyleSheet.create({})

export default MovieScreen
