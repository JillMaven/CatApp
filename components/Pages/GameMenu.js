import {Button, Text, View} from "react-native";
import React from "react";

export default function GameMenu({navigation}) {

    return (
        <View>
            <Text>Choisir le mode de jeu</Text>
            <Button
                title="Easy mode"
                onPress={() => navigation.navigate('EasyMode')}
            />
        </View>
    );
}