import { useEffect, useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { fetchMeals } from '../services/mealApi';



const HomeScreen = ({ navigation }) => {
    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [refreshing, setrefreshing] = useState(false);


    useEffect(() => {
        loadMeals();
    }, []);

    const loadMeals = async () => {
        try {
            setLoading(true);
            setError(null);
        
        const data = await fetchMeals();
        setMeals(data || []);
        } catch (err) {
            setError('Gagal mengambil data');
        } finally {
            setLoading(false);
        }   
        
    };

    const handleRefresh = async () => {
        setrefreshing(true);
        await loadMeals();
        setrefreshing(false);
    
    };

    const handleMealPress = (meal) => {
        navigation.navigate('Detail', { meal });
    };

    if (loading) {
        return <Text>Loading...</Text>;
    }

    if (error) {
        return <Text>{error}</Text>;
    }

    if (meals.length === 0){
        return <Text>Data Kosong</Text>
    }
 

    return (
        <View>
            <FlatList 
            data={meals}
                keyExtractor={(item) => item.idMeal}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => handleMealPress(item)}>
                        <Text style={{ padding: 10 }}>{item.strMeal}</Text>
                    </TouchableOpacity>
                )}
                refreshing={refreshing}
                onRefresh={handleRefresh}
                />
        </View>
    );
};

export default HomeScreen;