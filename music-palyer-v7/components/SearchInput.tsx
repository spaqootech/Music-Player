import { View, Text, TextInput } from 'react-native'
import React from 'react'
import className from 'twrnc'
import Search from '@/assets/icons/Search'

const SearchInput = () => {
  return (
    <View style={className`bg-gray-800  rounded-lg flex-row justify-start items-center px-3 gap-2 w-95`}>
        <Search/>
        <TextInput placeholder='Find in songs' style={className`text-lg flex-1 p-3 text-gray-300 rounded-lg`}/>
    </View>
  )
}

export default SearchInput