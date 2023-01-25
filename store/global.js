import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    fiftyLifeline: true,
    page: 'home',
}
export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    useFiftyLifeline: (state) => {
      state.fiftyLifeline = false;
    },
    startGame: (state) => {
      state.page = 'game';
    },
    endGame: (state) => {
      state.page = 'home';
    },
    showHighscores: (state) => {
      state.page = 'highscores';
    }
  },
})

// Action creators are generated for each case reducer function
export const { useFiftyLifeline, startGame, endGame, showHighscores } = globalSlice.actions

export default globalSlice.reducer