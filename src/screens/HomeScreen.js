import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { fetchMeals } from '../services/mealApi';



const HomeScreen = ({ navigation }) => {
    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [refreshing, setRefreshing] = useState(false);


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
        setRefreshing(true);
        await loadMeals();
        setRefreshing(false);
    
    };

    const handleMealPress = (meal) => {
        navigation.navigate('Detail', { meal });
    };

    if (loading) return <Text>Loading...</Text>;
    if (error) return <Text>{error}</Text>;

 

    return (
        <View style={styles.container}>
            <FlatList 
            data={meals}
                keyExtractor={(item) => item.idMeal}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.card}
                    onPress={() => handleMealPress(item)}>
                        
                        <Text style={styles.title}>{item.strMeal}</Text>
                    </TouchableOpacity>
                )}
                refreshing={refreshing}
                onRefresh={handleRefresh}
                />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff', padding: 10, },
    card: { backgroundColor: '#f5f5f5', padding: 15, borderRadius: 8, marginBottom: 10, },
    title: { fontSize: 16, fontWeight: 'bold', },

});

export default HomeScreen;