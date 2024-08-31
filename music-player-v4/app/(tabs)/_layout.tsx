import Artists from '@/assets/icons/Artists'
import Heart from '@/assets/icons/Heart'
import Music from '@/assets/icons/Music'
import Playlist from '@/assets/icons/Playlist'
import PopupTrackItem from '@/components/PopupTrackItem'
import PopupMusic from '@/components/PopupMusic'
import { Stack, Tabs } from 'expo-router'
import React, { useState } from 'react'
import { Pressable, View } from 'react-native'
import className from 'twrnc'

const Layout = () => {
    const [visiblePopup , setVisiblePopup] = useState(false)
    const [selectedItem , setSelectedItem] = useState(null)
    const toggleVisible =() =>{
        if(!visiblePopup){setVisiblePopup(true)}
        else {setVisiblePopup(false)}
    }
  return (
    <View style={className`bg-black flex-1`}>
        <Pressable onPress={toggleVisible} style={className`p-3 absolute bottom-25 z-10 `}>
        <PopupTrackItem source={require('../../assets/track.png')} title='spaqoo k coding channel par'/>
        </Pressable>

        {/* popup Music */}
       {visiblePopup && <PopupMusic onPress={toggleVisible}/>} 
        {/* popup Music */}

        
        


    <Tabs sceneContainerStyle={className`bg-black text-white p-2`} 
    screenOptions={{
        headerStyle:{
            backgroundColor:'rgba(20,20,40,1)',borderBottomWidth:0,
            height:100,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
      },
        headerTitleStyle:{fontSize:33,color:'white'},
        tabBarStyle:{
            backgroundColor:'rgba(20,20,40,0.75)',
            borderWidth:0,
            height:80,
            paddingVertical:15,
            paddingBottom:15,
            borderRadius:30,
            margin:10,
            
        },
        // tabBarLabelStyle:{color:'white'},
        tabBarActiveTintColor:'orange',
        tabBarInactiveTintColor:'white'
    }}
    >
        <Tabs.Screen name='favorites' options={{
            tabBarIcon:()=>(<Heart/>) , tabBarLabel:'Favorites'
        }}/>
        <Tabs.Screen name='playlists' options={{
            tabBarIcon:()=>(<Playlist/>), tabBarLabel:'Playlists'
        }}/>
        <Tabs.Screen name='index' options={{
            tabBarIcon:()=>(<Music/>), tabBarLabel:'Music',headerTitle:'Music'
        }}/>
        <Tabs.Screen name='artists' options={{
            tabBarIcon:()=>(<Artists/>), tabBarLabel:'Artists'
        }}/>
    </Tabs>
    </View>
  )
}

export default Layout