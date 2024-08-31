import { View, Text, Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import className from 'twrnc'
import Ellipsis from '@/assets/icons/Ellipsis'
import Play from '@/assets/icons/Play'
import Forward from '@/assets/icons/Forward'
import Stop from '@/assets/icons/Stop'

const PopupTrackItem = ({source , title }) => {
    const [playit , setPlayit] =  useState(true)
    const togglePlayit = ()=>{
        if(!playit){
            setPlayit(true)
        }else{
            setPlayit(false)
        }
    }
  return (
    <View style={className`flex-row justify-between items-center gap-3 p-2 bg-gray-800 rounded-xl`}>
        <Image source={source} style={className`h-12 w-12 rounded-lg`}/>
        
        <Text style={className`flex-1 text-white text-lg font-semibold`}>{title}</Text>

        <View style={className`py-2 w-20 flex-row gap-5 justify-center items-center`}>
            <Pressable onPress={()=>togglePlayit(!playit)}>
                {playit ? <Play/>:<Stop/>}
            </Pressable>
            <Forward/>
        </View>
    </View>
  )
}

export default PopupTrackItem