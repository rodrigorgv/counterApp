import React from 'react'
import { Platform, Pressable, StyleSheet, Text, View } from 'react-native'


interface Props {
    label: string;
    onPress?: () => void;
    onLongPress?: () => void;

}

export const PrimaryButton = ({ label, onPress, onLongPress }: Props) => {
    return (
        <Pressable
            onPress={() => onPress && onPress()}
            onLongPress={() => onLongPress && onLongPress()}
            style={({ pressed }) => [
                styler.button,
                pressed && styler.buttonPressed
            ]}>
            <Text style={{
                color: Platform.OS === 'android' ? 'white' : '#4746ab'
            }}>{label}</Text>
        </Pressable>
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
    button: {
        //con la funcion platform, react nos retorna el tipo de sistema operativo que corre, para que hagamos lo que necesitemos
        backgroundColor: Platform.OS === 'android' ? '#5856d6' : 'white',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
    },
    buttonPressed: {
        backgroundColor: Platform.OS === 'android' ? '#4746ab' : 'white',
    }
})