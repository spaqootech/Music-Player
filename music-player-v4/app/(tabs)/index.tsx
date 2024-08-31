import { View, Text, FlatList, ScrollView, Pressable } from 'react-native'
import React from 'react'
import TrackItem from '@/components/TrackItem'
import data from '../../assets/data/library.json'
import className from 'twrnc'

const songs = () => {
  return (
    <View style={className`flex-1`}>
      <ScrollView>
        
      <FlatList data={data} 
        renderItem={({item})=>(
        <Pressable onPress={()=>alert(`${item.title}`)}>
          <TrackItem source={item.artwork} name={item.artist} title={item.title}/>
        </Pressable>
        )}
        />

      </ScrollView>


        {/*track lists */}
        {/* <TrackItem source={require('../../assets/track.png')} name='Spaqoo' title='New Track'/> */}
        {/*track lists */}

    </View>
  )
}

export default songs