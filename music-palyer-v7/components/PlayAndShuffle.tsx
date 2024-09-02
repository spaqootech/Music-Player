import { View, Text, Pressable } from 'react-native'
import React from 'react'
import className from 'twrnc'
import Play from '@/assets/icons/Play'
import Shuffle from '@/assets/icons/Shuffle'

const PlayAndShuffle = () => {
  return (
    <View style={className`flex-row justify-between items-center`}>
      <Pressable style={className`flex-row justify-center items-center gap-3 bg-gray-800 rounded-lg p-3 w-45`}>
        <Play/>
        <Text style={className`text-lg font-bold text-white`}>Play</Text>
      </Pressable>

      <Pressable style={className`flex-row justify-center items-center gap-3 bg-gray-800 rounded-lg p-3 w-45`}>
        <Shuffle/>
        <Text style={className`text-lg font-bold text-white`}>Shuffle</Text>
      </Pressable>
    </View>
  )
}

export default PlayAndShuffle