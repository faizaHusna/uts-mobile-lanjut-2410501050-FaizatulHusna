import { Ionicons } from '@expo/vector-icons';
import { useCallback, useEffect, useState } from 'react';
import { FlatList, RefreshControl, StatusBar, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
import ErrorMessage from '../components/ErrorMessage';
import LoadingSpinner from '../components/LoadingSpinner';
import MealCard from '../components/MealCard';
import { useFavorites } from '../context/FavoritesContext';
import { fetchMeals } from '../services/mealApi';

const CATEGORIES = ['Chicken', 'Beef', 'Seafood', 'Vegetarian', 'Pasta', 'Dessert'];

const HomeScreen = ({ navigation }) => {
    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [refreshing, setRefreshing] = useState(false);
    const[activeCategory, setActiveCategory] = useState('Chicken');

    const { isFavorite } = useFavorites();

    const loadMeals = useCallback(async (query = activeCategory, isRefresh = false) => {
        try {
            if (!isRefresh) setLoading(true);
            setError(null);

            const data = await fetchMeals(query);
            setMeals(data);
        } catch (err) {
            setError(err.message || 'Gagal mengambil data resep');
        } finally {
            setLoading(false);
            setRefreshing(false);

        }
    }, [activeCategory]);


    useEffect(() => {
   loadMeals();
   }, [activeCategory]);

    const handleRefresh = useCallback(() => {
        setRefreshing(true);
        loadMeals(activeCategory, true);
    }, [activeCategory, loadMeals]);

    const handleMealPress = (meal) => {
        navigation.navigate('Detail', { meal });
    };


    if (loading && !refreshing) {
        return <LoadingSpinner message='Memuat resep lezat...' />;
    }

    if (error && meals.length === 0) {
        return (
            <ErrorMessage
                message={error}
                onRetry={() => loadMeals(activeCategory)} />
        );
    }

  
    const renderItem = ({ item }) => (
        <MealCard
            meal={item}
            onPress={() => handleMealPress(item)}
            isFavorite={isFavorite(item.idMeal)} />
    );

    const renderHeader = () => (
        <View>
            {/* Hero Header */}
            <View style={styles.hero}>
                <Text style={styles.heroGreeting}>Selamat Datang 🧑‍🍳</Text>
                <Text style={styles.heroTitle}>Temukan Resep{'\n'}Favoritmu!</Text>
            </View>

            {/* Filter Kategori */}
            <Text style={styles.sectionTitle}>Pilih Kategori</Text>
            <FlatList 
                horizontal
                data={CATEGORIES}
                keyExtractor={(item) => item}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.categoryList}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={[
                            styles.categoryChip,
                            activeCategory === item && styles.categoryChipActive,
                        ]}
                        onPress={() => setActiveCategory(item)}>
                        

                        <Text style={[styles.categoryText, activeCategory === item && styles.categoryTextActive,
                        ]}

                        >   

                        {item}
                    </Text>
                </TouchableOpacity>
            )} 
            
            />

    < Text style={styles.sectionTitle} >
        Resep {activeCategory} ({meals.length})
            </Text >

    {error && meals.length > 0 && (
        <View style={styles.errorBanner}>
            <Ionicons name='warning-outline' size={16} color='#FF6B35' />
            <Text style={styles.errorBannerText}>{error}</Text>
        </View>
    )}
    </View >
    );

const renderEmpty = () => (
    <View style={styles.emptyContainer}>
        <Ionicons name='restaurant-outline' size={60} color='#DDD' />
        <Text style={styles.emptyText}>Tidak ada resep ditemukan</Text>
    </View>
);

return (
    <View style={styles.container}>
        <StatusBar barStyle='dark-content' backgroundColor='#FFF8F5' />

        {/* Flatlist utama dengan RefreshControl*/}
        <FlatList
            data={meals}
            keyExtractor={(item)  => item.idMeal}
        renderItem={renderItem}
        ListHeaderComponent={renderHeader}
        ListEmptyComponent={renderEmpty}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}

        refreshControl={
            <RefreshControl
                refreshing={refreshing}
                onRefresh={handleRefresh}
                colors={['#FF6B35']}
                tintColor='#FF6B35'

            />
        }
    />
    </View>
);

};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#FFFBF5', },
    listContent: { paddingHorizontal: 16, paddingBottom: 24, flexGrow: 1, },
    hero: { paddingTop: 20, paddingBottom: 24, },
    heroGreeting: { fontSize: 14, color: '#FF6B35', fontWeight: '600', marginBottom: 4, },
    heroTitle: { fontSize: 28, fontWeight: '800', color: '#2D1B0E', lineHeight: 36, },
    sectionTitle: { fontSize: 16, fontWeight: '700', color: '#2D1B0E', marginBottom: 12, marginTop: 4, },
    categoryList: { paddingBottom: 16, gap: 8, },
    categoryChip: { paddingHorizontal: 18, paddingVertical: 8, borderRadius: 20, backgroundColor: '#FFF', borderWidth: 1.5, borderColor: '#E0D0C0', marginRight: 8, },
    categoryChipActive: { backgroundColor: '#FF6B35', borderColor: '#FF6B35', },
    categoryText: { fontSize: 13, fontWeight: '600', color: '#888', },
    categoryTextActive: { color: '#FFF', },
    errorBanner: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFF0E8', borderRadius: 10, padding: 12, marginBottom: 16, gap: 8, borderWidth: 1, borderColor: '#FFD0B0', },
    errorBannerText: { fontSize: 13, color: '#CC4400', flex: 1, },
    emptyContainer: { alignItems: 'center', justifyContent: 'center', paddingTop: 60, gap: 12, },
    emptyText: { fontSize: 15, color: '#AAA', textAlign: 'center', },


});



export default HomeScreen;