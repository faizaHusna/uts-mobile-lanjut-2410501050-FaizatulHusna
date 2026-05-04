import { createContext, useContext, useReducer } from 'react';

const ADD_FAVORITE = 'ADD_FAVORITE';
const REMOVE_FAVORITE = 'REMOVE_FAVORITE';

const initialState = {
    favorites: [],

};

const favoritesReducer = (state, action) => {
    switch (action.type) {
        case ADD_FAVORITE: {

            const alreadyExists = state.favorites.some(
                (meal) => meal.idMeal === action.payload.idMeal
            );
            if (alreadyExists) {
                return state;
            } 
            return {
                ...state,
                favorites: [...state.favorites, action.payload],
            };
        }

        case REMOVE_FAVORITE: {
            return {
                ...state,
                favorites: state.favorites.filter(
                    (meal) => meal.idMeal !== action.payload
                ),
            };
        
        }

        default:
        return state;

    }

    };



export const FavoritesContext = createContext();


export const FavoritesProvider = ({ children }) => {
    const [state, dispatch] = useReducer(favoritesReducer, initialState);
    
    const addFavorite = (meal) => {
        dispatch({ type: ADD_FAVORITE, payload: meal });
    };

    const removeFavorite = (mealId) => {
        dispatch({ type: REMOVE_FAVORITE, payload: mealId });
    };

    const isFavorite = (mealId) => {
        return state.favorites.some((meal) => meal.idMeal === mealId);
    };

    const value = {
        favorites: state.favorites,
        addFavorite,
        removeFavorite,
        isFavorite,
    };

    return (
        <FavoritesContext.Provider value={value}>
            {children}
        </FavoritesContext.Provider>
    );
    };

    export const useFavorites = () => {
        const context = useContext(FavoritesContext);
        if (!context) {
            throw new Error('useFavorites harus digunakan di dalam FavoritesProvider');
        }
        return context;
    };