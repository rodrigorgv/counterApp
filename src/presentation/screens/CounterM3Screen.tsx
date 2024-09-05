import React, { useState } from 'react'
import { Platform, Pressable, SectionList, StyleSheet, Text, View } from 'react-native'
import { PrimaryButton } from '../components';
import { Button, FAB } from 'react-native-paper';
import { globalStyles } from '../theme/global.styles';
import Icon from 'react-native-vector-icons/Ionicons';

export const CounterM3Screen = () => {

  const [count, setCount] = useState(10);

  return (
    <View style={globalStyles.centerContainer}>
      <Text style={globalStyles.title}>{count}</Text>
      <Text>Hola</Text>
      <Icon name="accessibility-outline" size={25}></Icon>
      <FAB
        label='+1'
        style={globalStyles.fab}
        onPress={() => setCount(count + 1)}
        onLongPress={() => setCount(0)}
      />
    </View>
  )
}


