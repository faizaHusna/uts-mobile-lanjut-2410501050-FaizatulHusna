const BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

export const fetchMeals = async (query = 'chicken') => {
    try {
        const response = await fetch (
            `${BASE_URL}/search.php?s=${encodeURIComponent(query)}`
        );

        if (!response.ok) {
            throw new Error('Gagal mengambil data');
        }

        const data = await response.json();
        return data.meals || [];
      } catch (error) {
        console.log('API Error:', error);
        return [];
      }

    };
