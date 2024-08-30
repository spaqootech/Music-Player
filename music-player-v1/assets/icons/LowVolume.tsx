import { View, Text } from 'react-native'
import React from 'react'
import Feather from '@expo/vector-icons/Feather';

const LowVolume = () => {
  return (
    <View>
        <Feather name="volume-1" size={24} color="white" />
    </View>
  )
}

export default LowVolume