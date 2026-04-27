import { FlatList, Text, TouchableOpacity, View } from 'react-native';

const HomeScreen = ({ navigation }) => {
    const meals = [
        { idMeal: '1', strMeal: 'Ayam Goreng'},
        { idMeal: '2', strMeal: 'Nasi Goreng'},
    ];

    const handleMealPress = (meal) => {
        navigation.navigate('Detail', { meal });
    };

    return (
        <View>
            <FlatList data={meals}
                keyExtractor={(item) => item.idMeal}
                renderItem={({ item}) => (
                    <TouchableOpacity onPress={() => handleMealPress(item)}>
                        <Text>{item.strMeal}</Text>
                    </TouchableOpacity>
                )}
                />
        </View>
    );
};

export default HomeScreen;