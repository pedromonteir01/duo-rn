import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, Text } from "react-native";

const Navigate = ({ screen, name }) => {

    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={navigation.navigate(screen)}>
            <Text>{name}</Text>
        </TouchableOpacity>        
    );
}

export default Navigate;