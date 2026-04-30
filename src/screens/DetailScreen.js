import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const DetailScreen = ({ route }) => {
    const { meal } = route.params;

    return (
        <ScrollView style={styles.container}>
            <Image source={{ uri: meal.strMealThumb }}
            style={styles.image} />

            <View style={styles.content}>
                <Text style={styles.title}>{meal.strMeal}</Text>

                <Text style={styles.text}>Kategori: {meal.strCategory}</Text>
                <Text style={styles.text}>Asal: {meal.strArea}</Text>

                <Text style={styles.section}>Instruksi: </Text>
                <Text style={styles.text}>
                    {meal.strInstructions}
                </Text>
            </View>

        </ScrollView>
        
     
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff', },
    image: { width: '100%', height: 250, },
    content: { padding: 16, },
    title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10, },
    text: { fontSize: 14, marginBottom: 8, },
    section: { fontSize: 16, fontWeight: 'bold', marginTop: 10, },
});

export default DetailScreen;

