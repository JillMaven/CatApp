import {Button, Text, View} from "react-native";
import React from "react";

const calcEnum = {Addition: 0, Multiplication: 1};

export default function GameMenu({navigation}) {
    return (
        <View>
            <Text>Choisir le mode de jeu</Text>
            <Button
                title="Easy mode"
                onPress={() => navigation.navigate('Mode', {
                    firstRoll: 50,
                    secondRoll: 50,
                    operation: calcEnum.Addition
                })}
            />
            <Button
                title="Medium mode"
                onPress={() => navigation.navigate('Mode', {
                    firstRoll: 20,
                    secondRoll: 10,
                    operation: calcEnum.Multiplication
                })}
            />
            <Button
                title="Hard mode"
                onPress={() => navigation.navigate('Mode', {
                    firstRoll: 50,
                    secondRoll: 20,
                    operation: calcEnum.Multiplication
                })}
            />
        </View>
    );
}