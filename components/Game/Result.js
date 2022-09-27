import { StatusBar, StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";

export default function Result({ result }) {
    console.log(result);

    const [cat, setCat] = useState("https://cataas.com/cat/says/Votre%20resultat%20est%20" + result + "%20?size=50&color=red");

    return (
        <View style={styles.container}>
            <Text>Votre resultat : {result} / 10</Text>
            <Image
                source={{ uri: cat }}
                style={styles.img}
            />
            <StatusBar hidden={true} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {
        width: 400,
        height: 400,
    }
});