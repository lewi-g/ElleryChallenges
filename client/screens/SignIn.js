import React from 'react'

import { View, Button } from 'react-native'

export default class SignIn extends React.Component {
  render() {
    return (
      <View>
        <Button
          onPress={() => console.log('using Gmail')}
          title="Use Gmail"
          color="blue"
          accessibilityLabel="sign up using Gmail"
        />
        <Button
          onPress={() => console.log('using Slack')}
          title="Use Slack"
          color="orange"
          accessibilityLabel="sign up using Slack"
        />
      </View>
    )
  }
}
