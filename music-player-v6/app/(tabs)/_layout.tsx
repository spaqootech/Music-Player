import { View, Text } from 'react-native'
import React from 'react'
import className from 'twrnc'
import { Tabs } from 'expo-router'
import Heart from '@/assets/icons/Heart'
import Playlist from '@/assets/icons/Playlist'
import Music from '@/assets/icons/Music'
import Artists from '@/assets/icons/Artists'

const Layout = () => {
  return (
    <View style={className`p-3 flex-1 bg-black`}>

        <Tabs sceneContainerStyle={className`bg-black`}
        screenOptions={{
            tabBarStyle:{
                backgroundColor:'rgba(55,55,255,0.5)',
                borderWidth:0,
                height:80,
                padding:20,
                borderRadius:20,
            },
            headerStyle:{
                backgroundColor:'rgba(55,55,255,0.5)',
                borderWidth:0,
                height:80,
                padding:20,
                borderRadius:20,
            },
            headerTitleStyle:{
                color:'white',
                fontSize:40
            },
            tabBarActiveTintColor:'orange',
            tabBarInactiveTintColor:'white',
        }}
        >
            <Tabs.Screen name='favorites' options={{
                tabBarLabel:'Favorites',
                tabBarIcon:()=>(
                    <Heart/>
                )
            }}/>
            <Tabs.Screen name='playlists' options={{
                tabBarLabel:'Playlists',
                tabBarIcon:()=>(
                    <Playlist/>
                )
            }}/>
            <Tabs.Screen name='index' options={{
                tabBarLabel:'Songs',
                headerTitle:'Songs',
                tabBarIcon:()=>(
                    <Music/>
                )
            }}/>
            <Tabs.Screen name='artists' options={{
                tabBarLabel:'Artists',
                tabBarIcon:()=>(
                    <Artists/>
                )
            }}/>

        </Tabs>

    </View>
  )
}

export default Layout