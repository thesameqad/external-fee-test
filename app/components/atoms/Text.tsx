import { StyleSheet, Text, TextProps } from "react-native";

interface iTextProps extends TextProps {
    color?: "white" | "black",
    size?: "sm" | "md" | "xl"
}
export default (props: iTextProps) => {
    return (
        <Text style={[props.color === "black" ? styles.textBlack : styles.textWhite, styles[props.size || "sm"], props.style]} {...props}>
            {props.children}
        </Text>);
}

const styles = StyleSheet.create({
    textWhite: {
        color: 'white'
    },
    textBlack: {
        color: 'black'
    },
    sm: {
        fontSize: 16
    },
    md: {
        fontSize: 20,
        fontWeight: '600'
    },
    xl: {
        fontSize: 30
    }
})