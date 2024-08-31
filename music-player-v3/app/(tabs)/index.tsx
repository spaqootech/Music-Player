import { View, Text } from 'react-native'
import React from 'react'
import TrackItem from '@/components/TrackItem'

const songs = () => {
  return (
    <View>
        
        {/*track lists */}
        <TrackItem source={require('../../assets/track.png')} name='Spaqoo' title='New Track'/>
        {/*track lists */}

    </View>
  )
}

export default songs