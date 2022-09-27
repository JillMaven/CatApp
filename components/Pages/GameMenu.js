import {Button, StyleSheet, Text, View} from "react-native";
import React from "react";
import RandomCats from "../Cat/RandomCats";

const calcEnum = {Addition: 0, Multiplication: 1};

export default function GameMenu({navigation}) {
    return (
        <View>
            <Text style={styles.title}>Choisir le mode de jeu</Text>
            <Button style={styles.menubutton}
                    title="Easy mode"
                    onPress={() => navigation.navigate('Mode', {
                        firstRoll: 30,
                        secondRoll: 30,
                        operation: calcEnum.Addition,
                        minRoll: 10
                    })}
            />
            <Button
                title="Medium mode"
                onPress={() => navigation.navigate('Mode', {
                    firstRoll: 20,
                    secondRoll: 10,
                    operation: calcEnum.Multiplication,
                    minRoll: 5
                })}
            />
            <Button
                title="Hard mode"
                onPress={() => navigation.navigate('Mode', {
                    firstRoll: 50,
                    secondRoll: 20,
                    operation: calcEnum.Multiplication,
                    minRoll: 10
                })}
            />
            <RandomCats/>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 25,
        alignSelf: "center",
        marginBottom: 50,
        marginTop: 50,
        fontWeight: "300",
    }
});