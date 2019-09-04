import React from 'react';

import {
  Button,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Header from '../components/Header.js';


export default class  LoggedOut extends React.Component{
  static navigationOptions = {
    header: null
  }

  onPressCreateChallenge = ()=> {
    console.log('createChallenge pressed')
    this.props.navigation.push('CreateChallenge')
      // this.props.navigation.dispatch(StackActions.reset({
      //   index: 0,
      //   actions: [
      //     NavigationActions.navigate({ routeName: 'CreateChallenge' })
      //   ],
      // }))
    }

  onPressSignIn= ()=> {
    this.props.navigation.push('SignIn')
  }

  onPressBack = () => {
    this.props.navigation.pop();
    // this.props.navigation.goBack();
  };
  

  render(){
    return (
      <View style = {styles.container}>
        <Header/>
        <ScrollView>
          <Text style={styles.motto}>
            Personal Challenge, Community Support and Accountability
          </Text>
          <Button 
            onPress = {()=> {this.onPressCreateChallenge()}}
            title = "Let's get started"
            color = '#68a0cf'
            accessibilityLabel = 'Start creating a challenge'
          />
          <Button
            onPress = {()=> {this.onPressSignIn()}}
            title = "sign in"
            color = 'green'
            accessibilityLabel = 'sign in'
          />
            
        </ScrollView>
        </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  motto:{
    paddingTop: 20, 
    paddingBottom: 20,
    fontWeight: "200"
  },
})
