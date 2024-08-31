import { View, Text } from 'react-native'
import React from 'react'
import TrackItem from '@/components/TrackItem'
import className from 'twrnc'

const favorites = () => {
  return (
    <View style={className`flex-1 gap-1`}>
      
      
      <TrackItem source={require('../../assets/artist.png')} name='Spaqoo' title='Ag laga di basti mai' />
      
      <TrackItem source={require('../../assets/track.png')} name='Tech' title='dua apni masti mai' />

    </View>
  )
}

export default favorites