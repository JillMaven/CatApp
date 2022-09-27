import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useEffect, useState} from "react";
import RandomCats from "../Cat/RandomCats";

export default function ModeComponent(params) {
    const {firstRoll, secondRoll, operation, minRoll} = params.route.params;

    const [viewCat, setViewCat] = useState(false);
    const [operationText, setOperationText] = useState("");
    const [number, onChangeNumber] = useState("caca");
    const [operationResult, setOperationResult] = useState(null);

    function getRandomInt(max) {
        return Math.floor((Math.random() * max) + minRoll);
    }

    let generateOperation = () => {
        let number1 = getRandomInt(firstRoll);
        let number2 = getRandomInt(secondRoll);

        if (operation === 0) {
            setOperationResult(number1 + number2);
            setOperationText(number1 + " + " + number2 + " = ?")
        }
        if (operation === 1) {
            setOperationResult(number1 * number2);
            setOperationText(number1 + " * " + number2 + " = ?")
        }
    }

    useEffect(() => {
        generateOperation()
    }, [])

    let onSubmitClick = () => {
        if (number == operationResult) {
            setViewCat(true)
        } else {
            alert("Perdu")
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{operationText}</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={isNaN(number) ? "" : parseInt(number)}
                placeholder={`Type result here:`}
                keyboardType="numeric"
            />
            <Button
                onPress={onSubmitClick}
                title="Submit"
                color='#000000'
            />
            {viewCat && <RandomCats/>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontSize: 30
    },
    input: {
        height: 60,
        width: 300,
        margin: 30,
        borderWidth: 1,
        padding: 10,
    },
});