import {StyleSheet, Text, View} from "react-native";

export default function About() {
    return (
        <View style={styles.container}>
            <Text>A propos de CalculaCat</Text>
            <Text>
                Salut
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});