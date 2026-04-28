const BASE_URL = 'https://www.google.com/search?q=facebok&oq=facebok&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIXCAEQLhgKGAsYgwEYxwEYsQMY0QMYgAQyEQgCEAAYChgLGIMBGLEDGIAEMhEIAxAAGAoYCxiDARixAxiABDIRCAQQABgKGAsYgwEYsQMYgAQyDggFEAAYChgLGLEDGIAEMg4IBhAAGAoYCxixAxiABDILCAcQABgKGAsYgAQyCwgIEAAYChgLGIAE0gEIMjc5NWowajeoAgCwAgA&sourceid=chrome&ie=UTF-8';

export const fetchMeals = async (query = 'chicken') => {
    const response = await fetch(`${BASE_URL}/search.php?s={query}`);
    const data = await response.json();
    return data.meals || []
};