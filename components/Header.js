import React from 'react'

import { StyleSheet, Text } from 'react-native'

export default function Header() {
  return (
    <Text
      onPress={() => {
        console.log('we did it')
      }}
      style={styles.header}
    >
      Ellery Challenges
    </Text>
  )
}

const styles = StyleSheet.create({
  header: {
    marginTop: 40,
    fontSize: 38,
    color: 'green'
  }
})
