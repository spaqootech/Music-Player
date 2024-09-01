import { View, Text, TextInput, Pressable, FlatList, Image, ScrollView } from 'react-native'
import React from 'react'
import className from 'twrnc'
import Search from '@/assets/icons/Search'
import Play from '@/assets/icons/Play'
import Shuffle from '@/assets/icons/Shuffle'
import data from '../../assets/data/library.json'
import Ellipsis from '@/assets/icons/Ellipsis'
const Songs = () => {
  return (
    <View style={className`p-1 gap-3 flex-1 bg-black`}>
      {/* Search */}
      <View style={className`bg-gray-900 rounded-lg flex-row justify-start items-center px-2 gap-2`}>
        <Search/>
        <TextInput placeholder='Find in songs' style={className`text-lg text-gray-300 p-3 flex-1`}/>
      </View>
      {/* Search */}

      {/* play and shuffle */}
      <View style={className`flex-row justify-between items-center`}>
        <Pressable style={className`bg-gray-800 w-43 rounded-lg flex-row justify-center items-center p-3 gap-2`}>
          <Play/>
          <Text style={className`text-lg font-semibold text-white`}>Play</Text>
        </Pressable>
        
        <Pressable style={className`bg-gray-800 w-43 rounded-lg flex-row justify-center items-center p-3 gap-2`}>
          <Shuffle/>
          <Text style={className`text-lg font-semibold text-white`}>Shuffle</Text>
        </Pressable>
      </View>
      {/* play and shuffle */}


      {/* data tracks */}
      <ScrollView>
      <FlatList data={data} renderItem={({item})=>(
        <View style={className`flex-row justify-between items-center gap-3`}>
          <Image source={item.artwork} style={className`h-10 w-10 rounded-lg `}/>
          <View style={className`flex-1 border-b border-gray-600 pb-3`}>
            <Text style={className`text-white text-lg font-semibold `}>{item.title}</Text>
            <Text style={className`text-gray-300`}>{item.artist}</Text>
          </View>
          <Ellipsis/>
        </View>
      )}/>
      </ScrollView>
      {/* data tracks */}
    </View>
  )
}

export default Songs