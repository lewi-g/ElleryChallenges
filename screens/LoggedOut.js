import React from 'react'

import { Button, ScrollView, StyleSheet, Text, View } from 'react-native'

import Header from '../components/Header.js'

function LoggedOut({ navigation }) {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <Text style={styles.motto}>
          Personal Challenge, Community Support and Accountability
        </Text>
        <Button
          onPress={() => {
            navigation.push('CreateChallenge')
          }}
          title="Let's get started"
          color="#68a0cf"
          accessibilityLabel="Start creating a challenge"
        />
        <Button
          onPress={() => {
            navigation.push('SignIn')
          }}
          title="sign in"
          color="green"
          accessibilityLabel="sign in"
        />
      </ScrollView>
    </View>
  )
}

LoggedOut.navigationOptions = {
  header: null
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  motto: {
    paddingTop: 20,
    paddingBottom: 20,
    fontWeight: '200'
  }
})

export default LoggedOut
