import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import className from 'twrnc'
import Ellipsis from '@/assets/icons/Ellipsis'

const Track = ({image , title , name , onpress}) => {
  return (
    <View style={className`flex-row gap-3 justify-between items-center mb-2`}>
      <Image source={image} style={className`h-12 w-12 rounded-lg 0`}/>
      <Pressable onPress={onpress} style={className`flex-1 pb-3`}>
        <Text style={className`text-white text-lg`}>{title}</Text>
        <Text style={className`text-white`}>{name}</Text>
      </Pressable>
      <Ellipsis/>
    </View>
  )
}

export default Track