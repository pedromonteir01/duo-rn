import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import DrawerRoutes from "./drawer.routes";

export default function Routes() {
    return (
        <NavigationContainer>
            <DrawerRoutes/>
            <StatusBar style='auto'/>
        </NavigationContainer>
    );
}