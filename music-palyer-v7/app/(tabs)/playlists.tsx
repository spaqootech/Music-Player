import { View, Text, Image } from 'react-native'
import React from 'react'
import className from 'twrnc'
import data from '../../assets/data/library.json'
import ForwardThin from '@/assets/icons/ForwardThin'

const playlists = () => {
  return (
    <View style={className`flex-1 gap-3 `}>

<View style={className`flex-row justify-between items-center gap-1 p-3`}>
      <Image source={data[0].artwork} style={className`h-20 w-20 rounded-xl`}/>
      <Text style={className`flex-1 text-lg font-bold text-white`}>{data[0].playlist}</Text>
      <ForwardThin/>
      </View>

      <View style={className`flex-row justify-between items-center gap-3 p-3`}>
      <Image source={data[5].artwork} style={className`h-20 w-20 rounded-xl`}/>
      <Text style={className`flex-1 text-lg font-bold text-white`}>{data[5].playlist}</Text>
      <ForwardThin/>
      </View>

      <View style={className`flex-row justify-between items-center gap-3 p-3`}>
      <Image source={data[10].artwork} style={className`h-20 w-20 rounded-xl`}/>
      <Text style={className`flex-1 text-lg font-bold text-white`}>{data[10].playlist}</Text>
      <ForwardThin/>
      </View>

    </View>
  )
}

export default playlists