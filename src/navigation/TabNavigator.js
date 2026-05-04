import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AboutScreen from '../screens/AboutScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component = {HomeScreen} />
            <Tab.Screen name= "Favorites" component={FavoritesScreen} options={{ headerShown: false }} />
            <Tab.Screen name= "Search" component={SearchScreen} />
            <Tab.Screen name= "About" component={AboutScreen}/>
    </Tab.Navigator>
    );
}