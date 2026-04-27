import { createNativeStackNavigator } from 'react-navigation/native-stack';

import DetailScreen from '../DetailScreen';
import HomeScreen from '../HomeSCreen';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'ResepKita' }} />
            <Stack.Screen name="Detail" component={DetailScreen} options={{ title: 'Detail Resep' }} />
        </Stack.Navigator>
    );
}