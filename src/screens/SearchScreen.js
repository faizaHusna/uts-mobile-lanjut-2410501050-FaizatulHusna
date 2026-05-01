import { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { fetchMeals } from '../services/mealApi';

const SearchScreen = ({ navigation }) => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [error, setError] = useState('');

    const handleSearch = async () => {
        if (!query) {
            setError('Tidak boleh kosong');
            return;
        }

        if (query.length < 3) {
            setError('Minimal 3 karakter');
            return;
        }

        setError('');

        try {
            const data = await fetchMeals(query);
            setResults(data || []);
        } catch (err) {
            setError('Gagal mencari resep')
        }
    };

    const handlePress = (meal) => {
       navigation.navigate('Detail', { meal });
    };

    const renderEmpty = () => (
        <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>Tidak ada hasil</Text>
        </View>
    );
    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.card} onPress={() => handlePress(item)}>
            <Text style={styles.cardText}>{item.strMeal}</Text>
        </TouchableOpacity>

    );


    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Cari Resep 🔍</Text>
            </View>

            {/* Input */}
            <View style={styles.inputContainer}>
                <TextInput placeholder='Masukkan nama resep' value= {query} onChangeText={setQuery} style={styles.input} />
                <TouchableOpacity onPress={handleSearch} style={styles.button}>
                    <Text style={styles.buttontext}>Cari</Text>
                    </TouchableOpacity>
            </View>
            {error !== '' && <Text style={styles.error}>{error}</Text>}

            {/* List */}
            <FlatList data={results} keyExtractor={(item) => item.idMeal} renderItem={renderItem} ListenEmptyComponent={renderEmpty} contentContainerStyle={styles.listContent} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#FFF', },
    header: { padding: 20, }, 
    headertitle: { fontSize: 22, fontWeight: 'bold', },
    inputContainer: { paddingHorizontal: 16, gap: 10, },
    input: { borderWidth: 1, padding: 10, borderRadius: 0, },
    button: { backgroundColor: "#FF6B35", padding: 10, borderRadius: 8, alignItems: 'center', },
    buttontext: { color: '#FFF', fontWeight: 'bold', },
    error: { color: 'red', paddingHorizontal: 16, marginTop: 5, },
    listContent: { padding: 16, },
    card: { padding: 12, backgroundColor: '#FFF', marginBottom: 10, borderRadius: 10, elevation: 2, },
    cardText: { fontSize: 14, },
    emptyContainer: { alignItems: 'center', marginTop: 40, },
    emptyText: { color: '#AAA', },


});

export default SearchScreen;