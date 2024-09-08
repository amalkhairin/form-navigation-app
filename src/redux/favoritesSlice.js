// redux/favoritesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: [], // Array of product IDs
  reducers: {
    addFavorite: (state, action) => {
      const id = action.payload;
      if (!state.includes(id)) {
        state.push(id);
      }
    },
    toggleFavorite: (state, action) => {
      const id = action.payload;
      const index = state.indexOf(id);
      if (index >= 0) {
        state.splice(index, 1); // Remove ID if it's already in favorites
      } else {
        state.push(id); // Add ID to favorites
      }
    },
    removeFavorite: (state, action) => {
      const id = action.payload;
      return state.filter(favoriteId => favoriteId !== id);
    },
    isFavorite: (state, action) => {
      const id = action.payload;
      return state.includes(id);
    },
  },
});

export const { addFavorite, removeFavorite, toggleFavorite, isFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
