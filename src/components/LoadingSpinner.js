import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

const LoadingSpinner = ({ message = 'Memuat resep...' }) => {
    return (
        <View style={StyleSheet.container}>
            <ActivityIndicator size='large' color='#FF6B35' />
            <Text style={styles.text}>{message}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFF8F5', gap: 16, },
    text: { fontSize: 15, color: '#888', fontWeight: '500', },

});

export default LoadingSpinner;