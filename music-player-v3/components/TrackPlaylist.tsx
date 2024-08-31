import { View, Text, Image } from 'react-native'
import React from 'react'
import className from 'twrnc'
import ForwardThin from '@/assets/icons/ForwardThin'

const TrackPlaylist = ({source , title }) => {
  return (
    <View style={className`flex-row justify-between items-center gap-3 p-2`}>
        <Image source={source} style={className`h-22 w-22 rounded-lg`}/>
        <View style={className`flex-1`}>
            <Text style={className`text-white text-lg font-semibold`}>{title}</Text>
        </View>
        <ForwardThin/>
    </View>
  )
}

export default TrackPlaylist