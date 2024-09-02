import { View, Text } from 'react-native'
import React from 'react'
import className from 'twrnc'//for using tailwindcss
import SearchInput from '@/components/SearchInput'
import PlayAndShuffle from '@/components/PlayAndShuffle'
import Track from '@/components/Track'
import Tracks from '@/components/Tracks'

const index = () => {
  return (
    <View style={className`flex-1 gap-2`}>
              <SearchInput/>
              <PlayAndShuffle/>
              <Tracks/>
    </View>
  )
}

export default index