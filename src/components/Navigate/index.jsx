import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, Text } from "react-native";

const Navigate = ({ screen, name, params }) => {

    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={navigation.navigate(screen, { params })}>
            <Text>{name}</Text>
        </TouchableOpacity>        
    );
}

export default Navigate;