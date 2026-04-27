import { NavigationContainer } from '@react-navigation/native';

import TabNavigator from './src/navigation/TabNavigator';

export default function App() {
    return (
        <FavoritesProvider>
            <NavigationContainer>
                <TabNavigator />
                </NavigationContainer>
        </FavoritesProvider>
    );
    
}