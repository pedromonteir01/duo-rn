import { View, Text, Image } from "react-native";
import styles from "./styles";

export default function Movies({ route }) {
    const { title, image, content } = route.params;
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 30, fontWeight: 'bold' }}>{title}</Text>
            <Image source={require(image)} style={styles.image}/>
            <Text style={styles.content}>{content}</Text>
        </View>
    );
}