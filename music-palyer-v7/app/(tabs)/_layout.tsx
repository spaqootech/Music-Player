import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import className from 'twrnc'
import Heart from '@/assets/icons/Heart'
import Playlist from '@/assets/icons/Playlist'
import Music from '@/assets/icons/Music'
import Artists from '@/assets/icons/Artists'
import SearchInput from '@/components/SearchInput'

const Layout = () => {
  return (
    <View style={className`flex-1 p-2 bg-black`}>
        {/* Tabs */}
        <Tabs sceneContainerStyle={{backgroundColor:'black'}}
        screenOptions={{
            headerStyle:{
                backgroundColor:'rgba(55,55,255,0)',
                borderWidth:0
            },
            headerTintColor:'white',
            headerTitleStyle:{
                fontSize:40,
                color:'white'
            },
            tabBarStyle:{
                backgroundColor:'rgba(55,55,255,0.5)',
                height:70,
                padding:10,
                margin:10,
                borderWidth:0,
                borderRadius:20
            },
            tabBarLabelStyle:{
                color:'white'
            },
            tabBarInactiveTintColor:'white'
        }}
        >
            <Tabs.Screen name='favorites' options={{
                tabBarIcon:()=>(
                    <Heart/>
                ),
                headerTitle:'Favorites',
                tabBarLabel:'Favorites',
            }}/>
            
            <Tabs.Screen name='playlists' options={{
                tabBarIcon:()=>(
                    <Playlist/>
                ),
                headerTitle:'Playlists',
                tabBarLabel:'Playlists',
            }}/>
            
            <Tabs.Screen name='index' options={{
                tabBarIcon:()=>(
                    <Music/>
                ),
                headerTitle:'Songs',
                tabBarLabel:'Songs',
            }}/>
            
            <Tabs.Screen name='artists' options={{
                tabBarIcon:()=>(
                    <Artists/>
                ),
                headerTitle:'Artists',
                tabBarLabel:'Artists',
            }}/>
        </Tabs>
        {/* Tabs */}
        
    </View>
  )
}

export default Layout