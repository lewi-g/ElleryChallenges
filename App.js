import React from 'react';

import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style = {{marginTop: 40, fontSize:40}}>Ellery Challenge App</Text>
      <ScrollView>
        <Text>
          An app where each user can list out the challenges they will attempt and share their progress with their community</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  
  },
});
