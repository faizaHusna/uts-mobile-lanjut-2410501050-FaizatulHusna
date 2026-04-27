
import StackNavigator from ',/StackNavigator';
import AboutScreen from '../AboutScreen';
import FavoritesScreen from '../FavoritesScreen';
import SearchScreen from '../SearchScreen';

const Tab = createBottomNavigator();

export default function TabNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component = {StackNavigator} />
            <Tab.Screen name= "Favorites" component={FavoritesScreen} />
            <Tab.Screen name= "Search" component={SearchScreen} />
            <Tab.Screen name= "About" component={AboutScreen}/>
    </Tab.Navigator>
    );
}