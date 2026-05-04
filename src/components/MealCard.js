import { Ionicons } from '@expo/vector-icons';
import { Image, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';

const MealCard = ({ meal, onPress, isFavorite, }) => {
    return (
        <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.85}>
            {/* Gambar Resep */}
            <Image source={{ uri: meal.strMealThumb }} style={styles.image} resizeMode='cover' />
            {/* Badge Favori */}
            {isFavorite && (
                <View style={styles.favoriteBadge}>
                    <Ionicons name='heart' size={12} color='#fff' />
                </View>
            )}
            {/* Info resep */}
            <View style={styles.info}>
                <Text style={styles.name} numberOfLines={2}>
                    {meal.strMeal}
               </Text>
               <View style={styles.meta}>
                {meal.strCategory && (
                    <View style={styles.tag}>
                    <Text style={styles.tagText}>{meal.strCategory}</Text>
                    </View>
                )}
                {meal.strArea && (
                    <View style={[styles.tag, styles.areaTag]}>
                        <Text style={[styles.tagText, styles.areaTagText]}>
                            {meal.strArea}
                        </Text>
                        </View>

                )}
            </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: { backgroundColor: '#FFF', borderRadius: 16, overflow: 'hidden', marginBottom: 16, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.08, shadowRadius: 8, elevation: 3, },
    image: { width: '100%', height: 100, backgroundColor: '#F0E8E0', },
    favoriteBadge: { position: 'absolute', top: 10, right: 10, backgroundColor: '#FF6B35', borderRadius: 20, width: 28, height: 28, alignItems: 'center', justifyContent: 'center', },
    info: { padding: 14, },
    name: { fontSize: 16, fontWeight: '700', color: '#2D1B0E', marginBottom: 8, lineHeight: 22, },
    meta: { flexDirection: 'row', flexWrap: 'wrap', gap: 6, },
    tag: { backgroundColor: '#FFF0E8', borderRadius: 20, paddingHorizontal: 10, paddingVertical: 4, },
    tagText: { fontSize: 11, fontWeight: '600', color: '#FF6B35', },
    areaTag: { backgroundColor: '#E8F4FD', },
    areaTagText: { color: '#2196F3', },

});

export default MealCard;