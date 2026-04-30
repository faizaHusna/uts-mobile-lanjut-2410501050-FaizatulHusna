import { Ionicons } from '@expo/vector-icons';
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useFavorites } from '../context/FavoritesContext';

const FavoritesScreen = ({ navigation }) => {
    const { favorites, removeFavorite } = useFavorites();

    const handleRemove = (meal) => {
        Alert.alert(
            'Hapus Favorit',
            `Yakin ingin menghapus "${meal.strMeal}" dari favorit?`,
            [
                { text: 'Batal', style: 'cancel' },
                { 
                    text: 'Hapus',
                    style: 'destructive',
                    onPress: () => removeFavorite(meal.idMeal),
                },
            ]
        );
    };

    const renderEmpty = () => (
        <View style={styles.emptyContainer}>
            <Ionicons name="heart-outline" size={80} color="#FFD0B0" />
            <Text style={styles.emptyTitle}>Favorit Belum Ada</Text>
            <Text style={styles.emptySubtitle}>
                Tambahkan resep ke favorit untuk melihatnya di sini!
            </Text>
            <TouchableOpacity
            style={styles.exploreButton}
            onPress={() => navigation.navigte('HomeStack')}
            >
                <Text style={styles.exploreButtonnText}>Jelajahi Resep</Text>
            </TouchableOpacity>
        </View>
    );

    const renderItem = ({ item }) => (
        <TouchableOpacity
        style={styles.card}
        onPress={() => handlePress(item)}
        activeOpacity={0.85}
        >
            <Image source={{ uri: item.strMealThumb}} style={styles.cardImage} resizeMode="cover" />
            <View style={styles.cardInfo}>
                <Text style={styles.cardName} numberOfLines={2}>
                {item.strMeal}
                </Text>
                <View style={styles.cardMeta}>
                    {item.setCategory && (
                        <Text style={styles.cardMeta1}>{item.strCategory}</Text>
                    )}
                    {item.strArea && (
                        <Text style={styles.cardMeta2}>{item.strArea}</Text>
                    )}
                </View>
            </View>

            <TouchableOpacity 
            style={styles.deleteButton}
            onPress={() => handleRemove(item)}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            >
                <Ionicons name="trash-outline" size={20} color="#FF3B30"/>
            </TouchableOpacity>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
            <Text style={styles.headerTitle}>Favorit Saya ❤️</Text>
            {favorites.length > 0 && (
                <Text style={styles.headerCount}>{favorites.length}</Text>
            )}
            </View>

            <FlatList
            data={favorites}
            keyExtractor={(item) => item.idMeal}
            renderItem={renderItem}
            ListEmptyComponent={renderEmpty}
            contentContainerStyle={[ styles.listContent, favorites.length === 0 && styles.listContentEmpty,]}
            showsVerticalScrollIndicator={false}
            />
            </View>
    );

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    header: { paddingHorizontal: 20, paddingTop: 20, paddingBottom: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', },
    headerTitle: { fontSize: 26, fontWeight: 'bold', backgroundColor: 'transparent', paddingHorizontal: 12, paddingVertical: 4, borderRadius: 20, },
    listContent: { paddingHorizontal: 16, paddingBottom: 24, },
    listContentEmpty: { flexGrow: 1, },
    card: { flexDirection: 'row', backgroundColor: '#fff', borderRadius: 14, overflow: 'hidden', alignItems: 'center', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.07, shadowRadius: 6, elevation:3, },
    cardImage: { width: 90, height: 90, backgroundColor: '#f0e8e0', },
    cardInfo: { flex: 1, padding: 12, gap: 6, },
    cardName: { fontSize: 15, fontWeight: '700', color: '#2D1B0E', lineHeight: 20, },
    cardMeta: { flexDirection: 'row', gap: 6, flexWrap: 'wrap' },
    cardMeta1: { fontSize: 11, color: '#FF6B35', fontWeight: '600', backgroundColor: '#FFF0E8', paddingHorizontal: 8, paddingVertical: 2, borderRadius: 10 },
    cardMeta2: { fontSize: 11, color: '#2196f3', fontWeight: '600', backgroundColor: '#E8F4FD', paddingHorizontal: 8, paddingVertical: 2, borderRadius: 10 },
    deleteButton: { padding: 16, },
    emptyContainer: { flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 40, paddingTop: 60, gap: 12, },
    emptyTitle: { fontSize: 22, fontWeight: '800', color: '#2D1B0E', },
    emptySubtitle: { fontSize: 14, color: '#aaa', textAlign: 'center', lineHeight: 22, },
    exploreButton: { marginTop: 8, backgroundColor: '#FF6B35', borderRadius: 30 , paddingHorizontal: 28, paddingVertical: 14, },
    exploreButtonnText: { color: '#fff', fontWeight: '700', fontSize: 15, },


});

export default FavoritesScreen;



