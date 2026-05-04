import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const ErrorMessage = ({ message, onRetry }) => {
    return (
        <View style={styles.container}>
            {/* Icon Error */}
            <Ionicons name='alert-circle-outline' size={64} color="#FF6B35" />

            {/* Judul Error */}
            <Text style={styles.title}>Oops! Terjadi Kesalahan</Text>

            {/* Pesan error detail */}
            <Text style={styles.message}>
                {message || 'Gagal mengabmbil data. Periksa Koneksi Internet Anda.'}
            </Text>

            {/* Tombol retry */}
            {onRetry && (
                <TouchableOpacity style={styles.retryButton} onPress={onRetry}>
                    <Ionicons name='refresh-outline' size={20} color='#FFF' />
                    <Text syle={styles.retryText}>COoba Lagi</Text>
                </TouchableOpacity>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 32, backgroundColor: '#FFF8F5', },
    title: { fontSize: 20, fontWeight: '700', color: '#2D180E', marginTop: 16, marginBottom: 8, textAlign: 'center', },
    message: { fontSize: 14, color: '#888', textAlign: 'center', lineHeight: 22, marginBottom: 28, },
    retryButton: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#FF6B35', paddingHorizontal: 28, paddingVertical: 14, borderRadius: 30, gap: 8, shadowColor: '#FF6B35', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 8, elevation: 5, },
    retryText: { color: '#FFF', fontSize: 16, fontWeight: '600', },
});

export default ErrorMessage;