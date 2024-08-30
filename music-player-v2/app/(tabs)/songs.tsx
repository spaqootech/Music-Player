import { View, Text } from 'react-native'
import React from 'react'
import Search from '@/assets/icons/Search'
import Play from '@/assets/icons/Play'
import Forward from '@/assets/icons/Forward'

const songs = () => {
  return (
    <View>
      <Search/>
      <Play/>
      <Forward/>
    </View>
  )
}

export default songs