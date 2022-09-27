import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useEffect, useState } from "react";
import RandomCats from "../Cat/RandomCats";
import Result from './Result';

export default function EasyModeComponent() {
    const [viewCat, setViewCat] = useState(false);
    const [operationText, setOperationText] = useState("");
    const [number, onChangeNumber] = useState("caca");
    const [operationResult, setOperationResult] = useState(null);
    const [response, setResponse] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [leResult, setLeResult] = useState(0);

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    let generateOperation = () => {
        let number1 = getRandomInt(50);
        let number2 = getRandomInt(50);

        setOperationResult(number1 + number2);

        setOperationText(number1 + " + " + number2 + " = ?")
    }

    useEffect(() => {
        generateOperation()
    }, [])

    let onSubmitClick = () => {
        if (number == operationResult) {
            setViewCat(true)

            let tab = response;
            tab.push(true);
            setResponse(tab);
            console.log(response);

            if (response.length == 10) {
                let res = response.filter(res => res == true);
                setLeResult(res.length);
                console.log("test" + leResult)
                setShowResult(true);

            } else {
                generateOperation();
            }

        } else {
            setViewCat(false)

            let tab = response;
            tab.push(false);
            setResponse(tab);
            console.log(response);
            if (response.length == 10) {
                let res = response.filter(res => res == true);
                setLeResult(res.length);
                console.log("test" + leResult)
                setShowResult(true);

            } else {
                generateOperation();
            }

        }
    }

    return (
        <View style={styles.container}>
            {!showResult ? (
                <>
                    <Text style={styles.text}>{operationText}</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeNumber}
                        value={isNaN(number) ? "" : parseInt(number)}
                        placeholder={`Type result here: ${operationResult}`}
                        keyboardType="numeric"
                    />
                    <Button
                        onPress={onSubmitClick}
                        title="Submit"
                        color='#000000'
                    />
                    {viewCat && <RandomCats />}
                </>

            ) : (<Result result={leResult} />)}




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