import { View, Text, Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import className from 'twrnc'
import RedHeart from '@/assets/icons/RedHeart'
import Loop from '@/assets/icons/Loop'
import LowVolume from '@/assets/icons/LowVolume'
import HighVolume from '@/assets/icons/HighVolume'
import Backward from '@/assets/icons/Backward'
import Play from '@/assets/icons/Play'
import Forward from '@/assets/icons/Forward'
import Stop from '@/assets/icons/Stop'

const PopupMusic = ({onPress}) => {
    const [playit , setPlayit] =  useState(true)
    const togglePlayit = ()=>{
        if(!playit){
            setPlayit(true)
        }else{
            setPlayit(false)
        }
    }

  return (
    <View style={className`absolute z-10 top-0 bottom-0 left-0 right-0 bg-[rgba(55,155,225,1)] flex-1 p-5 justify-center items-center gap-5`}>
        <View style={className`p-2 shadow-inner w-20 rounded-full bg-gray-400`}></View>
      <Pressable onPress={onPress}>
      <Image source={require('../assets/track.png')} style={className`rounded-2xl drop shadow-2xl`}/>
      </Pressable>
      <View style={className`flex-row justify-between items-center w-80`}>
        <View>
            <Text style={className`text-white text-xl font-semibold`}>As you Fade Away</Text>
            <Text style={className`text-white text-xl`}>Spaqoo</Text>
        </View>
        <RedHeart/>
      </View>

      {/* playbacks */}
      <View>
        <View style={className`h-2 w-80 bg-[rgba(255,255,253,0.3)]`}>
            <View style={className`h-2 w-8 bg-white`}></View>
        </View>

        <View style={className`flex-row justify-between items-center w-80 mt-2`}>
            <Text style={className`text-white font-semibold`}>00:00</Text>
            <Text style={className`text-white font-semibold`}>00:00</Text>
        </View>
      </View>
      {/* playbacks */}


      {/* PlayButtons */}
      <View style={className`flex-row justify-center items-center gap-10 py-5`}>
        <Backward/>
        <Pressable onPress={()=>togglePlayit(!playit)}>
                {playit ? <Play/>:<Stop/>}
            </Pressable>
        <Forward/>
      </View>
      {/* PlayButtons */}

      {/* volume */}
      <View style={className`flex-row justify-between items-center w-80`}>
        <LowVolume/>
    <View style={className`h-2 w-65 bg-[rgba(255,255,253,0.3)]`}>
            <View style={className`h-2 w-8 bg-white`}></View>
    </View>
    <HighVolume/>

      </View>
      {/* volume */}


      <Loop />

    </View>
  )
}

export default PopupMusic