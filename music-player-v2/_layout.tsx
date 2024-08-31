import Artists from '@/assets/icons/Artists'
import Heart from '@/assets/icons/Heart'
import Music from '@/assets/icons/Music'
import Playlist from '@/assets/icons/Playlist'
import { Stack, Tabs } from 'expo-router'
import React from 'react'
import { View } from 'react-native'
import className from 'twrnc'

const Layout = () => {
  return (
    <View style={className`bg-black flex-1`}>
    <Tabs sceneContainerStyle={className`bg-black text-white p-2`} 
    screenOptions={{
        headerStyle:{
            backgroundColor:'rgba(20,20,40,1)',borderBottomWidth:0,
            height:100,
        borderRadius:30  },
        headerTitleStyle:{fontSize:33,color:'white'},
        tabBarStyle:{
            backgroundColor:'rgba(20,20,40,0.75)',
            borderWidth:0,
            height:80,
            paddingBottom:20,
            borderRadius:30,
            margin:10
        }
    }}
    >
        <Tabs.Screen name='favorites' options={{
            tabBarIcon:()=>(<Heart/>)
        }}/>
        <Tabs.Screen name='playlists' options={{
            tabBarIcon:()=>(<Playlist/>)
        }}/>
        <Tabs.Screen name='songs' options={{
            tabBarIcon:()=>(<Music/>)
        }}/>
        <Tabs.Screen name='artists' options={{
            tabBarIcon:()=>(<Artists/>)
        }}/>
    </Tabs>
    </View>
  )
}

export default Layout