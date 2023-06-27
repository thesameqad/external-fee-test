import { StyleSheet, TextInput, View } from "react-native";

export default ({ onSearch }: { onSearch: (text: string) => void }) => {
    return (
        <View style={styles.container}>
            <TextInput placeholder='Search' onSubmitEditing={e => onSearch(e.nativeEvent.text)} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 40,
        paddingLeft: 20,
        paddingVertical: 10,
        borderRadius: 30,
        backgroundColor: '#F9F7F7',
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3
    }
});