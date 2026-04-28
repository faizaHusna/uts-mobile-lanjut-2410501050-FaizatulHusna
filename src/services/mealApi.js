const BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

export const fetchMeals = async (query = 'chicken') => {
    const response = await fetch(`${BASE_URL}/search.php?s={query}`);
    const data = await response.json();
    return data.meals || []
};