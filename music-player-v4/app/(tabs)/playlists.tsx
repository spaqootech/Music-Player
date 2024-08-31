import { View, Text } from 'react-native'
import React from 'react'
import TrackPlaylist from '@/components/TrackPlaylist'
import className from 'twrnc'

const playlists = () => {
  return (
    <View style={className`gap-2 flex-1`}>
      
      <TrackPlaylist source={require('../../assets/track.png')} title='Coding on ona ona'/>
      
      <TrackPlaylist source={require('../../assets/track.png')} title='Coding on ona ona'/>
    </View>
  )
}

export default playlists