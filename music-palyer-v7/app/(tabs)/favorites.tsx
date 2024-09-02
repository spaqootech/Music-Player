import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import className from 'twrnc'
import PlayAndShuffle from '@/components/PlayAndShuffle'
import SearchInput from '@/components/SearchInput'
import Track from '@/components/Track'
import data from '../../assets/data/library.json'

const favorites = () => {
  return (
    <View style={className`flex-1 gap-2`}>
      <SearchInput/>
      <PlayAndShuffle/>

      <ScrollView>
        <View>
          <Track image={data[0].artwork} title={data[0].title} name={data[0].artist}/>
          <Track image={data[3].artwork} title={data[3].title} name={data[3].artist}/>
          <Track image={data[6].artwork} title={data[6].title} name={data[6].artist}/>
          <Track image={data[9].artwork} title={data[9].title} name={data[9].artist}/>
        </View>
      </ScrollView>
    </View>
  )
}

export default favorites