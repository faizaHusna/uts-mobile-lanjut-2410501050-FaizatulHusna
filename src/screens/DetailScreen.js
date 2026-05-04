import { Ionicons } from '@expo/vector-icons';
import { Alert, Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
import { useFavorites } from '../context/FavoritesContext';

const DetailScreen = ({ route, navigation }) => {
    const { meal } = route.params;

    const { addFavorite, removeFavorite, isFavorite } = useFavorites();
    const favorited = isFavorite(meal.idMeal);

    const handleFavoriteToggle = () => {
        if (favorited) {
            removeFavorite(meal.idMeal);
            Alert.alert('Dihapus', `"${meal.strMeal}" dihapus dari favorit.`);
        } else {
            addFavorite(meal);
            Alert.alert('Ditambahkan! ❤️', `"${meal.strMeal}" berhasil ditambahkan ke favorit!`);
        }
    };

    const getIngredients = () => {
        const ingredients = [];
        for (let i = 1; i <= 20; i++) {
            const ingredient = meal[`strIngredient${i}`];
            const measure = meal[`strMeasure${i}`];
            if (ingredient && ingredient.trim()) {
                ingredients.push(`${measure?.trim() || ''} ${ingredient.trim()}`.trim());

            }

        }

        return ingredients;

    };

    const ingredients = getIngredients();

    return (
        <View style={styles.container}>
            <StatusBar barStyle='light-content' backgroundColor="transparent" translucent />

            <ScrollView showsVerticalScrollIndicator={false} bounces={true}>
                {/* Gambar Header */}
                <View style={styles.imageContainer}>
                    <Image source={{ uri: meal.strMealThumb }} style={styles.image} resizeMode='cover'/>
                    <View style={styles.imageOverlay}/>

                    <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                        <Ionicons name='arrow-back' size={22} color="#fff" />
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.favoriteButton, favorited && styles.favoriteButtonActive]} onPress={handleFavoriteToggle}>
                        <Ionicons name={favorited ? 'heart' : 'heart-outline'} size={22} color={favorited ? '#fff' : '#fff'} />

                    </TouchableOpacity>
                </View>
                <View style={styles.content}>
                    {/* Field 1: Nama Resep */}
                    <Text style={styles.mealName}>{meal.strMeal}</Text>
                    {/* Field 2: Kategori & Area */}
                    <View style={styles.badgeRow}>
                        {meal.strCategory && ( 
                            <View style={styles.badge}>
                                <Ionicons name='list-outline' size={13} color="#FF6B35" />
                                <Text style={styles.badgeText}>{meal.strCategory}</Text>
                                </View>
                        )}
                        {/* Field 3: Area*/}
                        {meal.strArea && (
                            <View style={[styles.badge, styles.areaBadge]}>
                                <Ionicons name="location-outline" size={13} color='#2196f3' />
                                <Text style={[styles.badgeText, { color: '#2196F3' }]}>
                                    {meal.strArea}
                                </Text>
                                </View>
                        )}
                        {meal.strTags && (
                            <View style={[styles.badge, styles.tagbadge]}>
                            <Ionicons name='pricetag-outline' size={13} color='#4CAF50' />
                            <Text style={[styles.badgeText, { color: '#4CAF50'}]}>
                            {meal.strTags.split(',')[0]}
                                </Text>
                                </View>


                        )}
                    </View>

                    {/* Field 4: Bahan-Bahan*/}
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>🍳 Bahan-Bahan</Text>
                        <View style={styles.ingredientGrid}>
                            {ingredients.map((ingredient, index) => (
                                <View key={index} style={styles.ingredientItem}>
                                <View style={styles.ingredientDot} />
                                <Text style={styles.ingredientText}>{ingredient}</Text>
                                </View>
                            
                            ))}
                        </View>
                    </View>

                    { /*Field 5: Instruksi/Cara Memasak*/  }
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}> 📋 Cara Memasak</Text>
                        <Text style={styles.instructions}>
                            {meal.strInstructions || 'Instruksi tidak tersedia.'}
                        </Text>
                    </View>
                    
                    {/* Sumber Resep */}
                    {meal.strSource && (
                        <View style={styles.section}>
                            <Text style={styles.sectionTitle}>🔗 Sumber</Text>
                            <Text style={styles.sourceText}>{meal.strSource}</Text>
                            </View>
                    )}
                    <TouchableOpacity style={[styles.favoriteButton, favorited && styles.favoriteButtonActive]}
                    onPress={handleFavoriteToggle}
                    activeOpacity={0.85}>
                        <Ionicons name={favorited ? 'heart' : 'heart-outline'} size={22} color='#FFF' />
                        <Text style={styles.favoriteButtonText}>
                            {favorited ? 'Hapus dari favorit' : 'Tambah ke Favorit'}
                        </Text>
                    </TouchableOpacity>

                </View>
            </ScrollView>
        </View>
    
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#FFF8F5', },
    // Image Header
    imageContainer: { position: 'relative', height: 300, },
    image: { width: '100%', height: '100%', },
    imageOverlay: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0,0,0,0.25)', },
    backButton: { position: 'absolute', top: 50, left: 16, backgroundColor: 'rgba(0,0,0,0.4)', borderRadius: 20, width: 40, height: 40, alignItems: 'center', justifyContent: 'center', },
    favoriteButtonActive: { backgroundColor: '#FF6B35', },
    // content
    content: { padding: 20, paddingBottom: 40, },
    mealName: { fontSize: 26, fontWeight: '800', color: '#2D1B0E', lineHeight: 34, marginBottom: 12, },
    // Badges
    badgeRow: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFF0E8', borderRadius: 20, paddingHorizontal: 12, paddingVertical: 6, gap: 5, },
    areaBadge: {backgroundColor: '#E8F4FD', },
    tagbadge: { backgroundColor: '#EBF5E9', },
    badgeText: { fontSize: 12, fontWeight: '600', color: '#FF6B35', },
    infoRow: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 16, },
    // Sections
    section: { marginBottom: 24, },
    sectionTitle: { fontSize: 18, fontWeight: '700', color: '#2D1B0E', marginBottom: 12, },
    // Ingredients
    ingredientGrid: { backgroundColor: '#FFF', borderRadius: 12, padding: 16, gap: 19, shadowColor: '#000', shadowOffset: { width: 0, height: 1}, shadowOpacity: 0.05, shadowRadius: 4, elevation: 2, },
    ingredientItem: { flexDirection: 'row', alignItems: 'center', gap: 10, },
    ingredientDot: { width: 8, height: 8, borderRadius: 4, backgroundColor: '#FF6B35', },
    ingredientText: { fontSize: 14, color: '#444', flex: 1, },
    // Instructions
    instructions: { fontSize: 14, color: '#555', lineHeight: 24, backgroundColor: '#FFF', borderRadius: 12, padding: 16, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.05, shadowRadius: 4, elevation: 2,},
    sourceText: { fontSize: 13, color: '#2196F3', textDecorationLine: 'underline', },
    // Favorite Button
    favoriteButton: { flexDirection: 'row', alignItems:'center', backgroundColor: '#FF6B35', borderRadius: 30, paddingVertical: 16, marginTop: 8, gap: 10, shadowColor: '#FF6B35', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 8, elevation: 5, },
    favoriteButtonActive: { backgroundColor: '#CC3300', },
    favoriteButtonText: { fontSize: 16, fontWeight: '700', color: '#FFF', },

});



export default DetailScreen;

