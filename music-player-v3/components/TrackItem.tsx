import { View, Text, Image } from 'react-native'
import React from 'react'
import className from 'twrnc'
import Ellipsis from '@/assets/icons/Ellipsis'

const TrackItem = ({source , title , name}) => {
  return (
    <View style={className`flex-row justify-between items-center gap-3 px-2`}>
        <Image source={source} style={className`h-12 w-12 rounded-lg`}/>
        <View style={className`flex-1 py-2 border-b border-gray-700`}>
            <Text style={className`text-white text-lg font-semibold`}>{title}</Text>
            <Text style={className`text-gray-300 text-md`}>{name}</Text>
        </View>
        <Ellipsis/>
    </View>
  )
}

export default TrackItem