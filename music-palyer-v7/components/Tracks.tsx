import { View, Text, ScrollView, FlatList } from 'react-native'
import React, { useState } from 'react'
import Track from './Track'
import data from '../assets/data/library.json'
import className from 'twrnc'
import MusicScreen from './MusicScreen'

const Tracks = () => {
  const [popupVisible , setPopupVisible] = useState(false)
  const [musicScreenHide , setMusicScreenHide ] = useState(true)
  const [selected , setSelected] = useState(null)

  const toggleHide = () => {
    setPopupVisible(!popupVisible)
  }
  const togglePopup = (item) =>{
    setPopupVisible(!popupVisible)
    setSelected(item)
  }
  return (
    <>
    <View style={className`flex-1`}>
        <ScrollView showsVerticalScrollIndicator={false}>
            <FlatList data={data} 
            renderItem={({item})=>(
                <Track onpress={togglePopup} image={item.artwork} title={item.title} name={item.artist}/>
            )}/>
        </ScrollView>
    </View>

{popupVisible && (<MusicScreen  onpress={toggleHide}/>)}
</>
  )
}

export default Tracks