import {  FlatList, Image, Pressable, ScrollView, Text, View } from 'react-native'
import React, { useState } from 'react'
import styles from './indexStyle'
import Ellipsis from '@/assets/icons/Ellipsis'
import data from '../assets/data/library.json'

const index = () => {
    const [trackHide , setTrackHide] = useState(false)
    const [trackSelected , setTrackSelected] = useState(null)

    const toggleButton = (item)=>{
        if(!trackHide){
            setTrackHide(true)
            setTrackSelected(item)
        }else {
            setTrackHide(false)
            setTrackSelected(null)
        }
    }
  return (
    <View style={styles.body}>
      <Text style={styles.title}>Songs</Text>

<ScrollView showsVerticalScrollIndicator={false}>
      <FlatList data={data} 
      renderItem={({item})=>(
        <Pressable onPress={()=>toggleButton(item)}>
            <Track label={item.title} name={item.artist} source={item.artwork}/>
        </Pressable>
      )}
      />
</ScrollView>

      {trackHide && trackSelected && ( 
      <View style={styles.trackPopup}>
      <TrackPopup source={trackSelected.artwork} label={trackSelected.title}/>
      </View>)}

    </View>
  )
}


const Track = ({source , label , name}) => {
    return(
      <View style={styles.track}>
      <Image source={source} style={styles.logo}/>
      <View style={styles.texts}>
          <Text style={styles.label}>{label}</Text>
          <Text style={styles.name}>{name}</Text>
      </View>
      <Ellipsis/>
    </View>
    )
}

const TrackPopup = ({source , label }) => {
    return(
      <View style={styles.track}>
      <Image source={source} style={styles.logo}/>
      <View style={styles.texts}>
          <Text style={styles.label}>{label}</Text>
      </View>
      <View>
        
      </View>
    </View>
    )
}
export default index
