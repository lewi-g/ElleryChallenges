import React from 'react'

import { Text, TouchableOpacity, View, TextInput } from 'react-native'

import Header from '../components/Header.js'

export default function CreateChallenge() {
  return (
    <View>
      <Header />
      <Text>Set up your first goal:</Text>
      <TextInput style={{ height: 40 }} placeholder="Do 10 Squats" />
      <TouchableOpacity>
        <Text>Daily</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Weekly</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Custom</Text>
      </TouchableOpacity>
    </View>
  )
}
