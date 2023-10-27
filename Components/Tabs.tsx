import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Tabs = ({category}) => {
  return (
    <View className="flex-row mx-4  border-[1px] border-white rounded-[10px]">
      <Text style={{color:'gray', padding: 5,fontSize:10}}>{category}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    tab__container:{
        // borderWidth: 2,
        // borderColor: 'gray',
        // borderRadius: 13,
        // paddingLeft: 5,
        // paddingRight: 5,
        // marginRight: 10,
        // height: '220%'
    },
    
})

export default Tabs
