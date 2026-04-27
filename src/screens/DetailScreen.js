import { Text, View } from 'react-native';

const DetailScreen = ({ route }) => {
    const { meal } = route.params;

    return (
        <View>
            <Text>Detail Screen</Text>
            <Text>{meal.strMeal}</Text>
            </View>
    );
};

export default DetailScreen;