import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from '../views/Home'

const DrawerRoutes = () => {

    const Drawer = createDrawerNavigator();

    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={Home}/>
        </Drawer.Navigator>
    );
};

export default DrawerRoutes;