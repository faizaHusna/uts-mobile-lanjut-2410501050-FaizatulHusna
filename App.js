import { NavigationContainer } from '@react-navigation/native';
import { FavoritesProvider } from './src/context/FavoritesContext';
import StackNavigator from './src/navigation/StackNavigator';
export default function App() {
    return (
        
            <FavoritesProvider>
            <NavigationContainer>
                <TabNavigator />
                <StackNavigator />
                </NavigationContainer>
                </FavoritesProvider>
        
    );
    
}