import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import className from 'twrnc'

const _layout = () => {
  return (
    <Tabs 
    sceneContainerStyle={className`bg-black text-3xl text-white`}
    screenOptions={{
        tabBarStyle:{
            backgroundColor:'rgba(000,000,000,0.75)',
            height:80,
            borderRadius:20,
            paddingBottom:20
        },
        headerStyle:{
          
        },
    }}
    >
        <Tabs.Screen name='favorites' options={{}}/>
        <Tabs.Screen name='playlist' options={{}}/>
        <Tabs.Screen name='songs' options={{}}/>
        <Tabs.Screen name='artists' options={{}}/>

    </Tabs>
  )
}

export default _layout