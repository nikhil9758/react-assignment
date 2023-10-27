index.js
theme style-> background= '#eab308'
                text= '#eab308'
styles-> text:{color: theme.text}
        background:{backgroundColor: theme.background}

home screen
ios= platform.OS=='ios'-> import platform from react-native
const[trending, settrending]= usestate([1,2,3])
view->
	classname->
		flex 1 -> for cover the complete area
		bg-netral-800- background color with dark
    {/* status bar and logo*/}
	safeareaview-> 
		classname->
            ios? -mb-2: mb-3 -> for ios we have check assign negative for android not
        //implemented status bar
        status bar-> import this component from expo-status-bar
            style='light'-> prop we are passing
        view
            //first icon
            classname-> flex-row justify-between items-center mx-4(margin horizontal)
            Bars3centerLeftIcon-> 
            pass prop-> size=30 strokewidth=2 color= white-> import from react-native-heroicons/outline

            //Movie Text
            Text->
            classname-> text-white text-3xl font-bold
             <Text style={styles.text}>M</Text>ovies -> text here we write give diffrent style color to m text
            
            //Third icon
            TouchableOpacity->
                MagnifyingGlassIcon->
                props-> size=30 stroke width= 2 color= white
    
        ScrollView
        props-> showverticalscrollIndicator=false
        contentcontainerstyle={{paddingbottom: 10}}

        {/*treding movies carasouel*/}
        <TrendingMovies data={trending}/> make a component  and pass the data of array





//My Homesceen data

import { StyleSheet, Text, View,Dimensions, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import Tabs from '../Components/Tabs'
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import {Image} from 'react-native'
const { width: screenWidth, height } = Dimensions.get('window');

const data = [
    require('../assets/johnwick.png'),
    require('../assets/avengers.png'),
    require('../assets/johnwick.png')
  // Add more cards as needed
];


const categoryList=['Popular','Upcoming','Classics','Top10']
const HomeScreen = () => {
    const _renderItem = ({ item}) => {
        return (
            <Image
                source={item}
                style={styles.cardImage}
            />            
        );
      };
    
  return (
    <View style={styles.home}>
        <View style={styles.home__category}>
                {
                    categoryList.map((category,ind)=>{
                        return <Tabs category={category} key={ind}/>
                    })
                }
        </View>
        <Text style={{color:'white', marginTop: 15,fontSize:20}}>Now Playing</Text>
        
        <View >
            <Carousel
                sliderWidth={screenWidth-90}
                itemWidth={screenWidth *0.68}
                data={data}
                first={1}
                renderItem={_renderItem} 
                inactiveSlideOpacity={0.40}
                slideStyle={{display: 'flex', alignItems: 'center'}}
            />
        </View>
        <Text style={{color:'white', marginTop: 15,fontSize:20}}>Popular</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    // container: {
    //     flex: 0.4,
    //     // width: '50%',
    //     // height: '50%',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //   },
    home:{
        flex:1,
        backgroundColor: 'black',
        paddingHorizontal:25,
        paddingVertical: 20
    },
    home__category:{
        flex: 0.045,
        flexDirection: 'row',
    },
      cardContainer: {
        borderRadius: 100,
      },
      cardImage: {
        width: screenWidth* 0.7,
        height: height* 0.5,
        borderRadius: 30,
      },
    
})

export default HomeScreen
