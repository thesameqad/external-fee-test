import { StyleSheet, View } from "react-native";
import { Post } from "../../types";
import { SvgUri } from "react-native-svg";
import Text from "../atoms/Text";

export default ({ post }: { post: Post }) => {
    return (
      <View style={styles.container}>
        <View style={styles.center}>
          <View style={styles.avatarContainer}>
            <SvgUri uri={post.author.picture} width={64} height={64} />
          </View>
        </View>
        <View style={styles.textContainer}>
          <View>
            <Text size='md'>{post.author.displayName}</Text>
            <Text>{post.text.substring(0, 100)}</Text>
          </View>
        </View>
      </View>);
  }

  const styles = StyleSheet.create({
    container: {
        marginVertical: 10, 
        flex: 1, 
        marginHorizontal: 5, 
        padding: 10, 
        backgroundColor: '#2F80ED', 
        borderRadius: 30, 
        flexDirection: 'row'
    },
    center: {
        justifyContent: 'center' 
    },
    avatarContainer: {
        borderRadius: 30, 
        backgroundColor: 'white', 
        padding: 3
    },
    textContainer: {
        padding: 10, 
        flex: 1
    }
});