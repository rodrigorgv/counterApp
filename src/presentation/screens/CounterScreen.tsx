import React, { useState } from 'react'
import { Platform, Pressable, SectionList, StyleSheet, Text, View } from 'react-native'
import { PrimaryButton } from '../components';
import { Button } from 'react-native-paper';


export const CounterScreen = () => {

  const [count, setCount] = useState(10);

  return (
    <View style={styler.container}>
      <Text style={styler.title}>{count}</Text>
      {/* <PrimaryButton
        label='Incrementar' 
        onPress={ () => setCount(count + 1)}
        onLongPress={() => setCount(0)}/> */}
      <Button
        onPress={() => setCount(count + 1)}
        onLongPress={() => setCount(0)}>
        Incrementar
      </Button>
    </View>
  )
}


const styler = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 80,
    color: 'black',
    fontWeight: '300',
  },

})