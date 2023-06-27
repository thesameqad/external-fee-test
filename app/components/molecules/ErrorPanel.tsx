import { StyleSheet, View } from "react-native"
import Text from "../atoms/Text"

export default ({ text }: { text: string }) => {
    return (
        <View style={styles.container}>
            <Text size='md'>Error Occured</Text>
            <Text>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#eb5153',
        padding: 10,
        borderRadius: 10
    }
})