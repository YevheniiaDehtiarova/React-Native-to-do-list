import React from "react";
import { View, StyleSheet, TextInput, Button, Alert } from "react-native-web";
import { useState } from "react";

export const AddTodo = ({ onSubmit }) => {
    const [value, setValue] = useState('');

    const pressHandler = () => {
        if (value.trim()) {
            onSubmit(value);
            setValue('');
        } else {
            Alert.alert('Name of case could not be empty')
        }
    }

    return (
        <View style={styles.block}>
            <TextInput
                onChangeText={setValue}
                value={value}
                placeholder="Enter name of case"
                autoCorrect ={false}
                autoCapitalize="none"
                style={styles.input} />
            <Button title="Add" onPress={pressHandler} />
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justufyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },
    input: {
        width: '70%',
        padding: 10,
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: '#3949ab'
    },
    button: {
        marginBottom: 10,
    }
})