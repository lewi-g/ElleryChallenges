import React, { useState } from 'react'

import { StyleSheet, Text } from 'react-native'

export default function Header() {
  const [count, setCount] = useState(0)

  return (
    <Text
      onPress={() => {
        console.log('we did it')
        setCount(count + 1)
      }}
      style={styles.header}
    >
      Ellery Challenges {count}
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
