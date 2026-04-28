import { useEffect, useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { fetchMeals } from '../services/mealApi';



const HomeScreen = ({ navigation }) => {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        loadMeals();
    }, []);

    const loadMeals = async () => {
        const data = await fetchMeals();
       
        
    };

    const handleMealPress = (meal) => {
        navigation.navigate('Detail', { meal });
    };

    

    return (
        <View>
            <FlatList data={meals}
                keyExtractor={(item) => item.idMeal}
                renderItem={({ item}) => (
                    <TouchableOpacity onPress={() => handleMealPress(item)}>
                        <Text>{item.strMeal}</Text>
                    </TouchableOpacity>
                )}
                />
        </View>
    );
};

export default HomeScreen;