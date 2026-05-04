import { Image, StyleSheet, Text, View, } from 'react-native';

const AboutScreen = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/my_image.jpg')}
            style={styles.image}/>

            <Text style={styles.nama}>Faizatul Husna</Text>
            <Text style={styles.text}>NIM: 2410501050</Text>
            <Text style={styles.text}>Kelas: B</Text>
            <Text style={styles.text}>Tema: ResepKita</Text>



            <Text style={styles.credit}>
                API: TheMealDB(www.themealdb.com)
            </Text>
            </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: 'center', justifyContent:'center', padding: 16, },
    image: { width: 120, height: 120, borderRadius: 60, marginBottom: 5, },
    name: { fontSize: 22, fontWeight: 'bold', marginBottom: 10, },
    credit: { marginTop: 20, fontStyle: 'italic', },
});

export default AboutScreen;